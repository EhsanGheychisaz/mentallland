import bg from "../../../assests/image/Arts-children/Rectangle 47.png"
import bg2 from "../../../assests/image/Arts-children/Vector.png"
import Box from "@mui/material/Box"
import css from "./style.module.css"
import { Typography } from "@mui/material"
const Sec1  = ()=>{
    return(
        <>
            <Box className={css.container}>
                <img src={bg} className={css.img}/>
                <img src={bg2} className={css.subbg}/>
                <Typography sx={{fontFamily:"Alice-Regular",fontSize:{lg:"60px",sm:"50px",xs:"25px"},fontWeight:"400",position:"absolute",top:{ xl:"40%",lg:"35%",xs:"30%"},left:"50%",transform:"translate(-50%,-50%)"}}>LET'S ENJOY</Typography>
                <Typography sx={{fontFamily:"Gilroy-Medium",lineHeight:{md:"40px",xs:"25px"},fontSize:{xs:"17px",sm:"20px"},position:"absolute",top:{xs:"60%",sm:"50%%",md:"55%"},left:"50%",transform:"translate(-50%,-50%)",textAlign:"center",width:{lg:"40%",xs:"80%",sm:"70%",md:"50%"}}}>Lorem ipsum dolor sit amet consectetur. Viverra pellentesque volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut vitae felis convallis. Egestas enim diam ac nisi.</Typography>
            </Box>
        </>
    )
}
export default Sec1;