import axios from "axios";

const apiKey = "dc813b8f9f8a409e9deff9b962576948";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

export default apiClient;
