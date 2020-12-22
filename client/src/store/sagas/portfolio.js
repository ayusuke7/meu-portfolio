import { call, put } from "redux-saga/effects";
import { actions } from "../ducks/portfolio";

import PortfolioService from "../../services/portfolio";

const service = new PortfolioService();

export function* listarPortfolioRequest({ payload }) {
  try {
    const { data } = yield call(service.findByUsername, payload);

    yield put(actions.setPortfolios(data));
  } catch (err) {
    yield put(actions.setMessage(err));
  }
}
