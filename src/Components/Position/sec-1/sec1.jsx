import style from "./style.module.css";
import Sec6pic from "../../../assests/image/about us/Group 1103.png";
import Stack from "@mui/material/Stack";
import ZPattern from "../../z-pattren/z-pattern.component";
import Button from "../../buttons/button.component";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
const Sec1 = () => {
  return (
    <Box sx={{margin:{md:"150px 0px"}}}>
        <div>
      <ZPattern zPatternType="zPatternRtl">
        <Stack
          direction={{ md: "column", lg: "row" }}
          spacing={3}
          justifyContent="space-around"
          alignItems="center"
        >
          <div className="z-pattern-image">
            <img src={Sec6pic} />
          </div>
          <div className="z-pattern-text">
            <Typography variant="h2" sx={{fontFamily:"alice-Regular"}}>WE'RE HIRING</Typography>

            <Typography variant="p" sx={{textAlign:{xs:"center" , lg:"left"}}}>
            Lorem ipsum dolor sit amet consectetur. Nunc pharetra massa velit consectetur lectus erat. Tincidunt dis egestas aliquet adipiscing donec. Sed cras vulputate amet scelerisque. Varius etiam enim velit arcu arcu eget. Nunc a quis enim nibh posuere cras aenean purus. Nulla sagittis semper cum rhoncus varius quis vitae venenatis nibh. Senectus fames quisque porta vitae facilisis commodo consequat. Feugiat enim odio in sed condimentum. Id et purus est risus. . Tincidunt dis egestas aliquet adipiscing donec. Sed cras vulputate amet scelerisque.
            </Typography>
           
           
          </div>
        </Stack>
      </ZPattern>
    </div>
    </Box>
  );
};

export default Sec1;
