import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Card2 = ({ img,name , field}) => {
    return (
 
            <Box className="card" sx={{width:{xs:"100%",md:"90%"},height:{xl:"400px",lg:"280px",md:"250px",sm:"500px",xs:"450px"},borderRadius:"14px",background:"white",mb:{xs:0,md:4},boxShadow:"rgba(2, 151, 157, 0.1) 0px 8px 24px","&:hover":{boxShadow:"rgba(2, 74, 157, 0.2) 0px 8px 24px",transform:"translateY(-1px)"}}}>
               
                <img src={img} style={{width:"100%" ,height:"auto",color:"black",margin:"10px auto"}}/>
                <Typography sx={{textAlign:"center",fontFamily:"Gilroy-Regular",fontSize:"18px",color:"#02979D"}}>{name}</Typography>
                <Typography sx={{textAlign:"center",fontFamily:"Gilroy-Regular",fontSize:"17px",color:"#D74E7F"}}>{field}</Typography>
            </Box>
 
    );
  };
  
  export default Card2;