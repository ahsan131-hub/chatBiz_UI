import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import socket from '../logic/socketIO';
import { useEffect } from 'react';
import { List } from '@mui/material';
import ChatBox from '../Containers/ChatBox';
// import MessageTextR from '../Support/MessageTextR';
import UserBox from '../Support/UserBox';

import { makeStyles } from '@mui/styles';
//simple styling 
const useStyles = makeStyles({
    root: {
       width: '100%',
    },
    container: {
        borderRight:"1px solid grey",
        scrollbarWidth: "none" /* Firefox */ ,
        "&::-webkit-scrollbar": {
          display: "none"
        } /* Chrome */,
    }
 });


const Main = () => {
    const classes = useStyles();
    const [myself,setMyself] = useState();
    const [name, setName] = useState("")
    const [to_user, setTo_user] = useState();
    const [id, setid] = useState(0);
    const [usrL, setusrL] = useState([]);
    const openChat=(user)=>{
        setTo_user(user);
        setName(user.username);
        setid(user._id);
        //join room 
        socket.on("joinRoom",{})

    }

    socket.on("users",  (users) => { 
        if(users.length !== 0)
            setusrL(users);
               
        }
   )  
    socket.on("user connected",(user)=>{            
        setusrL([...usrL,user]);
    })

    return(
    <Grid container >
        <Grid item  xs={0} sm={0} md={3}>            
            <Paper spacing={2} className={classes.container} sx={{ borderRadius:"0px", width:'100%',maxHeight: '100vh',overflow: 'auto'}}>  
            <Typography variant={"h4"} component={"div"} m={"5px"} >{JSON.parse(localStorage.user).userName.toUpperCase()}</Typography>
                  {usrL.map((user) => {
                     
                     if(user.userID !== socket.id)
                        return (
                            <List>
                                <UserBox message={"*********"} chat_user={user}  name={user.username} openChat={openChat}/>
                            </List>         
                        )
                  })}
                </Paper>
            </Grid>   
            <Grid item xs={9} sm={9} md={9}>
                {/* to user is the user to which we will send the message */}
                <ChatBox id={id} username={name} me={""} to_user={to_user} />
            </Grid>
        </Grid>
            
    
  


    )
}

export default Main
