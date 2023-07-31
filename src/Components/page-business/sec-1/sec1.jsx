import { Typography,Button , Box} from "@mui/material"
import Img1 from "../../../assests/image/page business/Rectangle 49.png"
import Img2 from "../../../assests/image/page business/Rectangle 50.png"
import Img3 from "../../../assests/image/page business/Rectangle 51.png"
import Img4 from "../../../assests/image/page business/Rectangle 52.png"
import Img5 from "../../../assests/image/page business/Rectangle 53.png"
import css from "./style.module.css"
const Sec1 = ()=>{
    return (
        <>
            <Box sx={{width:"100vw" ,display:"flex",boxSizing:"border-box"}}>
            <Typography sx={{fontFamily:"Alice-Regular",position:"absolute",color:"white",fontSize:{xs:"150%",sm:"200%", md:"300%",lg:"350%"},fontWeight:"400",whiteSpace:"nowrap",top:{xs:"15%",sm:"25%" ,md:"35%" , lg:"40%"},left:"50%",transform:"translate(-50%,-50%)",zIndex:100 }}>LEARNING TODAY, LEADING TOMORROW</Typography>
            <Typography sx={{fontFamily:"Gilroy-Medium",position:"absolute" ,color:"white",zIndex:"100", fontSize:"110%",lineHeight:{xs:"20px",lg:"40px"},textAlign:"center",top:{xs:"30%",sm:"40%",md:"50%",lg:"60%"},left:"50%",transform:"translate(-50%,-50%)",width:"70%"}}>Lorem ipsum dolor sit amet consectetur. Viverra pellentesque volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut vitae felis convallis. Egestas enim diam ac nisi orci id tellus lobortis. Lacus in etiam rhoncus.</Typography>

              
                  {
                        [Img1 , Img2 , Img3 , Img4 , Img5].map((item  , index) => (
                            <div key={index} className={css.imgBG}>
                                <img src={item} className={css.img}/>
                                <div className={index%2===0?css.overlay:css.overlay2}></div>
                            </div>
                        ))
                    }
              
                <Button sx={{position:"absolute",bottom:{xs:"45%",sm:"20%",lg:"5%"},left:"50%",transform:"translate(-50%,-50%)",zIndex:"99",background:"none",border:"2px solid white",borderRadius:"40px",padding:{xs:"5px 10px",lg:"12px 30px"},"&:hover":{background:"white",color:"blue"},outline:"none"}}><Typography sx={{fontSize:{xs:"15px",lg:"20px"} , fontFamily:"Gilroy-Bold" ,lineHeight:"27px",color:"white","&:hover":{color:"rgb(4, 50, 104)"}}}>Register now</Typography></Button>
            </Box>
        </>
    )
}
export default Sec1;