import styles from "./sec_2.style.module.css";
import pic1 from "../../../assests/image/Group 1094.png";
import { Box, Grid } from "@mui/material";

const ContactSection2 = () => {
    return ( 
        <div className={styles.bg_sec2}>
        <Box marginBottom={20} marginTop={20}>
            <Grid container   direction={{md:"row" , xs:"column"}}
  justifyContent="space-between"
  alignItems="center">
                <Grid xs={12} md={12} lg={3} className={styles.contat_items} container direction={"column"} justifyContent={"space-between"}
                alignItems={"center"}>
                    <img src={pic1} alt="" />
                    <h5>Email Us</h5>
                    <p>mentalland@gmail.com</p>
                </Grid>
                <Grid  xs={12} md={12} lg={3}  className={styles.contat_items}  container  direction={"column"} justifyContent={"space-between"}
                alignItems={"center"}>
                    <img src={pic1} alt="" />
                    <h5>Email Us</h5>
                    <p>mentalland@gmail.com</p>
                </Grid><Grid  xs={12} md={12} lg={3}  className={styles.contat_items} container direction={"column"} justifyContent={"center"}
                alignItems={"center"}>
                    <img src={pic1} alt="" />
                    <h5>Email Us</h5>
                    <p>mentalland@gmail.com</p>
                </Grid>

            </Grid>
        </Box>
        </div>
     );
}
 
export default ContactSection2;