
import {data} from "./data/personaldata.js";
import SliderSection from "./slider/slider.js";
import "./section3.style.css";

const Section3 = () => {
    return ( 
        <div className="page2">
        <SliderSection data={data} 
        title= "Adult PsychologY Consultants & Psychologists"
        text={"Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut."} />
        </div>
     );
}
 
export default Section3;