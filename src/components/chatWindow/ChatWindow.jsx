import React from "react";
import { IconButton, Avatar, Paper, Box, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { ChatStyles } from "./chatWindow.styles";
import { io } from 'socket.io-client';

const ChatWindow = ({selectedChat,displayChat,setDisplayChat}) => {
  // console.log(displayChat[0].senderId)
  // const senderId =displayChat[0].senderId;
  // const reciverId = displayChat[0].receiverId;
  // console.log(displayChat[0].receiverId)

  
  
  const { classes } = ChatStyles();
  const [currentMessage, setCurrentMessage] = useState('');
  let isAdmin = "14642a74-10d5-4051-aa33-549c4f0e483e";

   const socket = io("http://172.16.1.150:8484");
   socket.emit("newUser",{id:"14642a74-10d5-4051-aa33-549c4f0e483e",name:"ishaq"})



  const sendMessage = () => {
    // console.log(currentMessage);
    const today = new Date();
    setDisplayChat([...displayChat,{senderId:"14642a74-10d5-4051-aa33-549c4f0e483e",receiverId:"d3fc9815-ab8b-4f60-85b2-fc2a452efb33",body:currentMessage,createdAt:today.getFullYear()+':'+(today.getMonth()+1)+':'+today.getDate() + ':'+today.getHours() + ':'+today.getMinutes()}])
    // setDisplayChat([...displayChat,{senderId:senderId,receiverId:reciverId,body:currentMessage}])
    
    
    
    socket.emit("message",{senderId:"14642a74-10d5-4051-aa33-549c4f0e483e",receiverId:"d3fc9815-ab8b-4f60-85b2-fc2a452efb33",body:currentMessage});

    // socket.emit("message",{senderId:senderId,receiverId:reciverId,body:currentMessage});
    setCurrentMessage([])
    

  };
  socket.on("receive",(chat)=>{
    console.log(chat);
    setDisplayChat([...displayChat,chat]);
  })
  return (
    <Box className="containers">
      <Paper elevation={3}  className={selectedChat ? classes.ChatWindow:classes.ChatwindowNot}>
        <Box  className={classes.chatHeader}>
          <Box className={classes.userName}>
            <Avatar
              className={classes.avatar}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              B
            </Avatar>
            <Typography variant="h5">user</Typography>
          </Box>
        </Box>
        <Box className={classes.chatBody}>
          <Box className={classes.messageContainer}>
            {displayChat.map((msg) => {
              return (
                <Box
                  className={
                    isAdmin=== msg.senderId ? classes.messageSender:classes.messageReceiver
                  }
                  key={msg.id}
                >
                  <Box className={classes.messageContent}>
                    <Typography className={classes.msg}>{msg.body}</Typography>
                  
                    <Typography className={classes.time}>{msg.createdAt.split(":")[3] + ":"+msg.createdAt.split(":")[4]}</Typography>
                   
                    
                  </Box>
                </Box>
              );
            })}
          </Box>
          
        </Box>

        <div className={classes.chatFooter}>
          <input
            className={classes.input}
            type="text"
            placeholder="Enter The Message"
            value={currentMessage}
            onChange={(e) => {
              setCurrentMessage(e.target.value);
            }}
            onKeyPress={(e) => {
              e.key === "Enter" && sendMessage();
            }}
          />

          <IconButton className={classes.send} onClick={sendMessage}>
            <SendIcon color="#fff"></SendIcon>
          </IconButton>
        </div>
      </Paper>
    </Box>
  );
};

export default ChatWindow;
