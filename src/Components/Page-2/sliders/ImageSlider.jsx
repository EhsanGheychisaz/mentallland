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
import { Typography } from "@mui/material";

const ImageSlider = ({data,title , text}) => {
    const theme = useTheme();
    var matches = 3;
    matches = useMediaQuery(theme.breakpoints.down('md'))?1:false;
    matches = matches?matches:3;
    

    return ( 
        <>
         
                <Box  sx={{overflowY:"visible" }}>
                    <Typography sx={{fontFamily:"Gilroy-SemiBold",height:"100%",fontSize:{lg:"30px",sm:"20px",xs:"18px"},py:2,textAlign:"left"}}>{title}</Typography>
                        <Swiper modules={[ Navigation]}   navigation={true} slidesPerView={matches} className="mySwiper w-full h-full " spaceBetween={10}  effect="fade">
                                            {
                                                data.map((item ,index)=>(
                                                    <SwiperSlide key={index} virtualIndex={index}>
                                                        <Card  img={item.img} userInfo={item.userInfo} smallInfo={item.smallInfo} date={item.date} time={item.time} caption={item.caption}/>
                                                    </SwiperSlide>
                                                ))
                                            }            
                        </Swiper>
                    
                </Box>
        

        </>
       
        
      
     );
}
 
export default ImageSlider;