import * as React from 'react';
import { useState } from 'react';
import { useInput } from '@mui/base';
import socket from '../logic/socketIO';
import {Grid,Box,TextField ,IconButton} from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const CustomInput = ({sendMessage}) => {
  const [message, setMessage] = useState("");
 return (
    <Grid container fullWidth sx={{mb:.2, borderTop:"1px solid gray" ,textAlign:"start"  }}>
      <Grid item xs={9} md={10} fullWidth sx={{ml:2,mt:1,mb:.2,mr:0  }} >
        <TextField  size='small'
          sx={{width:"100%",mb:"0"}}
          placeholder={"Type..."}
          value={message}
          onChange={(e)=>{setMessage(e.target.value)}}
       />
      </Grid>
      <Grid item  xs={3} md={1} sx={{mt:.3,p:0 ,ml:0 ,mr:0}} >
        <Box sx={{m:0,p:0,textAlign:"center"}}>
              <IconButton  aria-label="sendButton" color="primary" onClick={()=>{sendMessage(message)}}>
                  <ArrowForwardIcon  fontSize={"large"}/>
              </IconButton>
          </Box>   
      </Grid>
    </Grid>
    

  );
};
export default  CustomInput ;
// export default function TypingPanel() {
//   return <CustomInput aria-label="Demo input" placeholder="Type something..." />;
// }
