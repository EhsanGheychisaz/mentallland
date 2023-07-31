import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import pic1Card from "../../../assests/image/Ellipse 5.png";
import styles from "./HomeSection5.style.module.css";
import "./slidertoggle.style.css";
import ImageSlider from "./SliderTop/ImageSlider2";
import Box from "@mui/material/Box"

const Homesection5 = () => {
    return ( 
        // <div>
        //     <div className={styles.section5}>
        //     <div className={styles.section5_slidertext}>
        //     <h3>What Our Patients Say</h3>
        //     <p>Lorem ipsum dolor sit amet consectetur. Ut turpis nunc ac felis sapien diam. Sed velit dignissim viverra natoque. Ut mattis egestas </p>
        //     </div>
        //     <Swiper  spaceBetween={5} slidesPerView={3} navigation={true} modules={[Navigation]} className={styles.mySwiper}>
        //     <SwiperSlide className={styles.card}>
        //         <div className={styles.section5_card}>
        //             <img alt="" src={pic1Card} />
        //             <h5>Benjamin Smith</h5>
        //             <div className="flex flex-row align-middle justify-between w-full px-5">
        //                 <p className={styles.section5_carddate}>October 9</p>
        //                 <p className={styles.section5_carddate}>Psychology</p>
        //             </div>
        //             <p className={styles.section_cardtext}>Lorem ipsum dolor sit amet consectetur. Scelerisque risus nulla viverra orci tristique magna et. Sagittis enim ut gravida sed volutpat est arcu vitae ....</p>
        //         </div>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //     <div className={styles.section5_card}>
        //             <img alt="" src={pic1Card} />
        //             <h5>Benjamin Smith</h5>
        //             <div className="flex flex-row align-middle justify-between w-full px-5">
        //                 <p className={styles.section5_carddate}>October 9</p>
        //                 <p className={styles.section5_carddate}>Psychology</p>
        //             </div>
        //             <p className={styles.section_cardtext}>Lorem ipsum dolor sit amet consectetur. Scelerisque risus nulla viverra orci tristique magna et. Sagittis enim ut gravida sed volutpat est arcu vitae ....</p>
        //         </div>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //     <div className={styles.section5_card}>
        //             <img alt="" src={pic1Card} />
        //             <h5>Benjamin Smith</h5>
        //             <div className="flex flex-row align-middle justify-between w-full px-5">
        //                 <p className={styles.section5_carddate}>October 9</p>
        //                 <p className={styles.section5_carddate}>Psychology</p>
        //             </div>
        //             <p className={styles.section_cardtext}>Lorem ipsum dolor sit amet consectetur. Scelerisque risus nulla viverra orci tristique magna et. Sagittis enim ut gravida sed volutpat est arcu vitae ....</p>
        //         </div>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //     <div className={styles.section5_card}>
        //             <img alt="" src={pic1Card} />
        //             <h5>Benjamin Smith</h5>
        //             <div className="flex flex-row align-middle justify-between w-full p-2">
        //                 <p className={styles.section5_carddate}>October 9</p>
        //                 <p className={styles.section5_carddate}>Psychology</p>
        //             </div>
        //             <p className={styles.section_cardtext}>Lorem ipsum dolor sit amet consectetur. Scelerisque risus nulla viverra orci tristique magna et. Sagittis enim ut gravida sed volutpat est arcu vitae ....</p>
        //         </div>
        //     </SwiperSlide>
        //     </Swiper>
        //     </div>
        // </div>
        <>
            <Box className="slider4" sx={{width:"85%",maxWidth:"1800px",margin:"0px auto",overflowX:"hidden",mt:13}}>
                <ImageSlider />
            </Box>
        </>
     );
}
 
export default Homesection5;


// import { Box } from "@mui/system";
// import ImageSlider from "../../Page-2/sliders/ImageSlider";
// // import ImageSlider from "./SliderTop/ImageSlider2.jsx"


// const Slid2= () => {
//   return (
    
//      <>
//         <Box className="slider2" sx={{width:"90%",margin:"0px auto",overflowX:"hidden",mt:13}}>
//             <ImageSlider />
//         </Box>
//      </>

//   );
// };

// export default Slid2;
