
import { Avatar, Container } from '@mui/material'
import { Typography ,Grid} from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';

import MoreVertIcon from '@mui/icons-material/MoreVert';

const ChatUserInfo = ({name,pic}) => {
    return (
     <Container  sx={{flexGrow:1 ,minWidth:"100%",borderBottom:"1px solid grey"}} >
        <Grid container  sx={{p:.5, flexGrow:1 ,textAlign:"start"}}>
                <Grid xs={1} sx={{m:.2 ,p:.5 }}>
                <Avatar>{pic}</Avatar>
                </Grid>
                <Grid xs ={6} sx={{mt:1 ,p:.5 }}>
                    
                    <Typography variant="h6">{name} </Typography>
                </Grid>
                <Grid item xs={4} >
                    <IconButton aria-label="options" sx={{mt:.8,ml:"100%"}}  color="primary">
                        <MoreVertIcon color="primary"/>
                    </IconButton>
                </Grid>
            </Grid>
                
     </Container>
    )
}

export default ChatUserInfo
