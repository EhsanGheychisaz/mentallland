import Card from "./card";
import   "swiper/css"
import   "swiper/css/pagination"
import   "swiper/css/navigation"
import "./style.css"
import Box from "@mui/material/Box"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";
import {useTheme} from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"


const ImageSlider = ({data,title , text}) => {
    const theme = useTheme();
    var matches = 3;
    matches = useMediaQuery(theme.breakpoints.down('md'))?1:false;
    matches = matches?matches:3;
    

    return ( 
        <>
         
                <Box  sx={{overflowY:"visible",pt:{lg:12 , md:5,sm:0,xs:0},pb:{xs:0 ,md:2}}}>
                        <Swiper  modules={[ Navigation]}   navigation={true} slidesPerView={matches} className="mySwiper w-full h-full " spaceBetween={0}  effect="fade">
                                            {
                                                data.map((item ,index)=>(
                                                    <SwiperSlide key={index} virtualIndex={index}>
                                                        <Card  img={item.img} name={item.name} field={item.field}/>
                                                    </SwiperSlide>
                                                ))
                                            }            
                        </Swiper>
                    
                </Box>
        

        </>
       
        
      
     );
}
 
export default ImageSlider;