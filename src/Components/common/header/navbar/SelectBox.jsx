import * as React from 'react';
import {Box , InputLabel, MenuItem , FormControl , Select , Avatar, Typography} from '@mui/material';
import flag from "../../../../assests/img/En.png"

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth sx={{minWidth:"90px"}}>
        <InputLabel id="demo-simple-select-label" sx={{display:"flex",alignItems:"center" , justifyContent:"flex-start"}}><Avatar src={flag} sx={{width:"15px",height:"15px"}}/>{" "} <Typography sx={{fontFamily:"Gilroy-Regular"}}>EN</Typography></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          variant="standard"
          sx={{fontFamily:"Gilroy-Regular"}}
          onChange={handleChange}
        >
          <MenuItem value={10}><Avatar src={flag} sx={{width:"15px",height:"15px"}}/> EN</MenuItem>
          <MenuItem value={20}><Avatar src={flag} sx={{width:"15px",height:"15px"}}/> EN</MenuItem>
          <MenuItem value={30}><Avatar src={flag} sx={{width:"15px",height:"15px"}}/> EN</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}