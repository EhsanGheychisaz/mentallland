import style from "./style.module.css";
import Sec6pic from "../../../assests/image/Arts-Adults/Group 8.png";
import Stack from "@mui/material/Stack";
import ZPattern from "../../z-pattren/z-pattern.component";
import Button from "../../buttons/button.component";
const Sec4 = () => {
  return (
    <div className={style.sectionsContainer}>
      <ZPattern zPatternType="zPatternRtl">
        <Stack
          direction={{ md: "column", lg: "row" }}
          spacing={3}
          justifyContent="space-around"
          alignItems="center"
        >
          <div className="z-pattern-image">
            <img src={Sec6pic} className={style.img}/>
          </div>
          <div className="z-pattern-text">
            <h2 className={style.title} >OUR MUSIC COURSES</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis
              sit tortor proin proin sagittis. Id nec suspendisse lacus erat.
              Vivamus orci bibendum at purus elit. Vel vehicula donec amet a
              dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim.
              Nisl phasellus viverra quisque egestas in nec luctus ornare amet.
              In pellentesque volutpat urna ultrices vitae. Sed magna vitae
              placerat eu leo potenti semper id. Sed elementum eget adipiscing
              nisl in vestibulum. Volutpat.
            </p>
            <p>
              In pellentesque volutpat urna ultrices vitae. Sed magna vitae
              placerat eu leo potenti semper id. Sed elementum eget adipiscing
              nisl in vestibulum. Volutpat.
            </p>
            <div className={style.buttons}>
              <Button buttonType="btnLoginBgBlue" type="button">
                Learn more
              </Button>
            
            </div>
          </div>
        </Stack>
      </ZPattern>
    </div>
  );
};

export default Sec4;
