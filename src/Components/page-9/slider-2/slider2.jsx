import { Box } from "@mui/system";
import ImageSlider from "../SliderTop/ImageSlider2"


const Slid2= () => {
  return (
    
     <>
        <Box className="slider2" sx={{width:"90%",maxWidth:"1800px",margin:"0px auto",overflowX:"hidden",mt:13}}>
            <ImageSlider />
        </Box>
     </>

  );
};

export default Slid2;
