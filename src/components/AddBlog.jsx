import { Typography, Box, InputLabel, TextField } from "@mui/material";

import React from "react";
const lableStyle = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }
const AddBlog = () => {
  return (
    <div>
      <form>
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
          <TextField margin="normal" variant="outlined" />
          <InputLabel sx={lableStyle}>Description</InputLabel>
          <TextField margin="normal" variant="outlined" />
          <InputLabel sx={lableStyle}>Image URL</InputLabel>
          <TextField margin="normal" variant="outlined" />
        </Box>
      </form>
    </div>
  );
};

export default AddBlog;
