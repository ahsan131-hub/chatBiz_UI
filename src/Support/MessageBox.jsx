import React from 'react'

import { Box,List,Grid} from '@mui/material'
import  MessageTextR from './MessageTextR'
import  MessageTextS from './MessageTextS'
import { makeStyles } from '@mui/styles';

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
const MessageBox = () => {
    const classes =useStyles();
    return (
        <Box maxHeight={"80vh"} overflow={"auto"} className={classes.container}>
         {/* <Paper spacing={2} classes={classes.container}  sx={{ borderRadius:"0px", width:'100%',overflow: 'auto'}}>   */}
            <List>           
                    <Grid container direction="column" >
                        <Grid
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
                        </Grid>
                        <Grid
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
                        </Grid>
                        <Grid
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
                        </Grid>
                        <Grid
                            item
                            container
                            direction="column"
                            alignItems="flex-end"
                            justify="flex-start" //in MUI v5 this prop is renamed justifyContent
                        >
                            <MessageTextS message={"Hello this muhammad ahsan ansari si going to "} flag={1} time={"1:04 PM"} readCheck={0}/>    
                        </Grid>
                        <Grid
                            item
                            container
                            direction="column"
                            alignItems="flex-end"
                            justify="flex-start" //in MUI v5 this prop is renamed justifyContent
                        >
                            <MessageTextS message={"Hello this muhammad ahsan ansari si going to "} flag={1} time={"1:04 PM"} readCheck={0}/>    
                        </Grid>
                        <Grid
                            item
                            container
                            direction="column"
                            alignItems="flex-end"
                            justify="flex-start" //in MUI v5 this prop is renamed justifyContent
                        >
                            <MessageTextS message={"Hello this muhammad ahsan ansari si going to "} flag={1} time={"1:04 PM"} readCheck={0}/>    
                        </Grid>
                </Grid>
                            
                    

            </List>
            {/* </Paper> */}
        </Box>
                 
    )
}

export default MessageBox
