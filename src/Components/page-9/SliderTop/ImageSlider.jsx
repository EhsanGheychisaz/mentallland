import {data} from "./slide1/data"
import Card from "./slide1/card";
import   "swiper/css"
import   "swiper/css/pagination"
import   "swiper/css/navigation"
import "./style.css"
import Box from "@mui/material/Box"
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation} from "swiper";
import {useTheme} from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import {MainTitle} from "../buttons-form/ButtonsF"
const ImageSlider = () => {
    const theme = useTheme();
    var matches = 4;
    matches = useMediaQuery(theme.breakpoints.down('md'))?1:false;
    matches = matches?matches:4;
    

    return ( 
        <>
         
                <Box sx={{overflowY:"visible"}}>
                <Box sx={{py:6}}> <MainTitle>Adults Courses</MainTitle></Box>
                    <Swiper modules={[ Navigation]}   navigation={true} slidesPerView={matches} className="mySwiper w-full h-full " spaceBetween={10}  effect="fade">
                                        {
                                            data.map((item ,index)=>(
                                                <SwiperSlide key={index} virtualIndex={index}>
                                                    <Card  img={item.img} caption={item.caption}/>
                                                </SwiperSlide>
                                            ))
                                        }            
                    </Swiper>
                </Box>
        

        </>
       
        
      
     );
}
 
export default ImageSlider;