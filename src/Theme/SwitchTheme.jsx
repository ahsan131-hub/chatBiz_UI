import { Button } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton,Box } from '@mui/material';


const SwitchTheme = ({toggleMode,mode}) => {
    return (
        <Box sx={{position:"absolute" ,left:"94%"  }}>
            <Button
             sx={{border:"none", ml: 1, 
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"
              }}} 
              disableElevation 
              disableRipple
               onClick={()=>toggleMode()} 
               >
              
            <IconButton   color="inherit">
            {!mode  ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
            </Button>
        </Box>


    )
}

export default SwitchTheme
