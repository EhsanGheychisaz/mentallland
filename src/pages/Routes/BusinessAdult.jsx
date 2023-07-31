import { Fragment } from "react";
import Slider1 from "../../Components/page-9/slider-1/slider1";
import Slider2 from "../../Components/page-9/slider-2/slider2";
import Sec1 from "../../Components/page-9/sec-1/sec1";
import Sec2 from "../../Components/page-9/sec-2/sec2";
import Sec3 from "../../Components/page-9/sec-3/sec3";
import Sec4 from "../../Components/page-9/sec-4/sec4";



const Page9 = () => {
    return ( 
        <Fragment>
            <Sec1 />
            <Slider1 />
            <Sec2 />
            <Sec3 />
            <Sec4 />
            <Slider2 />
        </Fragment>
     );
}
 
export default Page9;