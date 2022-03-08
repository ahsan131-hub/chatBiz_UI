import { Grid} from '@mui/material'
import React, { useState } from 'react'
import ChatUserInfo from '../Support/ChatUserInfo'
// import MessageBox from '../Support/MessageBox'
import TypingPanel from '../Support/TypingPanel'
import socket from '../logic/socketIO'
import { Box,List} from '@mui/material'
import MessageTextR from '../Support/MessageTextR'
import MessageTextS from '../Support/MessageTextS'
import { makeStyles } from '@mui/styles';
import { useEffect } from 'react'


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
const ChatBox = ({to_user,username,id}) => {
    
    
    const classes=useStyles();
    const [messages, setmessages] = useState([<Grid
        item      
        container
        direction="column"
        alignItems="flex-start"
        justify="flex-start" //in MUI v5 this prop is renamed justifyC
    >
        <MessageTextR message={'You are connected with '+socket.auth.username } flag={1} time={new Date(Date.now()).getHours()+new Date(Date.now()).getMinutes() }readCheck={0}/>    
    </Grid>,])
    
    socket.on("recieve message", () => {
        console.log("hello recieve message")
        // console.log(content);
        // console.log(from);
    });
    
 
    
    
    const onSendMessage=async(message)=>  {
        if(message!=="" && to_user!=null){
          //send
          var content={
            userId:socket.id,
            message,
            time:(new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes())
          }
        //  alert(message)
          await socket.emit("private message", {
            content,
            to:to_user.userID
          });
          addMessageToList(content)
        }
    }

    const addMessageToList=(content)=>{
        if(content.userId===socket.id){
            const msgDiv= <Grid
                            item
                            container
                            direction="column"
                            alignItems="flex-end"
                            justify="flex-start" //in MUI v5 this prop is renamed justifyContent
                        >
                            <MessageTextS message={content.message} flag={1} time={content.time} readCheck={0}/>    
                        </Grid>
            setmessages([...messages,msgDiv])
        }   

    }
   
    return (      
        <Grid container minHeight={"100vh"}   >  
            <Grid item xs={12} sx={{minWidth:"100%" ,m:0}} >
                    <ChatUserInfo name={username} pic={id} />
            </Grid>

            <Grid item xs={12} sx={{minWidth:"100%" ,m:0}} >
                <Box maxHeight={"80vh"} overflow={"auto"} className={classes.container}>
                        {/* <Paper spacing={2} classes={classes.container}  sx={{ borderRadius:"0px", width:'100%',overflow: 'auto'}}>   */}
                    <List>           
                        <Grid container direction="column" >      
                            {/* <Grid
                                item      
                                container
                                direction="column"
                                alignItems="flex-start"
                                justify="flex-start" //in MUI v5 this prop is renamed justifyContent
                                >
                                    <MessageTextR message={"Hello this muhammad ahsan ansari si going to "} flag={0} time={"1:04 PM"} readCheck={0}/>
                            </Grid>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    alignItems="flex-end"
                                    justify="flex-start" //in MUI v5 this prop is renamed justifyContent
                                >
                                    <MessageTextS message={"Hello this muhammad ahsan ansari si going to "} flag={1} time={"1:04 PM"} readCheck={0}/>    
                                </Grid> */}
                                {messages.map((msgDiv=>{
                                    return msgDiv
                                }))}
                            </Grid>
                    </List>
                        {/* </Paper> */}
                </Box>
      
            </Grid>
                <Grid item  sx={{minWidth:"100%" ,p:0,m:0}}>
                    <TypingPanel  sendMessage={onSendMessage}/>
                </Grid>
        </Grid>
    )



}

export default ChatBox;
