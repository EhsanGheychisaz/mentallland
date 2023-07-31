import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
export const Title1 = ({children})=>{
    return (
        <Typography sx={{fontFamily:"Gilroy-Medium",fontSize:"17px",color:"#02979D"}}>{children}</Typography>
    )
}

export const Title2 = ({children})=>{
    return (
        <Typography sx={{fontFamily:"Gilroy-Medium",fontSize:"18px",color:"#000B0C"}}>{children}</Typography>
    )
}
export const Bluebutton = ({children})=>{
    return (
        <Box sx={{background:"#e6f0f6",padding:"5px 10px" , margin:"5px 0px"}}>
                <Typography sx={{fontFamily:"Gilroy-Regular",fontSize:"16px",color:"#000B0C"}}>{children}</Typography>
        </Box>
    )
}
export const Contenttext = ({children})=>{
    return (
        <Typography sx={{fontFamily:"Gilroy-Medium",fontSize:{xs:"14px",sm:"16px"},color:"#000B0C",lineHeight:{xs:"20px",sm:"37px"},textAlign:"left"}}>{children}</Typography>
    )
}