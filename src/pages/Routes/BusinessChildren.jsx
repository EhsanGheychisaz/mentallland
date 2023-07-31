import { Fragment } from "react";
import Slider1 from "../../Components/page-10/slider-1/slider1";
import Slider2 from "../../Components/page-10/slider-2/slider2";
import Sec1 from "../../Components/page-10/sec-1/sec1";
import Sec4 from "../../Components/page-10/sec-4/sec4";
import Zindex1 from "../../Components/page-10/z-index1/z-index1";
import Zindex2 from "../../Components/page-10/z-index2/z-index2";
import Zindex3 from "../../Components/page-10/z-index3/z-index3";



const Page9 = () => {
    return ( 
        <Fragment>
            <Sec1 />
            <Slider1 />
            <Zindex1 />
            <Zindex2 />
            <Zindex3 />
            <Sec4 />
            <Slider2 />
        </Fragment>
     );
}
 
export default Page9;