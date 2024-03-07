import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://read-novel-phi.vercel.app/api/",
  // baseURL: "http://localhost:3000/api/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default newRequest;
