import styles from "./section-1.style.module.css";
import Button from "../../buttons/button.component";
import { Link } from "react-router-dom";

const JobSection1 = () => {
    return (  
        <div>
        <div className={styles.section1_headbg}>

        </div>
        <div className={styles.section1}>
        <div className="flex flex-col align-middle justify-between  pl-16">
            <h3 className={styles.section1_title}>Get Your 
                Dream Job 
                Today</h3>
            <p className={styles.section1_text}>
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut vitae felis convallis.
            </p> 
            <Link to={""}>
            <Button buttonType={"posterButton"}>
            Build Resume
            </Button>   
            </Link>
         
        </div>
        <div></div>
        </div>
        </div>
    );
}
 
export default JobSection1;