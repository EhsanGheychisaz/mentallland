import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import {Img8} from "../../../assests/image/about us/index.js";

const Sec1 = ()=>{
    return (
        <Box sx={{marginTop:{md:"150px"},textAlign:"center",width:"90%",mx:"auto"}}>
            <Typography sx={{fontSize:{xs:"35px",sm:"40px",md:"45px"},fontFamily:"alice-regular"}}>We are here to make your life Easier</Typography>
            <Typography sx={{fontFamily:"Gilroy-Regular",lineHeight:{xs:"30px",sm:"35px",md:"38px"} , width:"100%",marginTop:"5px",fontSize:{xs:"18px",md:"22px"},textAlign:"justify"}}>
                Lorem ipsum dolor sit amet consectetur. Nunc pharetra massa velit consectetur lectus erat. Tincidunt dis egestas aliquet adipiscing donec. Sed cras vulputate amet scelerisque. Varius etiam enim velit arcu arcu eget. Nunc a quis enim nibh posuere cras aenean purus. Nulla sagittis semper cum rhoncus varius quis vitae venenatis nibh. Senectus fames quisque porta vitae facilisis commodo consequat. Feugiat enim odio in sed condimentum. Id et purus est risus.
            </Typography>
            <Avatar src={Img8} variant="square" sx={{width:1,height:"auto",marginTop:"50px"}}/>
        </Box>
    )
}
export default Sec1;