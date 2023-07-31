import styles from "./sec-5.module.css"
import Sec5pic1 from "../../../assests/image/sec-5(1).png"
import Sec5pic2 from "../../../assests/image/sec-5(2).png"
import Stack from '@mui/material/Stack';
import ZPattern from "../../z-pattren/z-pattern.component"
import Button from "../../buttons/button.component"
import "./sec-5.css"

const Sec6 = () => {
    return (
        <div className={styles.sectionsContainer}>
           <div className={styles.sectionsContainer1}>
            <ZPattern zPatternType="zPatternLtr" >
                <Stack
                    direction={{ md: 'column', lg: 'row' }}
                    spacing={3}
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <div className="z-pattern-image">
                        <img src={Sec5pic1} />
                    </div>
                    <div className="z-pattern-text zpt">

                        <h2>Public Seminars</h2>

                        <p>Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque egestas in nec luctus ornare amet. In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sed elementum eget adipiscing nisl in vestibulum. Volutpat.</p>
                        <Button buttonType="btnLoginBgBlue" type="button" >
                            Learn More
                        </Button>
                    </div>


                </Stack>
                

            </ZPattern>
            </div>
            <ZPattern zPatternType="zPatternRtl" >
                <Stack
                    direction={{ md: 'column', lg: 'row' }}
                    spacing={3}
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <div className="z-pattern-image">
                        <img src={Sec5pic2} />
                    </div>
                    <div className="z-pattern-text">

                        <h2>Public Seminars</h2>

                        <p>Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque egestas in nec luctus ornare amet. In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sed elementum eget adipiscing nisl in vestibulum. Volutpat.</p>
                       
                        <Button buttonType="btnLoginBgBlue" type="button" >
                            Learn More
                        </Button>
                    </div>


                </Stack>
                

            </ZPattern>
        </div>
        
    )
}

export default Sec6;