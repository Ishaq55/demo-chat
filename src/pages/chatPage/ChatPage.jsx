import React, { useEffect, useState } from "react";
import axios from "axios";
import { chatStyle } from "./ChatPage.styles";
import { Box, Grid } from "@mui/material";
import ChatWindow from "../../components/chatWindow/ChatWindow";
import Friends from "../../components/friendList/Friends";

const ChatPage = () => {
  
  const [displayChat, setDisplayChat] = useState([]);
  const [selectedChat, setSelectedChat] = useState(false);
  const openChat = (id,senderId) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://172.16.1.150:8484/v1/chat?senderId=14642a74-10d5-4051-aa33-549c4f0e483e&receiverId=d3fc9815-ab8b-4f60-85b2-fc2a452efb33",
      // url: `https://five5chitchat.onrender.com/v1/chat?senderId=${senderId}&receiverId=${id}`,
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtZXJhbGRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJWaXB1bEAxMjM0IiwiaWF0IjoxNjgzMDA5MTk0LCJleHAiOjE2ODMwOTU1OTR9.U4sSytpVjwb076JLhGVlePa9_wxyHKg9vcXtTfTcURU",
      },
    };

    axios
      .request(config)

      .then((response) => {
        // console.log(JSON.stringify(response.data.data));
        setDisplayChat(response.data.data);
        setSelectedChat(true);
      })

      .catch((error) => {
        console.log(error);
      });
  
  };

 


  const { classes } = chatStyle();
  return (
    <Box className={classes.container}>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={10} sm={5.75} md={4} lg={4} sx={{ backgroundColor: "" }}>
          <Friends
            className={classes.friendContainer}
            openChat={openChat}
            setSelectedChat={setSelectedChat}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6.25}
          md={8}
          lg={8}
          sx={{ display: { xs: "block", sm: "block" }, padding: "0.5rem" }}
          className={classes.chatContainer}
        >
          <ChatWindow
            displayChat={displayChat}
            selectedChat={selectedChat}
            setDisplayChat={setDisplayChat}
           

          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatPage;
