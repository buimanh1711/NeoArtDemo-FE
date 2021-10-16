import webWatcher from "./web/web.saga";
import { all } from "@redux-saga/core/effects"

export default function* rootSagas() {
  yield all([
    webWatcher()
  ])
}