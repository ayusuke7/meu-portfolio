import { all, takeLatest } from "redux-saga/effects";

/* Actions */
import { types as portTypes } from "../ducks/portfolio";
import { types as userTypes } from "../ducks/user";

/* Sagas */
import { listarPortfolioRequest } from "./portfolio";
import { loginRequest, registerRequest } from "./user";

export default function* rootSaga() {
  yield all([
    takeLatest(userTypes.REQUEST_LOGIN, loginRequest),
    takeLatest(userTypes.REQUEST_REGISTER, registerRequest),
    takeLatest(portTypes.GET_PORTFOLIOS, listarPortfolioRequest),
  ]);
}
