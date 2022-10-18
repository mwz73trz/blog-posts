import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import postsAPI from "../api/postsAPI";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const data = await postsAPI.getAllCategories();
    setCategories(data ? data : []);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const renderCategories = () => {
    return (
      <DropdownButton id="dropdown-basic-button" title="Categories">
        {categories.map((category, index) => {
          return (
            <Dropdown.Item
              key={index}
              as={Link}
              to={`categories/${category.id}/posts/`}
            >
              {category.id}
              {category.title}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    );
  };

  return <div className="categories-container">{renderCategories()}</div>;
};

export default HomePage;
