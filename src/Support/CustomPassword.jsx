import React from 'react'
// import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import {TextField} from '@mui/material';

import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const CustomPassword = ({onClick}) => {
    const [values, setValues] = React.useState({password: '',});

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    
      const handleChange = (prop) => (event) => {
        onClick(values);
        // console.log(values)
        setValues({ ...values, [prop]: event.target.value });
        //send password to parent component
        

        
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
    return (<FormControl 
                sx={{margin:"5px", width: '50ch' }} 
                variant="outlined">
                {/* <InputLabel htmlFor="filled-adornment-password">Password</InputLabel> */}
                <TextField
                    id="filled-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    label="Password"
                    onChange={handleChange('password')}
                    InputProps={{
                        endAdornment:(
                            <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>)
                    
                    }}
                />
  </FormControl>
    )
};
export default CustomPassword;
