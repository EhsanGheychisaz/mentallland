import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
// Note Create Rtl Cache

const MainLayout = ({children})=>{
    const currentTheme = useTheme();

    return(
       
            <ThemeProvider theme={currentTheme}>
                <Grid container sx={{height:"auto" , overflowX:"hidden"}}>
                    {children}
                </Grid>
            </ThemeProvider>
    
    )
}
export default MainLayout;