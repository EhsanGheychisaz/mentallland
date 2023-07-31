import { Box } from "@mui/material";
import SidebarLinks from "./SidebarLinks";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import MainContext from '../../../../context'
const SidebarContent = ()=>{
   const {mode} = useContext(MainContext)
   const  fTheme = useTheme()
   const fPalette = fTheme.palette
    return(
        <Box sx={{
            justifyContent:"left",
            height:"100vh",
            overflowX:"hidden",
            overflowY:"auto",
            pt:1,
            backgroundColor:mode==="dark"? fPalette.grey.dark:fPalette.grey.light  
        }}>
            <SidebarLinks />
            
        </Box>
    )
}
export default SidebarContent;