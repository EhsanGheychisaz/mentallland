import styles from "./sec-6.module.css"
import Sec6pic from "../../../assests/image/sec-6.png"
import Stack from '@mui/material/Stack';
import ZPattern from "../../z-pattren/z-pattern.component"

const Sec4 = () => {
    return (
        <div className={styles.sectionsContainer}>
            <ZPattern zPatternType="zPatternLtr" >
                <Stack
                    direction={{ md: 'column', lg: 'row' }}
                    spacing={3}
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <div className="z-pattern-image">
                        <img src={Sec6pic} />
                    </div>
                    <div className="z-pattern-text">

                        <h2>Public Seminars</h2>

                        <p>Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque egestas in nec luctus ornare amet. In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sed elementum eget adipiscing nisl in vestibulum. Volutpat.</p>
                        <p>In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sed elementum eget adipiscing nisl in vestibulum. Volutpat.</p>
                    </div>


                </Stack>

            </ZPattern>
        </div>
        
    )
}

export default Sec4;