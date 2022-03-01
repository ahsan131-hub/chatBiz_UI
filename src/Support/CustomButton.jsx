import React from 'react'
import { Button } from '@mui/material'


const CustomButton = ({label,variant,width="12ch", margin="1ch",hieght="5ch",btnClick }) => {

  
    return (
        <Button onClick={()=>btnClick()} variant={variant} sx={{width:width,height:hieght, margin:margin}}> {label}</Button>
    )
}

export default CustomButton
