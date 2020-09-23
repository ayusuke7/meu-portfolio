import api from "./api";

class PortfolioService {
  getAll() {
    return api.get("/portfolio");
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
