import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import { Img9} from "../../../assests/image/about us/index.js";
import Box from "@mui/material/Box"
import Button from "../../buttons/button.component";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Sec4 = ()=>{
    return (
        <Box sx={{width:"90%",mx:"auto"}}>
            <Grid container spacing={3}>
                <Grid xs={12} md={3}  >
                   <Box sx={{ display:"flex",flexDirection:"column", justifyContent:"space-between"}}>
                    <Typography sx={{fontFamily:"alice-regular",fontSize:"38px" , textAlign:"center"}}>Join Our Team</Typography>
                        <Avatar variant="square" sx={{width:1 , height:"auto"}} src={Img9}/>
                   </Box>
                </Grid>
                <Grid xs={12} md={9} >
                    <Box sx={{ height:"100%",display:"flex",flexDirection:"column", justifyContent:"space-between",alignItems:{xs:"center",md:"start"}}}>
                        <Typography sx={{fontSize:"20px",lineHeight:"38px",fontFamily:"Gilroy-Regular",textAlign:{xs:"center",md:"left"}}}>
                            Lorem ipsum dolor sit amet consectetur. Nunc pharetra massa velit consectetur lectus erat. Tincidunt dis egestas aliquet adipiscing donec. Sed cras vulputate amet scelerisque.
                        </Typography>
                        <Button style={{width:"250px"}}><Typography sx={{fontSize:"16px",fontFamily:"Gilroy-Bold",textAlign:"right",whiteSpace:"nowrap"}}>See open positions </Typography><ArrowRightAltIcon fontSize="small" sx={{mx:1}}/></Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Sec4;