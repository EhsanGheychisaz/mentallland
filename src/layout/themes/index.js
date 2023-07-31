import { createTheme } from "@mui/material/styles";
import { grey , red} from "@mui/material/colors";

export const theme = createTheme({
    palette:{
        mode:"light",
        primary: {
            light: '#00888D',
            main: '#00888D',
            dark: '#002884',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
          grey:{
            light:grey[200],
            main:grey[500],
            dark:grey[900]
          },
          danger:{
            light:red[200],
            main:red[500],
            dark:red[900]
          }

    },
   
})
