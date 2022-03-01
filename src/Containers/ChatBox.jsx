import { Grid} from '@mui/material'
import React from 'react'
import ChatUserInfo from '../Support/ChatUserInfo'
import MessageBox from '../Support/MessageBox'
import TypingPanel from '../Support/TypingPanel'

const ChatBox = ({username,id}) => {
    
    return (      
          <Grid container minHeight={"100vh"}   >  
                <Grid item xs={12} sx={{minWidth:"100%" ,m:0}} >
                    <ChatUserInfo name={username} pic={id} />
                </Grid>
                <Grid item xs={12} sx={{minWidth:"100%" ,m:0}} >
                    <MessageBox  />    
                </Grid>
                <Grid item  sx={{minWidth:"100%" ,p:0,m:0}}>
                    <TypingPanel />
                </Grid>
            </Grid>
            
       
    
    )



}

export default ChatBox;
