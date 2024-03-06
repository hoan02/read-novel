import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://read-novel-phi.vercel.app/api/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default newRequest;
