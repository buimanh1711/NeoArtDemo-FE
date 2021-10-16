import axios from "axios"

const convertAPI = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com/v1/tools',
  timeout: 1000,
  headers: { 'X-CMC_PRO_API_KEY': 'b5b154cd-ba36-4dd6-9406-fe3cca57a1f0' }
})

const cryptoCurConvert = (amount, symbol) => {
  let symbolId = symbol || 'BNB'

  if (!amount || amount === 'undefined' || amount === 'null')
    return console.log('Can not convert cryptocurrency!')

  return convertAPI({
    method: 'GET',
    url: `/price-conversion?symbol=${symbolId}&amount=${amount}`
  })
}

export default cryptoCurConvert