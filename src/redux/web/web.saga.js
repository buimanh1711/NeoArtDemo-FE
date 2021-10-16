import { takeEvery, call, put, takeLatest, putResolve } from "@redux-saga/core/effects"
import Web3 from "web3"
import Web3Modal from "web3modal"
import cryptoCurConvert from "../../utils/cryptocurrencyConvert"

const loadWeb3Async = async () => {
  console.log('loading web3 object')

  const providerOptions = {
    /* See Provider Options Section */
  }

  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  })

  const provider = await web3Modal.connect()
  return {
    web3: new Web3(provider),
    web3Modal,
    provider
  }
}

function* loadWeb3() {
  try {
    let web3Obj = yield call(loadWeb3Async)
    yield put({ type: 'web/loadWeb3Success', payload: web3Obj })
    yield put({ type: 'web/toggleNotifRequest', payload: { type: 'Success', content: 'Connected to Metamask!' } })
  } catch {
    yield put({ type: 'web/toggleNotifRequest', payload: { type: 'Error', content: 'Can not get web3!' } })
  }
}

function* getUserBalanceAsync({ payload }) {
  const { amount, symbol } = payload
  let value = {}
  value.bnb = parseFloat(amount).toFixed(2)
  // usd || bnb
  try {
    if (amount > 0) {
      let userBalance = yield call(cryptoCurConvert, parseFloat(amount), symbol)
      let { data } = userBalance
      value.usd = parseFloat(data?.data?.quote["USD"]?.price || 0.00).toFixed(2)
    } else {
      value.usd = 0.00
    }

  } catch {
    yield put({ type: 'web/toggleNotifRequest', payload: { type: 'Warning', content: 'Can not convert!' } })
  }

  yield put({ type: 'web/getUserBalance', payload: value })
}


function* toggleNotifSaga({ payload }) {
  if (payload.type) {
    yield putResolve({ type: 'web/toggleNotif', payload })
  }
}

function* webWatcher() {
  console.log('web saga watching')
  yield takeEvery('web/loadWeb3Request', loadWeb3)
  yield takeLatest('web/getUserBalanceRequest', getUserBalanceAsync)
  yield takeLatest('web/toggleNotifRequest', toggleNotifSaga)
}


export default webWatcher
