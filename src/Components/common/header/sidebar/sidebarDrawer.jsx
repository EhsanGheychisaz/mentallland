import { useContext  } from "react";
import MainContext from "../../../../context"
import {Drawer} from "@mui/material"
import SidebarContent from "./sidebarContent";
const SidebarDrawer = ()=>{
    const {drawerOpen , setDrawerOpen} = useContext(MainContext)
    return(
        <Drawer
            open={drawerOpen}
            onClose={()=>setDrawerOpen(false)}
            variant="temporary"
            sx={{
                "& .MuiDrawer-paper":{
                    width:300
                },
                display:{
                    xs:"block",
                    sm:"block",
                    md:"none",
                    lg:"none",
                    xl:"none"
                },zIndex:"99999"
            }}
        >
            <SidebarContent />
        </Drawer>   
    )
}
export default SidebarDrawer;