import axios from "axios";

const ApiConfig = axios.create({
  baseURL: "http://localhost:3002/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
export const setAuthToken = (token: string | null) => {
  if (token) {
    ApiConfig.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete ApiConfig.defaults.headers.common["Authorization"];
  }
};
export const setMultiPart = () => {
  delete ApiConfig.defaults.headers.common["Content-Type"];
  ApiConfig.defaults.headers.common["Content-Type"] = "multipart/form-data";
};

export default ApiConfig;
