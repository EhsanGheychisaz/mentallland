import { Typography , Box} from "@mui/material"
import Buttons from "../../buttons/button.component";
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { BlueButtonsForm ,Title} from "../buttons-form/ButtonsF"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const CardCom = ({title,category,jobtype,education,exp,facilities,company,description,city,remote,intership,date,salary})=>{
    return (
        <>
            <Grid xs={12} md={6} >
                <Box sx={{p:2 ,m:1, border:"2px solid #E6F0F6",zIndex:"999"}}>
                    <Box sx={{display:{xs:"flex",sm:"block"},alignItems:"center", justifyContent:"space-between"}}>
                        <Title>{title}</Title>
                        <Title>{category}</Title>
                        <Title>{exp}</Title>
                    </Box>
                    <Box sx={{display:{xs:"block",sm:"flex"},mt:1}}>
                            <BlueButtonsForm>{facilities}</BlueButtonsForm>
                            <BlueButtonsForm>{jobtype}</BlueButtonsForm>
                            <BlueButtonsForm>{salary}</BlueButtonsForm>
                    </Box>
                    <Typography sx={{color:"black",fontFamily:"Gilroy-Regular",fontSize:{md:"18px",xs:"13px"},fontStyle:"body-med",lineHeight:"40sp"}}>{description}</Typography>
                    <Box sx={{width:1,display:"flex",alignItems:"center" ,justifyContent:{xs:"space-between"}}}>
                        <Typography sx={{fontFamily:"Gilroy-Regular",fontSize:"14px",color:"#024A9D"}}>{date}</Typography>
                        <Typography sx={{fontFamily:"Gilroy-Regular",fontSize:"14px",color:"#024A9D"}}>{city}</Typography>
                    </Box>
                    <Typography sx={{color:"black",fontFamily:"Gilroy-Regular",fontSize:{md:"18px",xs:"13px"},fontStyle:"body-med",lineHeight:"40sp"}}>Mentalland Related Courses:</Typography>
                    <Box sx={{display:{xs:"block",sm:"flex"},alignItems:"center",justifyContent:"space-between"}}>
                        <Box sx={{display:{xs:"block",sm:"flex"},mt:1}}>
                                <BlueButtonsForm>{company}</BlueButtonsForm>
                                <BlueButtonsForm>{education}</BlueButtonsForm>
                        </Box>
                       <Box sx={{width:{xs:"60%",sm:"20%",md:"10%"},margin:{xs:"0px auto",md:"0px 0px"}}}>
                           <Buttons  buttonType="btnLoginBgBlue" type="button" style={{width:"100%",height:"35px"}}>
                                <ArrowRightAltIcon color="white"/>
                            </Buttons>
                       </Box>

                    </Box>
                </Box>
            </Grid>
        </>
    )
}
export default CardCom;