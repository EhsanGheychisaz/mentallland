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
         
                <Box className="conSwip" sx={{overflowY:"visible",pb:{xs:10,md:20}}}>
                <Typography sx={{fontFamily:"alice-regular",fontSize:{lg:"40px",xs:"20px"} ,mb:{xs:8 , md:20},textAlign:"center"}}>WHAT OUR PATIENTS SAY ABOUT US</Typography>
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