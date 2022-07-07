import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import BlogCard from "./BlogCard";

const UserBlog = () => {
  const [blogs, setBlogs] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/user/${id}`) 
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs.blogs));
  }, []);
  console.log(blogs);
  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <BlogCard
            title={blog.title}
            image={blog.image}
            description={blog.description}
            userName={blog.user.name}
          />
        ))}
    </div>
  );
};

export default UserBlog;
