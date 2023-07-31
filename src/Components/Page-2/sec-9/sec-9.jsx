import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import img1 from "../../../assests/image/Business Adult/Group 817.png"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box'
import {Title , Content} from "./commonT"
import { data } from "./data";
import Grid from "@mui/material/Unstable_Grid2/Grid2"
export default function SimpleAccordion() {
  return (
    <Grid container sx={{maxWidth:"1100px",width:"83%",margin:"100px auto",boxSizing:"border-box"}}>
            <Grid xs={12} md={7} lg={8} sx={{display:"flex",my:4,flexDirection:"column",alignItems:{lg:"left" ,xs:"center"},justifyContent:"center"}}>
            <Box sx={{width:"90%"}}>
                {
                    data.map((item  , index)=>(
                        <Accordion sx={{borderRadius:"14px",py:1,boxShadow:" rgba(2, 151, 157, 0.2) 10px 10px 30px -10px",my:3,border:"1px solid #02979D","&.Mui-expanded":{border:"1px solid #EDA12F"}}} square={true}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            key={index}
                            
                            >
                            <Title>{item.title}</Title>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Content>
                                {item.content}
                            </Content>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </Box>
        </Grid>
        <Grid xs={12} md={5} lg={4} sx={{display:"flex",my:4,alignItems:"center",justifyContent:{lg:"right" ,xs:"center"}}}>
            <img src={img1} style={{width:"90%",height:"auto"}}/>
        </Grid>
    </Grid>

   
  );
}
