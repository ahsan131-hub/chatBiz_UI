import React, { useState } from 'react'
import { Box  ,Grid ,Typography} from '@mui/material'
import CustomTextField from '../Support/CustomTextField'
import CustomPassword from '../Support/CustomPassword'
import CustomButton from '../Support/CustomButton'
import GoogleButton from '../Support/GoogleButton'
import RegisterLink from '../Support/RegisterLink'
import { useDispatch } from "react-redux";
import axios from "axios";
import '../customCSS.css';
import {login_text} from '../Theme/string';
import socket from '../logic/socketIO';
import { useNavigate } from 'react-router-dom'

const Login_UI = () => {
    const [username, setusername] = useState("")
    const [pass, setpass] = useState("")
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const btnClick=()=>{
        // dispatch(login({username:username,password:pass}));
        axios.post('http://localhost:5000/auth/login/', 
            {email:username,password:pass.password})
        .then(response =>{
            const token=response.data.token;
            console.log(token);
            localStorage.setItem('token',`berear ${response.data.token}`);
            localStorage.setItem('user', JSON.stringify(response.data.user));
                
            //socket connection..
            var user =  JSON.parse(localStorage.getItem('user'));
            const usern =user.userName;
            socket.auth={ username }
            socket.connect();
            console.log("socket is connected")
    
            navigate("/dashboard");

          
            
         
      }).catch(e=>{
            console.log(e)
            alert("Incorrect credentials...")
        })
      
       // console.log("actions is dispatched")
    }
    const setUserValue=(val)=>{ 
        setusername(val);
    }
    const setPassValue=(val)=>{    
        setpass(val);
        console.log(pass);
    }



    return (
        <Grid container direction="column"  alignItems="center"   height={"100%"} justifyContent="center">
            <Grid item>   
            <Box className="box" component="form" justifyContent="center" minWidth={"90%"} height={"100%"} boxShadow={0} sx={{display:'flex' ,flexDirection:"column",borderLeft:"1px solid grey",paddingLeft:"50px" }}  autoComplete="off" noValidate>      
            <Typography component="h1" variant="h3" m={4}>
                {login_text}
            </Typography>
            <Grid item alignSelf="center" justifySelf="center">                
                    <CustomTextField  value={username} onClick={setUserValue}
                    variant="outlined" label="User Name" />
            </Grid>
            <Grid item alignSelf="center" justifySelf="center"> 
                <CustomPassword   onClick={setPassValue}/>
            </Grid>
            <Grid container direction="column" alignItems="center" justifyContent="center" > 
                <Grid item > 
                    <CustomButton btnClick={btnClick} variant="outlined" width="30ch" label="login"/>
                </Grid>    
                <Grid item  > 
                    <GoogleButton label="Sign In With Google"  width="30ch" />
                </Grid>
                <Grid item  > 
                 <RegisterLink />
                </Grid>
            </Grid>
            </Box>
            </Grid>
        </Grid>
    )
}

export default Login_UI
