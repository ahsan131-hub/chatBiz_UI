import React from 'react'
import { Paper ,Box ,Typography } from '@mui/material'

import CheckIcon from '@mui/icons-material/Check';

const MessageTextR = ({message,flag,time,readCheck}) => {
    return (
        <Paper sx={{m:1,maxWidth:"40%" ,backgroundColor:"#27903b", p:2,pb:1 ,borderRadius:"18%",borderTopRightRadius:"1%", borderEndStartRadius:"1%"}}>
           <Box>                
                <Box sx={{fontSize:"15px",ml:"10px"}}>
                    <Typography variant={"title"} >{message}</Typography>
                </Box>                
                    <Box sx={{textAlign:"end", fontSize:"9px",display:"flex" ,justifyContent:"end"}}> 
                        {flag ? (readCheck?<CheckIcon fontSize="small" sx={{mt:1}} color="Secondary" />:<CheckIcon fontSize="small" sx={{mt:1}} color="Secondary" />):( <Typography variant={"title"} sx={{mt:2}}>{time}</Typography>)}
                </Box>
           </Box>
        </Paper>
    )
}

export default MessageTextR
