import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const authorisation = (accessToken: string) => ({
  headers: {
    Authorization: `${accessToken}`,
  },
});
