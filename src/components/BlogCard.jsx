import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Box,
  IconButton
} from "@mui/material";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {useNavigate} from "react-router-dom"
import axios from "axios";

const BlogCard = ({title , description , image , userName, isUser , id}) => {
  // console.log(title, isUser)
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/myblogs/${id}`)
  }
  
  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5000/api/blog//${id}`)
      .catch((err) => console.log(err));
    const data = await res.data
    return data
  }
  const handleDelete = () => {
    deleteRequest().then((data)=>console.log(data)).then(()=>navigate("/blogs"))
  }

  return (
    <div>
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          marginTop: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": { boxShadow: "10px 10px 20px #ccc" },
        }}
      >
        {isUser && <Box display="flex">
          <IconButton onClick={handleEdit} sx={{marginLeft:"auto"}}><ModeEditOutlineIcon color="warning"/></IconButton>
          <IconButton onClick={handleDelete}><DeleteForeverIcon color="warning" /></IconButton>
        </Box>}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {userName}
            </Avatar>
          }
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <hr />
          <br />
          <Typography variant="body2" color="text.secondary">
            <b> {userName} </b> {":-"}
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogCard;
