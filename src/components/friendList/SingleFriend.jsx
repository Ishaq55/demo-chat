import React, { useContext } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { ListStyles } from "./FriendList.styles";
import { Avatar } from "@mui/material";


const SingleFriend = ({ detail,openChat,senderId }) => {
  
  
  const { classes } = ListStyles();
  const {  id, firstName, lastName, profilePicture,userName} = detail;
  return (
    <Box className={classes.single} key={id} onClick={()=>openChat(id,senderId)}>
      <Box className={classes.single1}>
        <Avatar className={classes.avatar} alt="Remy Sharp" src={profilePicture}>
          B
        </Avatar>
        <Box>
          <Typography variant="h6">{firstName}</Typography>
          <Typography variant="h6">{userName}</Typography>
        </Box>
      </Box>
  
    </Box>
  );
};

export default SingleFriend;
