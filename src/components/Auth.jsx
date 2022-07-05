import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Auth = () => {
  const [isSignup , setIsSignup] = useState(false)
  return (
    <div>
      <form>
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
          {isSignup && <TextField placeholder="name" margin="normal" />}
          <TextField type={"email"} placeholder="email" margin="normal" />
          <TextField type={"password"} placeholder="password" margin="normal" />
          <Button
            variant="contained"
            sx={{ borderRadisus: 3, marginTop: 3 }}
            color="warning"
          >
            Submit
          </Button>
          <Button onClick={()=>setIsSignup(!isSignup)} sx={{ borderRadisus: 3, marginTop: 3 }}>
            Change To {isSignup ? "Login" : "Sign Up"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
