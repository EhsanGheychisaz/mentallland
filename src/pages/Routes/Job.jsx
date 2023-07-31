import { Fragment } from "react";
import JobSec1 from "../../Components/Job/sec-1/sec_1";
import JobSection2 from "../../Components/Job/sec-2/sec_2";
import JobSection3 from "../../Components/Job/sec-3/sec_3";

const Job = () => {
    return ( 
        <Fragment>
           <JobSec1 />
           <JobSection2 />
           <JobSection3 />
        </Fragment>
     );
}
 
export default Job;