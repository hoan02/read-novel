import axios from "axios";

const newRequest = axios.create({
  baseURL: `${process.env.BASE_URL}api/` || "http://localhost:3000/api/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default newRequest;
