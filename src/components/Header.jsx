import React from "react";
import {AppBar,Box,Button,Toolbar ,Typography} from "@mui/material";


const Header = () => {
  return (
    <AppBar
      sx={{
        background:
          "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h6">Blog</Typography>
        <Box display={"flex"} marginLeft={"auto"}>
          <Button
            variant="contained"
            color="warning"
            sx={{ margin: 1, borderRadius: 10 }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="warning"
            sx={{ margin: 1, borderRadius: 10 }}
          >
            Singup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
