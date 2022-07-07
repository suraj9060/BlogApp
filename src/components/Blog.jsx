import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/blog")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);
  console.log(blogs)
  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <BlogCard
            id={blog._id}
            isUser = {localStorage.getItem("userId")===blog.user._id}
            title={blog.title}
            image={blog.image}
            description={blog.description}
            userName={blog.user.name}
          />
        ))}
    </div>
  );
};

export default Blog;
