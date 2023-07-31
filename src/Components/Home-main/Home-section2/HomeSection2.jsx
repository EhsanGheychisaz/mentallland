import {  Grid } from "@mui/material";
import Pic1 from "../../../assests/image/Group 761.png";
import Pic2 from "../../../assests/image/Group 762.png";
import Pic3 from "../../../assests/image/Group 763.png";
import Pic4 from "../../../assests/image/Group 764.png";
import styles from "./HomeSection2.style.module.css"
import Button from "../../buttons/button.component";

const Homesection2 = () => {
    return ( 
        <div>
            <div className="flex flex-col justify-items-center align-middle items-center">
            <h3 className={styles.section2_title}>Who we are</h3>
            <p className={styles.section2_text}>Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque egestas in nec luctus ornare amet. In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sed elementum eget adipiscing nisl in vestibulum. Volutpat.</p>
            </div>
            <div className="flex flex-col align-middle  justify-items-center   items-center ">
            <Grid container width={1400}
             justifyContent="center"
  alignItems="center">
  <Grid xs={12} sm={6} md={6} lg={3}>
     <div className={styles.section2_pic}>
                    <img alt="" src={Pic1} />
                    <p>Created with love</p>
                </div>
  </Grid>
  <Grid xs={12} sm={6} md={6} lg={3}>
  <div className={styles.section2_pic}><div className={styles.section2_pic__shadow}></div> <img alt="" src={Pic2} />
                <p>art academy added</p>
                </div>
  </Grid>
  <Grid xs={12} sm={6} md={6} lg={3}>
  <div className={styles.section2_pic}><div className={styles.section2_pic__shadow_special}></div><img alt="" src={Pic3} /><p>being the first
mental website in iran</p>
                </div>
  </Grid>
  <Grid xs={12} sm={6} md={6} lg={3}>
  <div className={styles.section2_pic}> <div className={styles.section2_pic__shadow}></div><img alt="" src={Pic4} /> <p>Redesigned,improved
and expanded</p>
                </div>
  </Grid>
            </Grid>
            <div className="w-full flex flex-col align-middle items-center mt-20">
            <Button>Learn more</Button>
            </div>
            
            </div>
        </div>
     );
}
 
export default Homesection2;