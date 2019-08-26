import axios from "axios";

const baseUrl = "http://localhost:8001/api/";

export default function get(resource) {
  return axios.get(baseUrl + resource);
}

export function post(resource, data) {
  return axios.post(baseUrl + resource, data);
}

export function put(resource, data) {
  return axios.put(baseUrl + resource, data);
}

export function _delete(resource) {
  return axios.delete(baseUrl + resource);
}
