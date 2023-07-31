import { Box  , Stack} from "@mui/material";
import ZPattern from "../../../z-pattren/z-pattern.component";
import styles from "../../../page3/sec-2/section2.style.module.css";
import pic1 from "../../../../assests/image/Rectangle 67 (1).png";

const Sec1 = () => {
    return ( 
        <Box display={"flex"} flexDirection="column" alignItems={{xl:"center" , md:"end"}} justifyContent={{xl:"center" , md:"end"}}  marginBottom={{lg:"200px" , xs:"50px"}}>
        <div className="flex flex-col justify-items-center align-middle">
            <ZPattern>
            <Stack
    direction={{ md: "column", lg: "row" }}
    spacing={3}
    justifyContent="end"
    alignItems="flex-start"
  >
  <div className={styles.ZPattern_context}>
  <h3 className="z-pattern-title2">
  cHILDREN Psychology article
  </h3>
  <p className="z-pattern-text ">
  Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque egestas in nec luctus ornare amet. In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sed elementum eget adipiscing nisl in vestibulum. Volutpat.
  </p>
  <ul>
            <li>✅ Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. </li>
            <li>✅ Lorem ipsum dolor sit amet consectetur.</li>
            <li>✅ Lorem ipsum dolor sit amet consectetur.</li>
            <li>✅ Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
  </div>
  <img className="z-pattern-image" alt="" src={pic1} />
  </Stack>
            </ZPattern>
            </div>
        </Box>
     );
}
 
export default Sec1;