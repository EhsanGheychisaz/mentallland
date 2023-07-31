import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Card2 = ({ img,caption ,name,date , field}) => {
    return (
 
            <Box sx={{height:"400px",mb:4,boxShadow:"rgba(2, 151, 157, 0.1) 0px 8px 24px",borderTop:"5px solid #02979D","&:hover":{borderTop:"5px solid #024A9D",boxShadow:"rgba(2, 74, 157, 0.2) 0px 8px 24px",transform:"translateY(-1px)"}}}>
               
                <img src={img} style={{width:"80px" ,height:"80px",borderRadius:"50%",color:"black",margin:"10px auto"}}/>
                <Typography sx={{fontFamily:"Gilroy-Regular",fontSize:"18px",textAlign:"center"}}>{name}</Typography>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",px:2}}>
                        <Typography sx={{fontFamily:"Gilroy-Regular",color:"#02979D",fontSize:"14px"}}>{date}</Typography>
                        <Typography sx={{fontFamily:"Gilroy-Regular",color:"#02979D",fontSize:"14px"}}>{field}</Typography>
                </Box>
                <Typography sx={{fontFamily:"Gilroy-Regular" , fontSize:"17px",textAlign:"center" ,mt:3 ,px:6}}>{caption}</Typography>
            </Box>
 
    );
  };
  
  export default Card2;