import { call, put } from "redux-saga/effects";
import { actions } from "../ducks/portfolio";

import ServicePortfolio from "../../services/portfolio";

export function* listarPortfolioRequest() {
  try {
    const data = yield call(ServicePortfolio.getAll);

    yield put(actions.setList(data));
  } catch (err) {
    console.error(err);
  }
}
