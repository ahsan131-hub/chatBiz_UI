import { createTheme } from "@mui/material";
import { main } from "./colors";

// import { google_button } from "./colors";

// export const [mode, setmode] = useState("light");

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: main.primary,
    },
    secondary: {
      main: main.google_button,
    },
  },
});
