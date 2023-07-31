import {InputBase  , styled} from '@mui/material';

export const Searchs = styled('div')(({ theme }) => ({
  position: 'relative',
  '&:hover': {
    background: "#2ea2aa",
  },
  width:"300px",
  borderRadius:"30px",
  background:"white",
  fontFamily:"Gilroy-Medium",
  color:"black",
  [theme.breakpoints.up('sm')]: {
    width: '300px',
  },

}));
export const Searchs2 = styled('div')(({ theme }) => ({
  background:'rgba(0,0,0,0.3)',
  position: 'relative',
  '&:hover': {
    background: "#2ea2aa",
  },
  width:"200px",
  borderRadius:"30px",
  fontFamily:"Gilroy-Medium",
  background:"white",
  color:"black",
  [theme.breakpoints.up('sm')]: {
    width: '200px',
  },

}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  color:"rgba(0,0,0,0.3)",
  display:"flex",
  pointerEvents: 'none',
  alignItems: 'center',
  justifyContent:"center",
  left:10,
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  fontFamily:"vazir",
  fontSize:"0.8rem",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));