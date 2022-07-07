import React from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom"
import Auth from "./components/Auth"
import Blog from "./components/Blog"
import UserBlog from "./components/UserBlog";
import BlogDetails from "./components/BlogDetails";
import AddBlog from "./components/AddBlog";
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  console.log(isLoggedIn)
  return (
    <React.Fragment className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            <>
              {" "}
              <Route path="/blogs" element={<Blog />} />
              <Route path="/myblogs" element={<UserBlog />} />
              <Route path="/myblogs/:id" element={<BlogDetails />} />
              <Route path="/blogs/add" element={<AddBlog />} />
            </>
          )}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
