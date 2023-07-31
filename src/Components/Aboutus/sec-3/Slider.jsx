import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {p1,p2,p3,p4} from "../../../assests/image/about us/index.js";
import Typography from "@mui/material/Typography"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);
const listpic = [p1 ,p2 ,p3, p4];
const listnam = ["JACK SMITH" , "HEDRIX COLN","PITER JAN" , "ROZE SMITH"]
export default function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

 
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
 
  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={matches?7:1}
        centeredSlides={true}
        spaceBetween={10}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <>
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <img src={listpic[index%4]} style={{width:"100%"}}/>
          <Typography className="teachername" sx={{fontSize:"24px",color:"#02979D",fontFamily:"Gilroy-SemiBold",zIndex:"999" , position:"absolute",bottom:"-50px"}}>{listnam[index%4]}</Typography>
          </SwiperSlide>
          </>
        ))}
      </Swiper>

     
    </>
  );
}
