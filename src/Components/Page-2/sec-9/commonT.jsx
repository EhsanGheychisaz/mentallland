import Typography   from "@mui/material/Typography"
export const Title = ({children})=>{
    return (
        <>
            <Typography sx={{fontFamily:"Gilroy-SemiBold",fontSize:{lg:"18px",xs:"15px"},lineHeight:"30px"}}>{children}</Typography>
        </>
    )
} 

export const Content = ({children})=>{
    return (
        <>
            <Typography sx={{fontFamily:"Gilroy-Regular",fontSize:{lg:"18px",xs:"15"},lineHeight:"30px"}}>{children}</Typography>
        </>
    )
}