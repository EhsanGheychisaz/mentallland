
import { Searchs , Searchs2 , SearchIconWrapper , StyledInputBase}  from "../../common/utils/CustomizedSearch";
import {BiLogIn ,BiSearchAlt} from "react-icons/bi"; 
import styles from "./section-2.style.module.css";
import { Grid } from "@mui/material";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GridViewIcon from '@mui/icons-material/GridView';
import Button1 from "../../buttons/button.component";
import MultipleSelectChip1 from "./comonent-b/selectComponent1";
import MultipleSelectChip2 from "./comonent-b/selectComponent2";

const JobSection2 = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return ( 
        <div className={styles.section2}>
            <div className={styles.section2_searchList}>
            <Grid container direction="row" justifyContent="center" gap={6}>
            <div>
            <h4>What</h4>
            <div className="flex flex-row align-middle justify-around">
            <Searchs>
        <SearchIconWrapper>
                <BiSearchAlt /> 
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Job titles, Componies, Keywords..."
                inputProps={{ 'aria-label': 'search' }}
              />
        </Searchs> 
        <div>
            <MultipleSelectChip1 />
        </div>
            </div>
     
            </div>
           
        <div>
        <h4>Where</h4>
        <div>
            <MultipleSelectChip2 />
        </div>
        </div>
        
            </Grid>
            <Button1>
            Search Jobs
            </Button1>
        </div>
        </div>
     );
}
 
export default JobSection2;