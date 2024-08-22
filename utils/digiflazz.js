const Axios = require("axios");
const Crypto = require("crypto");
const config = require("../config.json");

class Initial {
  #username = "";
  #apikey = "";
  constructor(username, apikey, DEVELOPMENT = true) {
    this.#username = username;
    this.#apikey = apikey;
    this._username = "*".repeat(username.length);
    this._apikey = "*".repeat(apikey.length);
    this.DEVELOPMENT = DEVELOPMENT;
  }
  async #createRequest(opts) {
    return await Axios.request({
      baseURL: "https://api.digiflazz.com",
      headers: {
        ["User-Agent"]: [config.transaksi_data.ownerName],
      },
      ...opts,
    }).catch((e) => (e === null || e === void 0 ? void 0 : e.response));
  }
  #sign(opt) {
    const sum = Crypto.createHash("md5");
    sum.update(this.#username + this.#apikey + (opt ? opt : ""));
    return sum.digest("hex")
  }
  
  async checkDeposit() {
    const sign = this.#sign("depo");
    const { data } = await this.#createRequest({
      url: "/v1/cek-saldo",
      method: "POST",
      data: {
        cmd: "deposit",
        username: this.#username,
        sign,
      },
    });
    // Expected response from api server
    const ExpectedResponse = {
      data: {
        deposit: Number,
      },
    };
    return data.data;
  }

  async depositSaldo(amountDepo, bankPilih, namaRek) {
    const sign = this.#sign("deposit");
    const username = this.#username;
    const data  = await this.#createRequest({
      url: "/v1/deposit",
      method: "POST",
      data: {
        username,
        amount: parseInt(amountDepo),
        Bank: bankPilih,
        owner_name: namaRek,
        sign,
      }
    })
    const dataRes = data.data;
    if (dataRes.rc === "03") {
      return await this.#watcherRC(_data);
    }
    console.log("Digi:", dataRes);
    return dataRes;
  }

  async priceList(cmd = "prepaid", code = null) {
    const sign = this.#sign("pricelist");
    const { data } = await this.#createRequest({
      url: "/v1/price-list",
      method: "POST",
      data: {
        cmd,
        username: this.#username,
        code,
        sign,
      },
    });
    return data.data;
  }
  async #transactionRequest(opts) {
    const { data } = await this.#createRequest({
      url: "/v1/transaction",
      method: "POST",
      data: {
        ...opts,
      },
    });
    return data.data;
  }
  async transaction(buyer_sku_code, customer_no, msg = null) {
    const ref_id = config.transaksi_data.ref_id + Date.now();
    const sign = this.#sign(ref_id);
    const _data = {
      username: this.#username,
      buyer_sku_code,
      customer_no,
      ref_id,
      sign,
    };
    const data = await this.#transactionRequest({
      ..._data,
      ...(this.DEVELOPMENT ? { testing: true } : {}),
      msg,
    });
    if (data.rc === "03") {
      return await this.#watcherRC(_data);
    }
    return data;
  }
  async #watcherRC(opts) {
    let counter = 0, data = {};
    while (true) {
      const _data = await this.#transactionRequest({
        ...opts,
      });
      if (_data.rc === "00" || _data.status === "Gagal") {
        Object.assign(data, {
          ..._data,
        });
        break;
      } else {
        if (counter >= 50000) {
          Object.assign(data, {
            ..._data,
          });
          break;
        } else {
          counter += 1;
        }
      }
    }
    return data;
  }

  /**
   * Get the price of a product.
   * @param {string} code Product code.
   * @return {Promise<number>} Price of the product.
   */
  async getPrice(code) {
    try {
      const priceList = await this.priceList('prepaid', code);
      if (priceList && priceList.length > 0) {
        return priceList[0].price; // Return the price of the first item in the list
      } else {
        throw new Error(`Price not found for product code: ${code}`);
      }
    } catch (error) {
      console.error("Error in getPrice:", error.message);
      throw error;
    }
  }

  async getProductName(code) {
    try {
      const productName = await this.priceList('prepaid', code);
      if (productName && productName.length > 0) {
        return productName[0].product_name; // Return the price of the first item in the list
      } else {
        throw new Error(`Product Name not found for product code: ${code}`);
      }
    } catch (error) {
      console.error("Error in getProductName:", error.message);
      throw error;
    }
  }

  async getProductDesc(code) {
    try {
      const productDesc = await this.priceList('prepaid', code);
      if (productDesc && productDesc.length > 0) {
        return productDesc[0].desc; // Return the price of the first item in the list
      } else {
        throw new Error(`Product Desc not found for product code: ${code}`);
      }
    } catch (error) {
      console.error("Error in getproductDesc:", error.message);
      throw error;
    }
  }

  
}

const Config = config.digiflazz;
const apikey = Config.live
  ? Config.apikey.production
  : Config.apikey.development;

const digiflazz = new Initial(
  Config.username,
  apikey,
  Config.live ? false : true
);

exports.digiflazz = digiflazz;
