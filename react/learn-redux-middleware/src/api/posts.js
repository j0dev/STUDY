import axios from "axios";

// { id, title, body}

export const getPosts = async () => {
  const res = await axios.get("/posts");
  return res.data;
};

// const form = new FormData();
// form.append("page", 1);
// const res = await axios.post("https://hackrss.kr/api/today/", form);

export const getPostById = async (id) => {
  const res = await axios.get(`/posts/${id}`);
  return res.data;
};

// sleep(1000).then(() => console.log("hello world!"));
window.axios = axios;
