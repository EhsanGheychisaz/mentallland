import { Grid } from "@mui/material";
import pic1 from "../../../assests/image/Group 768 (1).png";
import styles from "./HomeSection3.style.module.css";
import background from "../../../assests/image/Rectangle 52.png";
import Cardfooter from "../../../assests/image/Rectangle 56.png";

const Homesection3 = () => {
    return ( 
        <div className="flex flex-col align-middle justify-items-center items-center  pt-20 pb-20">
            <div className={styles.section3_context}>
                <h3 className={styles.section3_title}>Our vision & mission</h3>
                <p className={styles.section3_text}>Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque egestas in nec luctus ornare amet. In pellentesque volutpat urna ultrices vitae. </p>
            </div>
            <div className={styles.section3_card}>
                <Grid className="flex" direction={{ xs: 'column', sm: 'row' }}
             justifyContent="space-between"
  alignItems="center">
                    <div className={styles.card}>
                        <img className={styles.card_header} src={pic1} alt="" />
                        <img className={styles.card_bg} src={background} alt="" />
                        <div className={styles.card_context}>
                            <h4>VISION</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cvolutpat urna ultrices vitae. </p>
                        </div>
                        <img width={252} className={styles.card_footer} src={Cardfooter} alt="" />
                    </div>
                    <div className={styles.card}>
                        <img className={styles.card_header} src={pic1} alt="" />
                        <img className={styles.card_bg} src={background} alt="" />
                        <div className={styles.card_context}>
                            <h4>VISION</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cvolutpat urna ultrices vitae. </p>
                        </div>
                        <img width={252} className={styles.card_footer} src={Cardfooter} alt="" />
                    </div>
                    <div className={styles.card}>
                        <img className={styles.card_header} src={pic1} alt="" />
                        <img className={styles.card_bg} src={background} alt="" />
                        <div className={styles.card_context}>
                            <h4>VISION</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cvolutpat urna ultrices vitae. </p>
                        </div>
                        <img width={252} className={styles.card_footer} src={Cardfooter} alt="" />
                    </div>
                    <div className={styles.card}>
                        <img className={styles.card_header} src={pic1} alt="" />
                        <img className={styles.card_bg} src={background} alt="" />
                        <div className={styles.card_context}>
                            <h4>VISION</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cvolutpat urna ultrices vitae. </p>
                        </div>
                        <img width={252} className={styles.card_footer} src={Cardfooter} alt="" />
                    </div>
                </Grid>
            </div>
        </div>
     );
}
 
export default Homesection3
