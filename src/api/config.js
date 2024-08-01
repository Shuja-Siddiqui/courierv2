const BASE_URL =
  process.env.REACT_APP_NODE_ENV === "local"
    ? "https://1933-38-10-172-16.ngrok-free.app"
    : "https://srv572320.hstgr.cloud:3100";

const config = {
  BASE_URL,
};

export default config;
