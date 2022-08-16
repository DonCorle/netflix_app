import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "96eef0aca22babc2ba763b5a9535e9ef",
    language: "ko-KR",
  },
});

export default instance;
