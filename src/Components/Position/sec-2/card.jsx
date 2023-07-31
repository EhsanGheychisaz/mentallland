import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {Title1 , Title2 , Contenttext , Bluebutton} from "./typography.jsx"
import Button from "../../buttons/button.component";
const Card = ({img})=>{
    return (
        <>
            <Box sx={{border:" 0.1px solid rgba(1, 148, 154,0.4)" , marginBottom:"20px"}}>
                <Avatar src={img} variant="square" sx={{width:1 , height:{xs:"200px",sm:"290px"},objectFit:"cover"}}/>
                <Box sx={{padding:{xs:"0px 5px",sm:"0px 15px"}}}>
                    <Box sx={{display:"flex",alignItems:"center" , justifyContent:"space-between",padding:"13px 0px"}}>
                        <Title1>Graphic Designer</Title1>
                        <Title1>today</Title1>
                    </Box>
                    <Title2>Remote</Title2>
                    <Box sx={{display:{xs:"block" , sm:"flex"},alignItems:"center" , justifyContent:"space-between",margin:"5px 0px"}}>
                        <Bluebutton>Mon-Fri</Bluebutton>
                        <Bluebutton>Full-time</Bluebutton>
                        <Bluebutton>$20-$30 an hour</Bluebutton>
                    </Box>
                    <Contenttext>-Lorem ipsum dolor sit amet consectetur.  Sit at senectus diam eg</Contenttext>
                    <Contenttext>-Lorem ipsum dolor sit amet consectetur.</Contenttext>
                    <Box sx={{width:"10%" , height:"30px",margin:"10px auto"}}><Button style={{width:"100%",padding:"10px 20px" , height:"100%"}}><ArrowRightAltIcon fontSize="small"/></Button></Box>
                </Box>

            </Box>
        </>
    )
}
export default Card ;