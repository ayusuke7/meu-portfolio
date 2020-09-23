import { all, takeLatest } from "redux-saga/effects";

/* Actions */
import { types } from "../ducks/portfolio";

/* Sagas */
import { listarPortfolioRequest } from "./portfolio";

export default function* rootSaga() {
  yield all([takeLatest(types.SET_LIST_PORTFOLIOS, listarPortfolioRequest)]);
}
