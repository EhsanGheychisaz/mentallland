import { Box } from "@mui/material";
import "./linkCard.css"

export default function LinkCard ({img , text}) {
    return ( 
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <div className="card_bg">
                <img alt="" src={img} />
            </div>
            <p>{text}</p>
        </Box>
     );
}