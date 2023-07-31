import { List , ListItem ,ListItemButton, ListItemIcon , Box,Avatar, ListItemText , Drawer, Typography} from "@mui/material";
import { useState } from "react";
import css from "./style.module.css"
import flag from "../../../../assests/image/En.png"
import {BiLogIn ,BiSearchAlt} from "react-icons/bi"
import {ButtonCustomised} from "../../utils/ButtonCustomized"
import {  Searchs2 , SearchIconWrapper , StyledInputBase} from "../../utils/CustomizedSearch"
import {useNavigate ,Link} from "react-router-dom"
import {SlHandbag} from "react-icons/sl"
import {FaFacebookF , FaInstagram , FaLinkedinIn , FaWhatsapp , FaTwitter} from "react-icons/fa"
const SidebarLinks = ()=>{
    const [open , setOpen ] = useState(true)
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
    return(
        <>
            <Box sx={{display:"flex" , alignItems:"center",justifyContent:"space-around" }}>
                <select name="cars" id="cars" className={css.select} >
                <option className={css.option} value="volvo"><img src={flag} style={{width:"10px",height:"10px"}}/> EN</option>
                <option className={css.option} value="saab"><Avatar src={flag} sx={{width:"15px",height:"15px"}}/> EN</option>
                <option className={css.option} value="opel"><Avatar src={flag} sx={{width:"15px",height:"15px"}}/> EN</option>
                <option className={css.option} value="audi"><Avatar src={flag} sx={{width:"15px",height:"15px"}}/> EN</option>
                </select>    
                <Searchs2>
                    <SearchIconWrapper>
                    <BiSearchAlt /> 
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Searchs2>
            </Box>
            <List sx={{mt:2}}>
                <ListItem disablePadding sx={{display:"block","&:hover":{
                            background:"rgba(0,0,0,0.1)"}}}>
                        <ListItemButton sx={{
                                minHeight:40,
                                pl:3
                            }}>
                                <ListItemText primary={<Typography variant="h5" sx={{fontFamily:"Gilroy-black"}}>MentalLands</Typography>}  sx={{opacity:open?1:0 }} />
                        </ListItemButton>
                </ListItem>
                {
                    listlink.map((item,index)=>(
                        <ListItem key={index} disablePadding sx={{display:"block" ,"&:hover":{
                            background:"rgba(0,0,0,0.1)"
                            
                        }}} onClick={()=>navigate(item.link)}> 
                          
                                <ListItemButton sx={{
                                    minHeight:40,
                                    pl:3
                                }}>
                                    <ListItemText primary={item.name}  sx={{opacity:open?1:0 }}   />
                                </ListItemButton>
                       
                        </ListItem>
                    ))
                }
                
            </List>
            <Box  sx={{ display:"flex",alignItems:"center",justifyContent:"space-around"}}>
              <ButtonCustomised sx={{background:"#02979D" , color:"white" , width:{lg:"132px",xs:"100px"} , height:{lg:"40px",xs:"30px"} , m:1}}><BiLogIn style={{marginRight:"5px"}}/> Login</ButtonCustomised>
              <ButtonCustomised sx={{background:"#02979D" , color:"white" , width:{lg:"132px",xs:"100px"} , height:{lg:"40px",xs:"30px"} , m:1}}><SlHandbag style={{marginRight:"5px"}}/>Cart</ButtonCustomised>
              
            </Box>
            <Box sx={{position:"absolute" , bottom:"20px",left:"50%",transform:"translate(-50%,-50%)"}}>
                       <ul className={css.ul2} style={{margin:"0px auto"}}>
                            <li className={css.li2}><FaWhatsapp /></li>
                            <li className={css.li2}><FaLinkedinIn /></li>
                            <li className={css.li2}><FaInstagram /></li>
                            <li className={css.li2}><FaFacebookF /></li>
                            <li className={css.li2}><FaTwitter /></li>
                        </ul>
            </Box>
        </>
    )
}
export default SidebarLinks;