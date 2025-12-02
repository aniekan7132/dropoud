import axios from "axios";

export default axios.create({
  baseURL: "https://console.dropoud.net/",
  //baseURL: "https://drop-apis.firsta.tech",
  // baseURL: "http://192.168.101.158:7070",
});
