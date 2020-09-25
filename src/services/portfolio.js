import api from "./api";

class PortfolioService {
  getAll(username) {
    return api.get(`https://api.github.com/users/${username}/repos`);
  }

  create(payload) {
    return api.post("/portfolio", payload);
  }

  update(payload) {
    return api.put("/portfolio", payload);
  }

  delete(id) {
    return api.delete("/portfolio/" + id);
  }
}

export default new PortfolioService();
