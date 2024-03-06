import axios from "axios";

const baseUrl = process.env.BASE_URL;

const newRequest = axios.create({
  baseURL: `${baseUrl}api/`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default newRequest;
