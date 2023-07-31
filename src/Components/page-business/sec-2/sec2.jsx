import {Box, Typography} from "@mui/material"
import Img1 from "../../../assests/image/page business/Rectangle 133.png"
import Img2 from "../../../assests/image/page business/Rectangle 134.png"
import Img3 from "../../../assests/image/page business/Rectangle 135.png"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import css from "./style.module.css"
const Sec2 = ()=>{
    return (
        <>
            <Box sx={{width:1,background:"white"}}>
                <Typography sx={{fontFamily:"Alice", fontSize:"38px",fontWeight:"400" , textAlign:"center" , margin:"200px auto 80px",lineHeight:"42px",color:"#000B0C",fontStyle:"Regular"}}>Our Services</Typography>
                <Grid container sx={{width:1 }}>
                    {
                        [Img1 ,Img2 ,Img3].map((item,index)=>(
                            <Grid xs={4} key={index} sx={{position:"relative"}}>
                                <img  src={item} className={css.img}/>
                                <div className={css.overlay}></div>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </>
    )
}
export default Sec2;