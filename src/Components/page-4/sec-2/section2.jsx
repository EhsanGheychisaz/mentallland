import { Box, Stack,Grid , Typography } from "@mui/material";
import LinkCard from "./linkCard";
import pic1 from "../../../assests/image/Mask group (1).png";

const Section2 = () => {
    return ( 
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography  sx={{fontFamily:'Alice',fontSize:{lg:"40px",xs:"28px"},py:2, marginBottom:{md:"80px" , xs:"20px"} ,textAlign:"center"}}>Children/Teenagers Psychology Services</Typography>
            <Grid container
            direction="row"
  justifyContent="center"
  alignItems="center">
              <Grid xs={6} lg={2} md={4}><LinkCard text={"Depression"} img={pic1} /></Grid>  
              <Grid xs={6} lg={2} md={4}><LinkCard text={"Depression"} img={pic1} /></Grid>  
              <Grid xs={6} lg={2} md={4}><LinkCard text={"Depression"} img={pic1} /></Grid>  
              <Grid xs={6} lg={2} md={4}><LinkCard text={"Depression"} img={pic1} /></Grid>  
              <Grid xs={6} lg={2} md={4}><LinkCard text={"Depression"} img={pic1} /></Grid>  
            </Grid>
            <Grid container
            direction="row"
  justifyContent="center"
  alignItems="center"
  marginBottom={{lg:"200px" , xs:"50px"}}>
              <Grid xs={6} lg={2} md={4}><LinkCard text={"Depression"} img={pic1} /></Grid>  
              <Grid xs={6} lg={2} md={4}><LinkCard text={"Depression"} img={pic1} /></Grid>  
              <Grid xs={6} lg={2} md={4}><LinkCard text={"Depression"} img={pic1} /></Grid>  
            </Grid>
        </Box>
     );
}
 
export default Section2;