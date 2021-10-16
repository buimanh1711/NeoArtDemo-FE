
export const getUserBalanceRequest = function (payload) {
  return ({
    type: 'web/getUserBalanceRequest',
    payload
  })
}

export const loadWeb3Request = function () {
  return ({
    type: 'web/loadWeb3Request',
  })
}

export const toggleNotifRequest = function (payload) {
  return ({
    type: 'web/toggleNotifRequest',
    payload
  })
}