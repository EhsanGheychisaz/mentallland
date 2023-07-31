import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import styles from "./sec_2.style.module.css";

const JobSection2 = () => {
    return (
        <div>
            <Box>
                <Stack marginLeft={"100px"} direction={"column"} justifyContent={"space-between"} alignItems={"flex-start"}>
                    <Typography sx={{fontFamily:'Alice',fontSize:{lg:"40px",xs:"28px"},py:2, marginLeft:{md:"30px"}, marginBottom:{md:"18px" , xs:"20px"} ,textAlign:"left"}}>More about this position</Typography>
                    <Typography sx={{fontFamily:'Gilroy-Medium',fontSize:{lg:"19px",xs:"12px"},lineHeight:{md:"40px"}, width:{md:"1239px"} , height:{md:"240px"}, marginLeft:{md:"30px"}, marginBottom:{md:"18px" , xs:"20px"} ,textAlign:"left"}}>Lorem ipsum dolor sit amet consectetur. Viverra pellentesque volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut vitae felis convallis. Egestas enim diam ac nisi orci id tellus lobortis. Lacus in etiam rhoncus.Lorem ipsum dolor sit amet consectetur. Viverra pellentesque volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut vitae felis convallis. Egestas enim diam ac nisi orci id tellus lobortis. Lacus in etiam rhoncus.Lorem ipsum dolor sit amet consectetur. Viverra pellentesque volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut vitae felis convallis. Egestas enim diam ac nisi orci id tellus lobortis. Lacus in etiam rhoncus.</Typography>
                    <Stack direction={{md:"row" , xs:"column"}} justifyContent={"center"} width={{lg:"1240px"}}>
                    <div className={styles.ol_bg}>
                    <Typography sx={{fontFamily:'Alice',fontSize:{lg:"40px",xs:"28px"}, marginBottom:{md:"0px" , xs:"20px"} ,textAlign:"left"}}>requirements</Typography>
                         <ol className={styles.ol}>
                         <li  className={styles.ol_list}>Id ut voluptate ea</li>
                         <li  className={styles.ol_list}>Id ut voluptate ea fugiat proident irure pariatur fugiat proident irure pariatur.</li>
                         <li className={styles.ol_list}>Id ut voluptate ea fugiat proident irure pariatur.
                         Id ut voluptate ea fugiat proident irure pariatur fugiat proident irure pariatur.</li>
                         <li  className={styles.ol_list}>Id ut voluptate ea fugiat proident irure pariatur.</li>
                         <li  className={styles.ol_list}>Id ut voluptate ea fugiat proident irure pariatur.</li>
                         <li  className={styles.ol_list}>Id ut voluptate ea fugiat proident irure pariatur.</li>
                        </ol>
                    </div>
                    <div>
                    <Typography sx={{fontFamily:'Alice',fontSize:{lg:"40px",xs:"28px"}, marginBottom:{md:"0px" , xs:"20px"} ,textAlign:"left"}}> Benefits</Typography>
                         <ol  className={styles.ol}>
                         <li  className={styles.ol_list}>Id ut voluptate ea</li>
                         <li  className={styles.ol_list}>Id ut voluptate ea fugiat proident irure pariatur fugiat proident irure pariatur.</li>
                         <li className={styles.ol_list}>Id ut voluptate ea fugiat proident irure pariatur.
                         Id ut voluptate ea fugiat proident irure pariatur fugiat proident irure pariatur.</li>
                         <li  className={styles.ol_list}>Id ut voluptate ea fugiat proident irure pariatur.</li>
                         <li  className={styles.ol_list}>Id ut voluptate ea fugiat proident irure pariatur.</li>
                         <li  className={styles.ol_list}>Id ut voluptate ea fugiat proident irure pariatur.</li>
                        </ol>
                    </div>
                    </Stack>
                </Stack>
            </Box>
        </div>
      );
}
 
export default JobSection2;