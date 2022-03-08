import { Typography,ButtonBase} from '@mui/material'
import {Box} from "@mui/material"
import React from 'react'
import {Avatar,Grid} from "@mui/material"
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    myBox: {
        borderBottom:"1px solid grey",
        "&:hover, &:focus": {
          backgroundColor:"",
          cursor:"pointer",
        } /* Chrome */,
    }
 });
const UserBox = ({chat_user,name,message,openChat}) => {
    const classes=useStyles();
    return (
        <Box sx={{ml:0,mr:0,p:0,minWidth:"100%"}}>
                <ButtonBase sx={{p:.5,m:0,textAlign:"start" ,minWidth:"100%"}} onClick={()=>openChat(chat_user)}>
                    <Grid container sx={{m:0,p:0 }}>
                        <Grid item sm={2} xs={3}>
                            <Avatar color="primary">A</Avatar>
                        </Grid>
                        <Grid item sm={9} md={10} xs={9}  sx={{m:0,p:0 }} >
                            <Box className={classes.myBox} sx={{pb:1}} >                            
                                <Typography variant={"h6"} sx={{ml:.2,mt:.2 ,fontSize:"18px"}}>
                                    {name }
                                </Typography>         
                                <Typography noWrap={false} variant={"subtitle2"} sx={{ml:.5,mt:.2, fontSize:"11px",overflow:"hidden"}}>
                                    {message}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </ButtonBase>
        </Box>
    )
}

export default UserBox
