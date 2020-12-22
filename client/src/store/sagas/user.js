import { call, put } from "redux-saga/effects";
import { actions } from "../ducks/user";
import UsuarioService from "../../services/usuario.js";
import storage from "../../utils/storage";
import history from "../../utils/history";

const service = new UsuarioService();

export function* loginRequest({ payload }) {
  try {
    const { data } = yield call(service.login, payload);
    storage.setUser({
      token: data?.token,
      username: data?.user?.username,
    });
    //yield put(actions.responseLogin(data?.user));

    history.push(`/perfil/${data?.user?.username}`);
  } catch (err) {
    yield put(actions.setMessage(err));
  }
}

export function* registerRequest({ payload }) {
  try {
    yield call(service.register, payload);
  } catch (err) {
    yield put(actions.setMessage(err));
  }
}
