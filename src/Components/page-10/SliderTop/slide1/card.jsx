import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
const Card = ({ img,caption}) => {
    return (
 
            <Box sx={{"&:hover":{transform:"translateY(-1px)",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}}>
                <img src={img} style={{width:"100%" ,height:"auto"}}/>
                <Typography sx={{fontFamily:"Gilroy-Regular" , fontSize:"20px",textAlign:"center" ,mt:2}}>{caption}</Typography>
            </Box>
 
    );
  };
  
  export default Card;