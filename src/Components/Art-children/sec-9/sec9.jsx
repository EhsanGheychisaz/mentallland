import css from "./style.module.css";
import S2 from "../../../assests/image/Arts-children/Rectangle 89.png";
import Buttons from "./../../buttons/button.component";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography ,Box } from "@mui/material";
import {data} from "./sliders/data/data1.js"
import ImageSlider from "./sliders/ImageSlider";

const Sec9= () => {
  return (
      <Box sx={{background:"#DEF1F2",margin:"100px 0px 60px",px:{ xs:2,md:9}}}>
          <Grid container>
              <Grid xs={12} sm={12} md={4} sx={{display:"flex",alignItems:'center'}}>
                    <Box>
                        <Typography sx={{fontFamily:"alice-regular",fontSize:{xs:"25px",sm:"30px",md:"25px",lg:"34px"},color:"#000B0C",textAlign:{xs:"center",md:"left"} ,my:{xs:3,md:0 }}}>NEED AN ART COACH?</Typography>   
                        <Typography sx={{fontFamily:"Gilroy-Regular",fontSize:{md:"17px",lg:"20px"},lineHeight:"40px",marginBottom:{xs:"100px",md:"0px"}}}> 
                        Lorem ipsum dolor sit amet consectetur. Urna posuere sed at fermentum nibh aliquet fusce. Justo gravida pharetra quam tincidunt nisl tellus rhoncus viverra amet. Sollicitudin sit lacus in eget arcu posuere. Vitae vitae mi pulvinar in. Erat egestas egestas interdum.    
                        </Typography>    
                    </Box>          
              </Grid>
              <Grid xs={12} sm={12} md={8} >
                 
                <Box sx={{height:{xs:"60%",md:"100%"},display:'flex',alignItems:"center"}}>
                    <Box className="slide11 page11" sx={{width:{xs:"100%",sm:"60%",md:"100%"},maxWidth:"1800px",margin:{md:"0px auto",xs:"0px auto",sm:"100px auto 0px"} , overflowX:"hidden"}}>
                        <ImageSlider 
                            data={data}
                            title="Upcoming Public Seminars & Events"
                        />
                    </Box>
                </Box>

              </Grid>
          </Grid>
      </Box>
  );
};

export default Sec9;
