const axios = require("axios")

exports.stalkff = async(id) => {
   return new Promise(async (resolve, reject) => {
    axios.get(`https://api.hmdan214.repl.co/api/game/free-fire?userid=${id}&zoneid=undefine`)
        .then(({data}) => {
          resolve({
            status: 200,
            id: id,
            nickname: data.result.name
          })
        })
        .catch((err) => {
          resolve({
            status: 404,
            msg: 'User Id Not Found'
          })
        })
    })
}

exports.stalkml = async(id, zoneId) => {
    return new Promise(async (resolve, reject) => {
      axios
        .post(
          'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
          new URLSearchParams(
            Object.entries({
              productId: '1',
              itemId: '2',
              catalogId: '57',
              paymentId: '352',
              gameId: id,
              zoneId: zoneId,
              product_ref: 'REG',
              product_ref_denom: 'AE',
            })
          ),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Referer: 'https://www.duniagames.co.id/',
              Accept: 'application/json',
            },
          }
        )
        .then((response) => {
          resolve({
            status: 200,
            id: id,
            zoneId: zoneId,
            nickname: response.data.data.gameDetail.userName
          })
        })
        .catch((err) => {
          resolve({
            status: 404,
            msg: 'User Id or ZoneId Not Found'
          })
        })
    })
}