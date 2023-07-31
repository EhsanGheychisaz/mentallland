import { Fragment } from "react";
import ContactSection1 from "../../Components/Contact-us/sec-1/sec_1";
import ContactSection2 from "../../Components/Contact-us/sec-2/sec_2";
import ContactSection3 from "../../Components/Contact-us/sec-3/sec_3";
import ContactSection4 from "../../Components/Contact-us/sec-4/sec_4";


const Contactus  = () => {
    return (
        <Fragment>
            <ContactSection1 />
            <ContactSection2 />
            <ContactSection3 />
            <ContactSection4 />
        </Fragment>
      );
}
 
export default Contactus ;