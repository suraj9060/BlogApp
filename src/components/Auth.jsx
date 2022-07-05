import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  const [isSignup, setIsSignup] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //sending data to backend
  const sendRequest = async (type = "login") => {
    const res = await axios
      .post(`http://localhost:5000/api/user/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      sendRequest("signup").then((data)=>localStorage.setItem("userId", data.user._id))
        .then(() => dispatch(authActions.login()))
        .then(() => naviagte("/blogs"))
        .then((data) => console.log(data));
    } else {
      sendRequest()
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispatch(authActions.login()))
        .then(() => naviagte("/blogs"))
        .then((data) => console.log(data));
    }

    console.log(inputs);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display={"flex"}
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Sign Up" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              onChange={handleChange}
              name="name"
              placeholder="name"
              value={inputs.name}
              margin="normal"
            />
          )}
          <TextField
            onChange={handleChange}
            name="email"
            type={"email"}
            value={inputs.email}
            placeholder="email"
            margin="normal"
          />
          <TextField
            onChange={handleChange}
            name="password"
            type={"password"}
            value={inputs.password}
            placeholder="password"
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadisus: 3, marginTop: 3 }}
            color="warning"
          >
            Submit
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ borderRadisus: 3, marginTop: 3 }}
          >
            Change To {isSignup ? "Login" : "Sign Up"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
