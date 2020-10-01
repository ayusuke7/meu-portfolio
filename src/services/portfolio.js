import endpoints from "../constants/endpoints";
import api from "./api";

export default class PortfolioService {
  findByUsername(username) {
    return api.get(`${endpoints.PORTFOLIO}/${username}`);
  }

  create(payload) {
    return api.post(endpoints.PORTFOLIO, payload);
  }

  update(payload) {
    return api.put(endpoints.PORTFOLIO, payload);
  }
}
