import bg from "../../../assests/image/Arts-Adults/Group 1067.png"
import Box from "@mui/material/Box"
import css from "./style.module.css"
import { Typography } from "@mui/material"
const Sec1  = ()=>{
    return(
        <>
            <Box className={css.container}>
                <img src={bg} className={css.img}/>
                <Typography sx={{fontFamily:"Alice-Regular",color:"white",fontSize:{xs:"20px",sm:"30px",md:"40px",lg:"45px",xl:"60px"},fontWeight:"400",width:{xs:"80%",lg:"45%"},textAlign:"center",position:"absolute",top:{xs:"35%",md:"39%",lg:"30%"},left:"50%",transform:"translate(-50%,-50%)"}}>WELCOME TO THE COLORFUL WORLD OF ART</Typography>
                <Typography sx={{fontFamily:"Gilroy-Medium",color:"white",lineHeight:{xs:"10px",sm:"24px",lg:"40px",xl:"100%"},fontSize:{xs:"13px",sm:"20px",lg:"20px",xl:"30px"},position:"absolute",top:{xs:"60%",lg:"50%"},left:"50%",transform:"translate(-50%,-50%)",textAlign:"center",width:{xs:"80%",lg:"45%"}}}>Lorem ipsum dolor sit amet consectetur. Viverra pellentesque volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut vitae felis convallis. Egestas enim diam ac nisi orci id tellus lobortis. Lacus in etiam rhoncus.</Typography>
            </Box>
        </>
    )
}
export default Sec1;