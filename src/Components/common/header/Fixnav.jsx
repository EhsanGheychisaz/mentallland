import TopNav1 from "./navbar/Appbar"
import Sidebar from "./sidebar/Sidebar"
import {Box} from "@mui/material"
const Fixnav = ()=>{
    return (
        <Box sx={{position:"fixed" , top:0 , left:0 , zIndex:"99999"}}>
            <TopNav1 />
            <Sidebar />
        </Box>
    )
}
export default Fixnav;