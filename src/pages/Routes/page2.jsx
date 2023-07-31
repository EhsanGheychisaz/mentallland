import { Fragment } from "react";
import Sec1 from "../../Components/Page-2/sec-1/sec-1";
import Sec3 from "../../Components/Page-2/sec-3/sec-3";
import Sec4 from "../../Components/Page-2/sec-4/sec-4";
import Sec5 from "../../Components/Page-2/sec-5/sec-5";
import Sec6 from "../../Components/Page-2/sec-6/sec-6";
import Sec8 from "../../Components/Page-2/sec-8/sec-8";
import Sec9 from "../../Components/Page-2/sec-9/sec-9";
import Slider1 from "../../Components/Page-2/slider1/slider";
import Slider2 from "../../Components/Page-2/slider2/slider";

const Page2 = () => {
    return ( 
        <Fragment>
            <Sec1 />
            <Sec3 />
            <Sec4 />
            <Sec5 />
            <Sec6 />
            <Sec8 />
            <Slider1 />
            <Sec9 />
            <Slider2 />
        </Fragment>
     );
}
 
export default Page2;