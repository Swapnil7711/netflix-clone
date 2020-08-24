import axios from "axios";

// create axios instance to get base url

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
