import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import BlogCard from "./BlogCard";

const UserBlog = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/user/${id}`) 
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log(user);
  return (
    <div>
      { user && user.blogs &&
        user.blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            image={blog.image}
            description={blog.description}
            userName={user.name}
          />
        ))}
    </div>
  );
};

export default UserBlog;
