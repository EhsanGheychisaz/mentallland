import {Box , Fab} from "@mui/material"
import {MenuRounded} from "@mui/icons-material"
import { useContext } from "react"
import MainContext from "../../../../context/index"
import {useTheme}  from "@mui/material/styles"

const DrawerActionButton = ()=>{
    const {setDrawerOpen} = useContext(MainContext)
    const fTheme = useTheme()
    return (
        <>
            <Box>
                <Fab  
                    aria-label="Sidebar"
                    size="small"
                    onClick={()=> setDrawerOpen(true)}
                    sx={{ backgroundColor:fTheme.palette.primary.light ,"&:focus":{border:"none",outline:"none"}}}
                >
                    <MenuRounded color={fTheme.palette.grey.light} />
                </Fab>
            </Box>
        </>
    )
}
export default DrawerActionButton;