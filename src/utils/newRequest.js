import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://doctruyen.io.vn/api/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default newRequest;
