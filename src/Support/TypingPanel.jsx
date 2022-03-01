

import * as React from 'react';
import { useInput } from '@mui/base';
import { styled } from '@mui/system';
import {Grid,Box ,IconButton} from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const StyledInputElement = styled('input')`
 
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  border: 1px solid #e5e8ec;
  border-radius: 25px;
  padding: 6px 10px;
 
  transition: width 300ms ease;
  width: 98%;
  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    width: 100%;
    transition: width 200ms ease-out;
  }
`;


// const TynpingPanel = () => {
//     const [value,setValue] = useState("");
    
//     const getValue=()=>{
        
//     }
//     return (
//         <Container >
//              <TextField  value={value} onChange={(e)=>setValue(e.target.value)}
//                sx={{margin:"5px",width:"50ch"}}
//                 label="Message"  borderRadius={10} variant="contained"/>
//         </Container>
//     )
// }

// export default TypingPanel



const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { getRootProps, getInputProps } = useInput(props, ref);

  return (
    

    

    <Grid container fullWidth sx={{mb:.2, borderTop:"1px solid gray" ,textAlign:"start"  }}>
      <Grid item xs={9} md={10} fullWidth sx={{ml:2,mt:1,mb:.2,mr:0  }} >
      <div {...getRootProps()}>
            <StyledInputElement {...props} {...getInputProps()} />
        </div>
      </Grid>
      <Grid item  xs={3} md={1} sx={{mt:.3,p:0 ,ml:2 ,mr:0}} >
        <Box sx={{m:0,p:0,textAlign:"center"}}>
              <IconButton  aria-label="sendButton" color="primary">
                  <ArrowForwardIcon   fontSize={"large"}/>
              </IconButton>
          </Box>   
      </Grid>
    </Grid>
    

  );
});

export default function TypingPanel() {
  return <CustomInput aria-label="Demo input" placeholder="Type something..." />;
}
