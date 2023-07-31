import { Fragment } from "react";
import HomeSection1 from "../../Components/Home-main/Home-section1/HomeSection1";
import Homesection2 from "../../Components/Home-main/Home-section2/HomeSection2";
import HomeSection3 from "../../Components/Home-main/Home-section3/HomeSection3";
import Homesection4 from "../../Components/Home-main/Home-Section4/HomeSection4";
import Homesection5 from "../../Components/Home-main/Home-section5/HomeSection5";
import Homesection6 from "../../Components/Home-main/Home-section6/HomeSection6";


const Home = () => {

    return ( 
        <Fragment>
            <HomeSection1 />
            <Homesection2 />
            <HomeSection3 />
            <Homesection4 />
            <Homesection5 />
            <Homesection6 />
        </Fragment>
     );
}
 
export default Home;