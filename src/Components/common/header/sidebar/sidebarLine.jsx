import { List , ListItem ,ListItemButton, ListItemIcon , Box, ListItemText , Drawer, Typography, Avatar} from "@mui/material";
import { useState ,useEffect} from "react";
import Mentallands from "../../../../assests/image/MentalLand.png"
import {ButtonCustomised} from "../../utils/ButtonCustomized"
import { Searchs , Searchs2 , SearchIconWrapper , StyledInputBase} from "../../utils/CustomizedSearch"
import {useNavigate} from "react-router-dom"
const SidebarLine = ()=>{
    const [open , setOpen ] = useState(true)
    const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};
const navigate = useNavigate()
const listlink = [
    {
        name:"Home",
        link:"/",
    },
    {
        name:"Our Services",
        link:"page2",
    },
    {
        name:"About",
        link:"aboutus",
    },
    {
        name:"Contact us",
        link:"Contactus",
    }
]
useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
    return(
        <Box sx={{display:{
            xs:"none",
            sm:"none",
            md:"block",
            lg:"block",
            xl:"block"
        }, width:"100vw" , background:"white" , position:scrollPosition>=60?"fixed":"",boxShadow:scrollPosition>=60?" rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px":"" , top:scrollPosition>=30?"0px":"",left:scrollPosition>=30?"0px":"" }}>
            <Box>
                
            </Box>
           <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between" ,paddingRight:"40px" , paddingLeft:"60px" }}>
           <Avatar src={Mentallands} sx={{width:"140px" , height:"20px",cursor:"pointer"}} variant="square"/>
           <List sx={{width:"550px" ,display:"flex",alignItems:"center",justifyContent:"space-between"}} >
                {
                    listlink.map((text)=>(
                        <ListItem key={text.name} disablePadding sx={{ "&:hover":{
                            color:"#0d99ff"
                        }}} onClick={()=>navigate(text.link)}> 
                            <ListItemButton>
                                <ListItemText primary={<Typography sx={{fontFamily:"Gilroy-Regular","&:hover":{fontFamily:"Gilroy-Bold"}}}>{text.name}</Typography>}  sx={{padding:0 ,textAlign:"center",minWidth:"10px"}} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
                
           </Box>
        </Box>
    )
}
export default SidebarLine;