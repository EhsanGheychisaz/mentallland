import {data} from "./slide2/data2"
import Card from "./slide2/card2";
import   "swiper/css"
import   "swiper/css/pagination"
import   "swiper/css/navigation"
import "./style2.css"
import Box from "@mui/material/Box"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";
import {useTheme} from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Typography } from "@mui/material";
const ImageSlider = () => {
    const theme = useTheme();
    var matches = 3;
    matches = useMediaQuery(theme.breakpoints.down('md'))?1:false;
    matches = matches?matches:3;
    

    return ( 
        <>
         
                <Box sx={{overflowY:"visible" , marginBottom:"150px"}}>
                <Typography sx={{fontFamily:"Gilroy-SemiBold",fontSize:{lg:"30px",xs:"20px"},py:2}}>WHAT OUR STUDENTS SAY</Typography>
                <Typography sx={{fontFamily:"Gilroy-Regular",fontSize:{lg:"17px",xs:"12px",md:"15px"} ,py:{lg:6,xs:3}}}>Lorem ipsum dolor sit amet consectetur. Ut turpis nunc ac felis sapien diam. Sed velit dignissim viverra natoque. Ut mattis egestas </Typography>
                    <Swiper modules={[ Navigation]}   navigation={true} slidesPerView={matches} className="mySwiper w-full h-full " spaceBetween={10}  effect="fade">
                                        {
                                            data.map((item ,index)=>(
                                                <SwiperSlide key={index} virtualIndex={index}>
                                                    <Card  img={item.img} caption={item.caption} name={item.name} date={item.date} field={item.field}/>
                                                </SwiperSlide>
                                            ))
                                        }            
                    </Swiper>
                </Box>
        

        </>
       
        
      
     );
}
 
export default ImageSlider;