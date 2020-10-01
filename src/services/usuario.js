import endpoints from "../constants/endpoints";
import api from "./api";

export default class UsuarioService {
  register(payload) {
    return api.post(endpoints.REGISTER, payload);
  }

  login(payload) {
    return api.post(endpoints.LOGIN, payload);
  }
}
