import axios from "axios";

export const apiClient = axios.create({
  baseURL: "localhost:5000",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const authorisation = (accessToken: string) => ({
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
