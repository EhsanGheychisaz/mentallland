import ImageSlider from "./SliderTop/ImageSlider2";
import s1 from "../../../assests/image/Arts-Adults/Ellipse 39.png"
import Box from "@mui/material/Box"

const Sec10 = () => {
    return ( 
        <>
            <Box sx={{position:"relative"}}>
                <Box component="img" src={s1} sx={{position:"absolute",left:"0px"}}/>
                <Box className="slider7" sx={{width:"90%",maxWidth:"1800px",margin:"0px auto",py:2,overflowX:"hidden",mt:{md:10,xs:0}}}>
                    <ImageSlider />
                </Box>
            </Box>
        </>
     );
}
 
export default Sec10;



