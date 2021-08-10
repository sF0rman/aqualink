import axios from "axios"
const headers = {
  "Access-Control-Allow-Origin": "*"
}

const baseUrl = process.env.REACT_APP_API_URL;

const get = async url => {
  return await axios.get(baseUrl + url, { headers });
}

const put = async (url, body) => {
  return await axios.put(baseUrl + url, { body, headers });
}

const post = async (url, body) => {
  return await axios.post(baseUrl + url, { body, headers });
}

export {
  get,
  put,
  post
}