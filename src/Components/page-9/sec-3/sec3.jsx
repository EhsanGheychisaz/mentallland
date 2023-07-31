import Img1 from "../../../assests/image/Business Adult/Group 951.png";
import Img2 from "../../../assests/image/Business Adult/Rectangle 145.png";
import Stack from "@mui/material/Stack";
import ZPattern from "../../z-pattren/z-pattern.component";
import Button from "../../buttons/button.component";
import Box from "@mui/material/Box"
import css from "./style.module.css"
const Sec3 = () => {
  return (
    
      <Box sx={{position:"relative", px:5}} >
        <img src={Img2} className={css.img}/>
        <ZPattern zPatternType="zPatternRtl">
        <Stack
          direction={{ md: "column", lg: "row" }}
          justifyContent="space-around"
          alignItems="center"
        >
          <div className="z-pattern-image" style={{maxWidth:"1800px"}}>
            <img src={Img1} />
          </div>
          <div className="z-pattern-text">
            <h2>INTERESTING ASPECTS OF IT</h2>

            <p>
            Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet sit bibendum habitant integer a commodo. Malesuada bibendum libero sodales vitae interdum leo posuere. Rhoncus tincidunt sociis proin proin sit in tortor tincidunt. Sed semper malesuada eget faucibus suspendisse diam quam eleifend. Vestibulum egestas ultrices leo ut.
            </p>
            <p>
            Fusce porttitor pellentesque at consectetur bibendum turpis. Eu condimentum aliquam auctor duis accumsan cursus tristique pellentesque lorem. Eget cras proin.
            </p>
            <div>
              <Button buttonType="btnLoginBgBlue" type="button">
                learn more
              </Button>
            
            </div>
          </div>
        </Stack>
      </ZPattern>
      </Box>

  );
};

export default Sec3;
