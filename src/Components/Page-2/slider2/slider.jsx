import {data} from "../sliders/data/data2"
import ImageSlider from "../sliders/ImageSlider";
import Box from "@mui/material/Box"
import Button from "../../buttons/button.component.jsx";
const Slider2 = ()=>{
    return (
            <Box sx={{background:"linear-gradient(to right,rgb(187, 227, 229),rgb(235, 247, 247))",py:4}}>
                <Box className="slide1 page2" sx={{width:{xs:"90%",sm:"75%"},background:"none",maxWidth:"1800px",height:{xs:'700px',sm:"800px",md:"700px"},margin:"0px auto" , overflowX:"hidden"}}>
                    <ImageSlider 
                        data={data}
                        title="Upcoming Public Seminars & Events"
                    />
                 </Box>
                 <Button style={{padding:"6px 12px",fontSize:"18px",fontFamily:"Gilroy-Bold",margin:"0px auto"}}>See all</Button>
            </Box>
    )
}
export default Slider2;