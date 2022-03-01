import React, { useEffect } from "react";
import { Grid,  Paper} from "@mui/material";
import Login_UI from "../Containers/Login_UI"
import WelcomeNote from "../Support/customTypography/WelcomeNote";

import { useSelector } from "react-redux";
// main login component

const Login = () => {
  const {user}= useSelector(state => state.loginUser);
  useEffect(() => {
    console.log(user);
  }, [user])



  return (
    <Paper style={{ height: "100vh",border:"none" ,borderRadius:"0%" }}>
      <Grid container minHeight="100vh">
        <Grid item xs={1}></Grid>
        <Grid
          item
          xs={0}
          sm={10}
          md={6}
          justifyContent="center"
          alignSelf="center"
          textAlign="center"
          display={{ xs: "none", sm: "block", md: "block", lg: "block" }}
        >
          <WelcomeNote />
        </Grid>
        <Grid
          item
          height={"100vh"}
          justifyContent="center"
          alignSelf="center"
          textAlign="center"
          xs={10}
          sm={10}
          md={5}
          // justifyContent="center"
          // alignSelf="center"
          // textAlign="center"
        >     
          <Login_UI />
        </Grid>
        {/* <Grid item xs={1}></Grid> */}
      </Grid>
    </Paper>
  );
};

export default Login;
