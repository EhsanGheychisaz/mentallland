import Slider from "./Slider";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import {FiInstagram } from "react-icons/fi"
import {AiOutlineLinkedin} from "react-icons/ai"
import {FaWhatsapp} from "react-icons/fa"
const Sec3 = () => {
    return ( 
        <>
            <Box sx={{position:"relative",mb:20}}>
                <Box className="aboutus" sx={{width:{xs:"90%",sm:"60%",lg:"90%"},maxWidth:"1800px",margin:"0px auto",py:4,overflowX:"hidden",mt:{md:10,xs:0}}}>
                  <Slider />
                </Box>
                <Typography sx={{fontSize:"20px",fontFamily:"Gilroy-Regular",lineHieght:"38px",width:"90%",margin:"0px auto",textAlign:"center"}}>
                      Lorem ipsum dolor sit amet consectetur. Nunc pharetra massa velit consectetur lectus erat. Tincidunt dis egestas aliquet adipiscing donec. Sed cras vulputate amet scelerisque. Varius etiam enim velit arcu arcu eget. Nunc a quis enim nibh posuere cras aenean purus. Nulla sagittis semper cum rhoncus varius quis vitae venenatis nibh.
                </Typography>
                <Box sx={{display:"flex",alignItems:"center" , justifyContent:"space-between",width:{xs:"50%",sm:"30%" ,md:"15%"},margin:"20px auto 0px" , color:"#02979D",fontSize:"20px"}}><FaWhatsapp /><AiOutlineLinkedin /><FiInstagram /> </Box>
            </Box>
        </>
     );
}
 
export default Sec3;



