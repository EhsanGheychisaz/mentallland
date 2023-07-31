
import Slider1 from "./slider1/slider1";
import Slider2 from "./slider2/slider2";
import Sec3 from "./zpattren-sec/sec3";
import styles from "./section3.style.module.css";
import Sec2 from "./zpattren-sec/sec2";
import Sec1 from "./zpattren-sec/sec1";

const Section3 = () => {
    return ( 
        <div className={styles.section3_bg} >
            <Sec1 />
            <Slider1/>
            <Sec2 />
            <Sec3 />
            <Slider2 />
        </div>
     );
}
 
export default Section3;