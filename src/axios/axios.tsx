import axios from "axios";

const localBaseUrl = "http://192.168.0.102:7070";

export default axios.create({
  // baseURL: "http://drop-apis.firsta.tech",
  baseURL: "http://192.168.0.100:7070",
});


// baseURL: "http://drop-apis.firsta.tech",