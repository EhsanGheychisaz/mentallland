import bg from "../../../assests/image/Arts-children/Rectangle 83.png"
import css from "./style.module.css"
import {  Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import {TfiWrite} from "react-icons/tfi"
import {GiFemaleLegs} from "react-icons/gi"
import {FaTheaterMasks} from "react-icons/fa"
import {CgArrowTopRight} from "react-icons/cg"
import {HiOutlineMusicNote }from "react-icons/hi"
import {VscSymbolColor} from "react-icons/vsc"
const Sec2  = ()=>{
    const listIcons = [HiOutlineMusicNote, VscSymbolColor,FaTheaterMasks , TfiWrite , GiFemaleLegs ]
    const listTexts = ["Music","Painting","Acting","Writing","Dancing"]
    return(
        <>
            <Grid container className={css.container} >
                <Grid xs={12} md={6}  sx={{marginBottom:{xs:"50px" , md:"0px"}}}>
                    <Typography sx={{fontFamily:"alice-regular",fontSize:"37px",fontWeight:"400",textAlign:"center",my:2}}>ADULTS ART DEPARTMENT</Typography>
                    <ul className={css.list}>
                        {
                            listIcons.map((Item , index)=>(
                                <li key={index} className={css.li}>
                                    <Typography className={css.sublist}>
                                        <Item />
                                        <Typography sx={{fontFamily:"Gilroy-Regular",fontSize:{sm:"20px",xs:"15px"},lineHeight:"40px"}}>{listTexts[index]}</Typography>
                                    </Typography>
                                    <CgArrowTopRight fontSize="30px"/>
                                </li>
                            ))
                        }
                    </ul>
                </Grid>
                <Grid xs={12} md={6} sx={{pt:{xs:10 ,sm:0}}}>
                    <img src={bg} className={css.img}/>
                </Grid>
            </Grid>
        </>
    )
}
export default Sec2;