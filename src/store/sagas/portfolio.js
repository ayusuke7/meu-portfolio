import { call, put } from "redux-saga/effects";
import { actions } from "../ducks/portfolio";

import ServicePortfolio from "../../services/portfolio";

export function* listarPortfolioRequest({ payload }) {
  try {
    const { data } = yield call(ServicePortfolio.getAll, payload);

    yield put(actions.setPortfolios(data));
  } catch (err) {
    console.error(err);
  }
}
