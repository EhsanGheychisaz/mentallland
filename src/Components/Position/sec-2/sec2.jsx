import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { Img2 , Img3 , Img4 ,Img5 , Img6 ,Img7} from "../../../assests/image/about us/index.js";
import Card from "./card.jsx"
const Sec2  = ()=>{
    const img = [Img3 , Img2 ,Img4 , Img5 , Img6 , Img7]
    return (
        <>
            <Box sx={{width:"90%",margin:"0px auto"}}>
                <Typography variant="h4" sx={{textAlign:"center",fontFamily:"alice-regular",marginBottom:"30px"}}>Open Roles in Mentalland</Typography>
                <Grid container spacing={2}>
                    {
                        img.map((item , index)=> (
                            <Grid key={index} xs={12} sm={12} md={6} lg={4}>
                                <Card img={item}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </>
    )
}
export default Sec2;