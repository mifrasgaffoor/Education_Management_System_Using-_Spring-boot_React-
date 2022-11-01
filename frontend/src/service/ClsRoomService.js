import axios from "axios";

const CLS_URL = "http://localhost:8080/api/v3/classroom";

class ClsService {
  getAllCls() {
    return axios.get(CLS_URL);
  }

  addCls(cls) {
    return axios.post(CLS_URL, cls);
  }

  getClsByid(clsid) {
    return axios.get(CLS_URL + "/" + clsid);
  }

  updateCls(cls) {
    return axios.put(CLS_URL, cls);
  }

  deleteCls(clsid) {
    return axios.delete(CLS_URL + "/" + clsid);
  }
}

export default new ClsService();
