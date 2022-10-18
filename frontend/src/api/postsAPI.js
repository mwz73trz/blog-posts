import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const postsAPI = {};

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    console.log("DATA:", response.data);
    console.log("RESPONSE:", response);
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("-- tryCatchFetch ERROR:", e.response ? e.response.data : e);
    return null;
  }
};

postsAPI.getAllCategories = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}categories/`));
};

postsAPI.getSingleCategory = async (categoryId) => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}categories/${categoryId}/`)
  );
};

postsAPI.getSinglePost = async (postId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}posts/${postId}/`));
};

export default postsAPI;
