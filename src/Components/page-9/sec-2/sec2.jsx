import Img1 from "../../../assests/image/Business Adult/Group 953.png";
import Stack from "@mui/material/Stack";
import ZPattern from "../../z-pattren/z-pattern.component";
import Button from "../../buttons/button.component";
const Sec1 = () => {
  return (
    
      <ZPattern zPatternType="zPatternLtr">
        <Stack
          direction={{ md: "column", lg: "row" }}
          spacing={3}
          justifyContent="space-around"
          alignItems="center"
          sx={{width:"90%",margin:{xs:"200px auto",md:"0px solid"}}}
        >
          <div className="z-pattern-image" >
            <img src={Img1} />
          </div>
          <div className="z-pattern-text" style={{paddingLeft:"30px"}}>
            <h2>FUTURE OF DIGITAL MARKETING</h2>

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

  );
};

export default Sec1;
