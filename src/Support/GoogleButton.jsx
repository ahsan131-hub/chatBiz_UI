import React from 'react'
import { Button } from '@mui/material'
import {main} from '../Theme/colors'
import GoogleIcon from '@mui/icons-material/Google';
const GoogleButton = ({label,width }) => {
    return (
        <Button  color="error"  variant="outlined" label="" sx={{width:width}}  > <GoogleIcon sx={{marginRight:"5px"}}></GoogleIcon> Login with Google</Button>
    )
}

export default GoogleButton
