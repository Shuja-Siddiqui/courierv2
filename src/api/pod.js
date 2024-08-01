import axios from "axios";
import config from "./config";

const BASE_URL = config.BASE_URL;

export const getPOD = (values) => {
  return axios
    .get(`${BASE_URL}/url`, values, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res?.data) return res?.data;
    })
    .catch((err) => console.log(err));
};
