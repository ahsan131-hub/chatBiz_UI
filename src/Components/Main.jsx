import React, { useState } from 'react';
import { Grid, Paper } from '@mui/material';
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
    //states
    const [userName, setuserName] = useState(false);
    const [name, setName] = useState("")
    const [id, setid] = useState(0);
    const [usrL, setusrL] = useState([]);
    const openChat=(myname,myid)=>{
        setName(myname);
        setid(myid);
  
    }
    useEffect(() => {
    //   first
    socket.on("users", async (users) => { 
                setusrL(users);
                console.log(users);
        }
   )  
        socket.on("user connected",async (user)=>{
                
                
                setusrL([...usrL,user]);
                console.log("on user connection ");
                console.log(usrL);
                console.log("a user connection" + user.username);
        })
    }, [socket])
    

    return(
    <Grid container >
        <Grid item  xs={0} sm={0} md={3}>            
            <Paper spacing={2} className={classes.container} sx={{ borderRadius:"0px", width:'100%',maxHeight: '100vh',overflow: 'auto'}}>  
                  {usrL.map((user)=>{
                      return (
                        <List>
                            <UserBox message={"Hello this muhammad ahsan  "} name={user.username} openChat={openChat}/>
                        </List>         
                      )
                  })}

                </Paper>
            </Grid>   
            <Grid item xs={9} sm={9} md={9}>
                <ChatBox id={id} username={name} />
            </Grid>
        </Grid>
            
    
  


    )
}

export default Main
