import axios from "axios";
import { Typography, Box, InputLabel, TextField, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
const lableStyle = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };


const BlogDetails = () => {
  const navigate = useNavigate()
  const [blog, setBlog] = useState();
  const id = useParams().id;
  //add block component
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchDetails = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    fetchDetails().then((data) => {
      setBlog(data.blog);
      setInputs({
        title: data.blog.title,
        description: data.blog.description,
        // imageURL: data.blog.image,
      });
    });
  }, [id]);
 
  const sendRequest = async () => {
    const res = await axios.put(`http://localhost:5000/api/blog/update/${id}`,{
      title: inputs.title,
      description:inputs.description
    }).catch(err => console.log(err))
    
    const data =await res.data
    return data
  }

  console.log(blog);

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then((data) => console.log(data)).then(()=>navigate("/myblogs"));
  };
  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            border={3}
            borderColor="radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
            borderRadius={10}
            boxShadow="10px 10px 20px #ccc"
            padding={3}
            margin={"auto"}
            marginTop={2}
            display="flex"
            flexDirection={"column"}
            width="80%"
          >
            <Typography
              fontWeight={"bold"}
              padding={3}
              color="gray"
              variant="h2"
              textAlign={"center"}
            >
              Post Your Blog
            </Typography>
            <InputLabel sx={lableStyle}>Title</InputLabel>
            <TextField
              name="title"
              onChange={handleChange}
              value={inputs.title}
              margin="normal"
              variant="outlined"
            />
            <InputLabel sx={lableStyle}>Description</InputLabel>
            <TextField
              name="description"
              onChange={handleChange}
              value={inputs.description}
              margin="normal"
              variant="outlined"
            />
            {/* <InputLabel sx={lableStyle}>Image URL</InputLabel>
            <TextField
              name="imageURL"
              onChange={handleChange}
              value={inputs.imageURL}
              margin="normal"
              variant="outlined"
            /> */}
            <Button
              variant="contained"
              sx={{ mt: 2, borderRadius: 4 }}
              color="warning"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BlogDetails;
