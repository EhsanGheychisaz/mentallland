import {data} from "../sliders/data/data1.js"
import ImageSlider from "../sliders/ImageSlider";
import Box from "@mui/material/Box"
import Button from "../../buttons/button.component.jsx";
const Slider2 = ()=>{
    return (
            <Box sx={{background:"linear-gradient(to right,rgb(253, 244, 230),rgb(249, 224, 185))",py:4,mt:10}}>
                <Box className="slide1 page2" sx={{width:{xs:"90%",sm:"75%"},maxWidth:"1800px",margin:"0px auto",height:{xs:'700px',sm:"800px",md:"700px"},background:"none", overflowX:"hidden"}}>
                    <ImageSlider 
                        data={data}
                        title="Upcoming Public Seminars & Events"
                    />
                 </Box>
                 <Button style={{padding:"6px 12px",fontSize:"18px",fontFamily:"Gilroy-Bold",margin:"5px auto"}}>See all</Button>
            </Box>
    )
}
export default Slider2;