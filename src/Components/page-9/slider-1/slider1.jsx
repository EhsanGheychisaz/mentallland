import { Box } from "@mui/system";
import ImageSlider from "../SliderTop/ImageSlider"


const Slid1= () => {
  return (
    
     <>
        <Box className="slider1" sx={{width:"90%",maxWidth:"1800px",margin:"0px auto",overflowX:"hidden"}}>
            <ImageSlider />
        </Box>
     </>

  );
};

export default Slid1;
