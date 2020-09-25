import { all, takeLatest } from "redux-saga/effects";

/* Actions */
import { types } from "../ducks/portfolio";

/* Sagas */
import { listarPortfolioRequest } from "./portfolio";

export default function* rootSaga() {
  yield all([takeLatest(types.GET_PORTFOLIOS, listarPortfolioRequest)]);
}
