import styles from "./sec_1.style.module.css";
import pic1 from "../../../assests/image/Group 1101.png";

const ContactSection1 = () => {
    return (  
        <div className={styles.bg_sec1}>
            <div className="flex flex-col justify-items-center align-middle items-center">
            <h3 className={styles.sec1_title}>Contact Us</h3>
            <div className={styles.sec1_text}>
            <p>
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut vitae felis convallis. Egestas enim diam ac nisi orci id tellus lobortis. Lacus in etiam rhoncus.
            </p></div>
            </div>
            <div>
                <img className={styles.sec1_pic1} src={pic1} alt=""  />
            </div>
        </div>
    );
}
 
export default ContactSection1;