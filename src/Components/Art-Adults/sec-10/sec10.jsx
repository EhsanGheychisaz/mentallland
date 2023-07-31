import ImageSlider from "./SliderTop/ImageSlider2";
import Box from "@mui/material/Box"

const Sec10 = () => {
    return ( 
        <>
            <Box className="slider5" sx={{width:"90%",maxWidth:"1800px",margin:"0px auto",overflowX:"hidden",mt:{xs:0,md:9},py:{md:10,xs:0}}}>
                <ImageSlider />
            </Box>
        </>
     );
}
 
export default Sec10;



