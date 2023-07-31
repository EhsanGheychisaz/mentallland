import styles from "./Homesection4.styles.module.css";
import pic1 from "../../../assests/image/Group 779.png";
import Button from "../../buttons/button.component";
const Homesection4 = () => {
    return ( 
        <div className="flex flex-col items-center align-middle justify-items-center ">
         <div className={styles.section4}>
        <div className=" flex flex-col  lg:justify-center lg:flex-row  align-middle justify-around items-center"> 
            <img className={styles.section4_pic} alt="" src={pic1} />
            <div className={styles.section4_context}>
                <h4 className={styles.section4_title}>Mentalland on your phone</h4>
                <p className={styles.section4_text}>Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque egestas in nec luctus ornare amet.</p>
                <ul className={styles.section4_list}>
                    <li>Lorem ipsum dolor sit amet consectetur. Pretium rutrum </li>
                    <li>Lorem ipsum dolor sit amet consectetur. Pretium rutrum </li>
                    <li>Lorem ipsum dolor sit amet consectetur. Pretium rutrum </li>
                    <li>Lorem ipsum dolor sit amet consectetur. Pretium rutrum </li>
                </ul>
                <Button>Download</Button>
            </div>
        </div>
        </div>
        </div>
      
     );
}
 

export default Homesection4;