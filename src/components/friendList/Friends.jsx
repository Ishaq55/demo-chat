import React from "react";
import { ListStyles } from "./FriendList.styles";
import SingleFriend from "./SingleFriend";
import SearchBar from "./SearchBar";
import  { useEffect, useState } from "react";
import axios from "axios";

const date = new Date();

const details = [
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "ansul",
    message: "hello i am dev how you doing",
    time: `${date.getHours()}`,
    id: 1,
    
  },
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "sakshi",
    message:
      "hello user how are hhhhh dheeeeeeeeeeeeeeeee hedddddddddddddddddd  hdhedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee you  ",
    time: `${date.getHours()}`,
    id: 2,
  },
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "piyush",
    message: "hello user",
    time: `${date.getHours()}`,
    id: 3,
  },
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "ansul",
    message: "hello user",
    time: `${date.getHours()}`,
    id: 4,
  },
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "ansul",
    message: "hello user",
    time: `${date.getHours()}`,
    id: 4,
  },
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "ansul",
    message: "hello user",
    time: `${date.getHours()}`,
    id: 4,
  },
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "ansul",
    message: "hello user",
    time: `${date.getHours()}`,
    id: 4,
  },
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "ansul",
    message: "hello user",
    time: `${date.getHours()}`,
    id: 4,
  },
  {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fhd&psig=AOvVaw3664PYYDpqdzRSYGrx_uD7&ust=1682072576535000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjn3-SeuP4CFQAAAAAdAAAAABAE",
    userName: "ansul",
    message: "hello user",
    time: `${date.getHours()}`,
    id: 4,
  },
  {
    image: "jndkjdcnm c ",
    userName: "ansul",
    message: "hello user",
    time: `${date.getMinutes()}`,
    id: 4,
  },
];


const Friends = ({openChat,setSelectedChat}) => {
  const [friends,setFriends]= useState([]);

  useEffect(() => {
    let config = {
      method: "get",

      maxBodyLength: Infinity,

      url: "https://five5chitchat.onrender.com/v1/relationship/all/fd503c87-e542-4f01-a7c4-564c21cc7cd6",

      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyeWFAY2hpdGNoYXQuaW8iLCJwYXNzd29yZCI6IkFyeWExMjNAQEBAIiwiaWF0IjoxNjgzMDA1NzEwLCJleHAiOjE2ODMwOTIxMTB9.dgZysiXhBcAbl-5X17XDnt07b-MCfM7LH-DycxR41O8",
      },
    };

    axios
      .request(config)

      .then((response) => {
        // console.log(JSON.stringify(response.data.data));
        setFriends(response.data.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

 

  // console.log(friends.followedUserId);
  const senderId = friends.followedUserId
 
  const { classes } = ListStyles();
  return (
    <div className={classes.friendGrid}>
      <SearchBar />
      <div className={classes.friendContainer}>
        {friends.followers ?.map((detail) => {
          return <SingleFriend detail={detail} openChat={openChat} senderId={senderId} />;
        })}
      </div>
    </div>
  );
};

export default Friends;
