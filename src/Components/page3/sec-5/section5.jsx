import ZPattern from "../../z-pattren/z-pattern.component";
import pic1 from "../../../assests/image/Group 934.png";
import styles from "./section5.style.module.css";
import { Stack } from "@mui/material";

const Section5 = () => {
    return ( 
        <div className={styles.ZPattern}>
        <ZPattern>
         <Stack marginTop={{xs:"30px" , md:"0"}}
         marginBottom={{md:"200px"}}
          direction={{ md: "column", lg: "row" }}
          spacing={3}
          justifyContent="center"
          alignItems={{ xs: "center", lg: "flex-start" }}
        >
        <img alt="" className="z-pattern-image" src={pic1} />
        <div className={styles.ZPattern_context}>
            <h3 className="z-pattern-title2">Adults Psychology article</h3>
            <p className="z-pattern-text ">Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque egestas in nec luctus ornare amet. In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sed elementum eget adipiscing nisl in vestibulum. Volutpat.</p>
            <p className="z-pattern-text ">
            In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sed elementum eget adipiscing nisl in vestibulum. Volutpat.
            </p>
        </div>
        </Stack>
        </ZPattern>
        </div>
     );
}
 
export default Section5;