import { TextField } from '@mui/material'
import React from 'react'

const CustomTextField = ({label="",variant="outlined" ,value,onClick}) => {
    return (
       <TextField  value={value} onChange={(e)=>onClick(e.target.value)}
        sx={{margin:"5px",width:"50ch"}}
        label={label} variant={variant}
       />
    );
}

export default CustomTextField
