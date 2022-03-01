import React from 'react'
import { Paper ,Box ,Typography } from '@mui/material'

import CheckIcon from '@mui/icons-material/Check';

const MessageTextS = ({message,flag,time,readCheck}) => {
    return (
        <Paper sx={{m:1,maxWidth:"40%" ,background:"#27903b", p:2,pb:1 ,borderRadius:"18%",borderTopLeftRadius:"1%", borderEndEndRadius:"1%"}}>
           <Box>                
                <Box sx={{fontSize:"15px",ml:"10px"}}>
                    <Typography variant={"title"} >{message}</Typography>
                </Box>                
                    <Box sx={{textAlign:"start", fontSize:"9px",display:"flex" ,justifyContent:"space-between"}}>
                        <Typography variant={"title"} sx={{mt:2}}>{time}</Typography>
                        {flag && (readCheck?<CheckIcon fontSize="small" sx={{mt:1}} color="Secondary" />:<CheckIcon fontSize="small" sx={{mt:1}} color="Secondary" />)}
                </Box>
           </Box>
        </Paper>
    )
}

export default MessageTextS
