import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "../../buttons/button.component"
import RightArrow from "@mui/icons-material/ArrowRightAlt"
import AccessTime from "@mui/icons-material/AccessTime"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { TextAndIcon } from "../../page-9/buttons-form/ButtonsF"
const Card2 = ({ img,userInfo , smallInfo,caption  , time,date}) => {
    return (
 
            <Box className="card" sx={{height:{xl:"550px",lg:"500px",md:"450px",sm:"550px",xs:"470px"},background:"white",mb:4,boxShadow:"rgba(2, 151, 157, 0.1) 0px 8px 24px","&:hover":{boxShadow:"rgba(2, 74, 157, 0.2) 0px 8px 24px",transform:"translateY(-1px)"}}}>
               
                <img src={img} style={{width:"100%" ,height:"auto",color:"black",margin:"10px auto"}}/>
                <Typography sx={{fontFamily:"Gilroy-Regular" , fontSize:"13px",textAlign:"left",px:1 }}>{caption}</Typography>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",mx:1,my:3}}>
                        <TextAndIcon><PersonOutlineOutlinedIcon sx={{mx:1 , color:"rgba(0,0,0,0.6)",fontSize:"20px"}}/> {userInfo}</TextAndIcon>
                        <Typography sx={{fontFamily:"Gilroy-Regular",color:"black",fontSize:"12px"}}>{smallInfo}</Typography>
                </Box>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",mx:1,mt:3}}>
                        <TextAndIcon sx={{fontFamily:"Gilroy-Regular",color:"black",fontSize:"12px",display:"flex",alignItems:"center"}}><CalendarMonthOutlinedIcon sx={{mx:1 , color:"rgba(0,0,0,0.6)",fontSize:"20px"}}/> {date}</TextAndIcon>
                        <TextAndIcon sx={{fontFamily:"Gilroy-Regular",color:"black",fontSize:"12px",display:"flex",alignItems:"center"}}><AccessTime sx={{mx:1 , color:"rgba(0,0,0,0.6)",fontSize:"20px"}}/> {time}</TextAndIcon>
                </Box>
                <Button style={{width:"50px",height:"30px",margin:"10px auto 0px",borderRadius:"15px",mt:3}} ><RightArrow fontSize="small"/> </Button>
            </Box>
 
    );
  };
  
  export default Card2;