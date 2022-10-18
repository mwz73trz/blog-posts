import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postsAPI from "../api/postsAPI";
import Accordion from "react-bootstrap/Accordion";

const PostsPage = () => {
  const params = useParams();
  const [category, setCategory] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadCategory();
  }, [params.categoryId]);

  const loadCategory = async () => {
    let data = await postsAPI.getSingleCategory(params.categoryId);
    console.log("Cat Data:", data);
    setCategory(data);
  };

  useEffect(() => {
    loadPosts();
  }, [category]);

  const loadPosts = async () => {
    if (!category) {
      setPosts([]);
    }
    console.log("CATEGORY:", category);
    let newPosts = [];
    for (const id of category.posts) {
      newPosts.push(await postsAPI.getSinglePost(id));
    }
    setPosts(newPosts);
  };

  // const renderPosts = () => {
  //   return posts.map((post, index) => {
  //     return <p>{post.name}</p>;
  //   });
  // };

  return <div>Post Page</div>;
};

export default PostsPage;
