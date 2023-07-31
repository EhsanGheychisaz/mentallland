import ZPattern from "../../z-pattren/z-pattern.component";
import pic1 from "../../../assests/image/Rectangle 67.png";
import { Box } from "@mui/system";
import { Grid, Typography  , Stack  } from "@mui/material";
import pic2 from "../../../assests/image/Mask group.png";
import styles from "./section2.style.module.css";


const Section2 = () => {
    return ( 
        <div>
        <Box display={'flex'} alignItems="center" marginTop={{md:"150px"}} flexDirection={"column"}>
        <Typography sx={{fontFamily:'Alice',fontSize:{lg:"35px",xs:"28px"},py:8,textAlign:"center"}}>Adults Psychology Services</Typography>
            <Grid container
              direction="row"
  justifyContent="center"
  alignItems="center">
            <Grid xs={6}  md={4} lg={2}>
            <div  className="flex flex-col justify-between align-middle  items-center">
                    <div className={styles.services_bg}>
                        <img
                        alt="" src={pic2} />
                    </div>
                    <p>
                    Anxiety
                    </p>
                </div>
            </Grid>
            <Grid xs={6} md={4} lg={2}>
            <div  className="flex flex-col justify-between align-middle  items-center">
                    <div className={styles.services_bg}>
                        <img
                        alt="" src={pic2} />
                    </div>
                    <p>
                    Anxiety
                    </p>
                </div>
            </Grid>
            <Grid xs={6} md={4} lg={2}>
            <div  className="flex flex-col justify-between align-middle  items-center">
                    <div className={styles.services_bg}>
                        <img
                        alt="" src={pic2} />
                    </div>
                    <p>
                    Anxiety
                    </p>
                </div>
            </Grid>
            <Grid xs={6} md={4} lg={2}>
            <div  className="flex flex-col justify-between align-middle  items-center">
                    <div className={styles.services_bg}>
                        <img
                        alt="" src={pic2} />
                    </div>
                    <p>
                    Anxiety
                    </p>
                </div>
            </Grid>
            <Grid xs={6} md={4} lg={2}>
            <div  className="flex flex-col justify-between align-middle  items-center">
                    <div className={styles.services_bg}>
                        <img
                        alt="" src={pic2} />
                    </div>
                    <p>
                    Anxiety
                    </p>
                </div>
            </Grid>
            </Grid>
        </Box>
        <div className={styles.ZPattern}>
            <ZPattern zPatternType={"zPatternLtr"} >
              <Stack
              marginTop={{md:"200px"}}
              marginBottom={{md:"200px"}}
          direction={{ md: "column", lg: "row" }}
          spacing={3}
          justifyContent="center"
          alignItems={{md:"flex-start" , lg:"center"}}
        >
        <img className={styles.ZPattern_img} alt="" src={pic1} />
        <div className={styles.ZPattern_context}>
        <h3 className="z-pattern-title2">
        Adults Psychology
        </h3>
        <p className="z-pattern-text">
        Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque egestas in nec luctus ornare amet. In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sed elementum eget adipiscing nisl in vestibulum. Volutpat.
        </p>
        <ul>
            <li>✅ Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. </li>
            <li>✅ Lorem ipsum dolor sit amet consectetur.</li>
            <li>✅ Lorem ipsum dolor sit amet consectetur.</li>
            <li>✅ Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
        </div>
        </Stack>
        </ZPattern>
        </div>
        </div>
      
     );
}
 
export default Section2;