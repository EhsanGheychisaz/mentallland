import css from "./style.module.css";
import S2 from "../../../assests/image/Arts-children/Rectangle 92.png";
import Buttons from "../../buttons/button.component";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
const Sec5= () => {
  return (
      <Box sx={{background:"#DEF1F2",padding:{xs:"0px 10px", md:"0px 100px"},margin:{ xs:"400px 0px 60px",sm:"600px 0px 60px",md:"300px 0px 200px",xl:"500px 0px 300px"}}}>
          <Grid container>
              <Grid xs={12} sm={12} md={8} sx={{position:"relative"}}>
                  <img src={S2} className={css.img} />
              </Grid>
              <Grid xs={12} sm={12} md={4}>
                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",height:"200px",margin:"100px 0px"}}>
                    <Typography sx={{fontFamily:"Gilroy-Regular",fontSize:"18px",color:"#000B0C"}}>Let’s start playing Guitar</Typography>
                    <Typography sx={{fontFamily:"alice-regular",fontSize:"34px",color:"#000B0C"}}>This April</Typography>
                    <Buttons style={{fontFamily:"Gilroy-Bold",fontSize:"18px",margin:"0px auto"}}>Request Now</Buttons>
                </Box>
              </Grid>
          </Grid>
      </Box>
  );
};

export default Sec5;
