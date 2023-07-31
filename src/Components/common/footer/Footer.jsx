import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box  , List  ,ListItemText, Typography ,FormHelperText , FormControl, InputLabel , InputBase , alpha , styled, ListItem, ListItemButton} from "@mui/material";
import SocialIcons from "../utils/SocialIcons";
import {ButtonCustomised} from "../utils/ButtonCustomized"
import {  toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from "yup"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(5),
    },
    '& .MuiInputBase-input': {
      borderRadius: 8,
      position: 'relative',
      backgroundColor: '#fcfcfb' ,
      border: "none",
      outline:"none",
      fontSize: 16,
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  
 
  const listlink = [
      {
          name:"Art",
          link:"Art",
      },
      {
          name:"Psychology",
          link:"page3",
      },
      {
          name:"Business",
          link:"smallpage",
      },
      {
          name:"Art Adult",
          link:"artsAdults",
      },
      {
        name:"Business Adults",
        link:"page4",
    },
  ] 

const Footer = ()=>{
  const navigate = useNavigate()
    const validationSchema = Yup.object({
        name:Yup.string().required("name is required"),
        email:Yup.string().email("invalid email address").required("email is required"),
        message:Yup.string().required("message is required")
    })
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          message: '',
        },
        validationSchema,
        onSubmit: async (values ) => {

        
        axios({
          method: 'post',
          data: {
            Name: values.name,
            Email: values.email,
            Message: values.message,
          },
          url: `http://testy.frahosh.com/api/const/postmessage`
        })
        .then(response => {
          console.log(response)
          if(response.status===201){
            toast.success("Your Message was sent successfuly",{theme:"colored"})
          }
        })
        .catch(error => {
          console.log('ERROR', error)
          toast.error("Your Message was not sent ",{theme:"colored"})
        })
        },
      });
    return (
        <>
            <Grid container sx={{width:1,marginTop:{xs:"50px",lg:"80px"} , background:`linear-gradient(to right , rgba(2, 151, 157,1) ,rgba(0, 137, 142,1))` ,zIndex:"1", boxSizing:'border-box' ,px:{xs:0,md:2,lg:5},position:"relative" }}>
                <Box sx={{position:"absolute",width:"100%",height:"100%",top:"0px",left:"0px",zIndex:"10",backgroundImage:`url(${require("../../../assests/image/Vector.png")})`,backgroundRepeat:"no-repeat",opacity:"0.1"}}></Box>
                <Grid xs={12} md={7} sx={{zIndex:"20"}} >
                    <Grid container sx={{width:1 ,justifyContent:"space-between"  , px:4 }}>
                        <Grid xs={12} md={6} sx={{pt:5}}>
                        <Box sx={{width:{lg:"315px",xs:"90%"} , textAlign:{xs:"center",md:"left"}, margin:"0px auto", lineHeight:"40px",wordSpacing:1.5 }}>
                            <Typography variant="h4" sx={{ color:"white" , pb:2 , fontSize:"Gilroy-Black" , fontSize:"30px" }}>Mental Lands</Typography>
                            <Typography variant="p" sx={{ color:"white" , width:"315px" , fontSize:"18px" , fontFamily:"Gilroy-Regular" , lineHeight:"40sp"}}>
                            Lorem ipsum dolor sit amet consectetur. Eu in purus vulputate consectetur venenatis aliquam. Dolor in quis viverra aenean amet. Neque purus lorem nam ipsum. Cras tellus blandit molestie velit semper ut ut cras ac. Dignissim vitae suscipit augue.        
                            </Typography>    
                        </Box>                        
                            <Box sx={{mt:"140px",textAlign:{xs:"center",md:"left"}}}>
                                 <SocialIcons/>
                            </Box>
                        </Grid>
                       
                        <Grid xs={12} md={6} sx={{pt:5}}>
                            <Typography variant="h5" sx={{color:"white", textAlign:"left" , mb:2}}>Write Us</Typography>
                           <Box
                                component="form"
                                noValidate
                                onSubmit={formik.handleSubmit}
                                sx={{
                                    gridTemplateColumns: { sm: '1fr 1fr' },
                                    gap: 2,
                                    display:"flex",
                                    flexDirection:"column",
                                    width:1,
                                    alignSelf:"stretch"
                                }}
                            >

                               <FormControl variant="standard" error={formik.touched.name && Boolean(formik.errors.name)}>
                                    <InputLabel shrink htmlFor="bootstrap-input" sx={{color:"white",fontSize:"18px" ,lineHeight:"40px" , fontFamily:"Gilroy-regular" }}>
                                        Name
                                    </InputLabel>
                                    <BootstrapInput onChange={formik.handleChange}
                                       value={formik.values.name} name="name"  fullWidth id="bootstrap-input1" />
                                {formik.touched.name && formik.errors.name && (<FormHelperText>{formik.errors.name}</FormHelperText>)}
                               </FormControl>
                               <FormControl variant="standard" error={formik.touched.email && Boolean(formik.errors.email)}>
                                    <InputLabel  shrink htmlFor="bootstrap-input" sx={{color:"white",fontSize:"18px" ,lineHeight:"40px" , fontFamily:"Gilroy-regular"}}>
                                        Email
                                    </InputLabel>
                                    <BootstrapInput onChange={formik.handleChange}
                                         value={formik.values.email} name="email"  id="bootstrap-input2" />
                                    {formik.touched.email && formik.errors.email && (<FormHelperText>{formik.errors.email}</FormHelperText>)}
                               </FormControl>
                               <FormControl error={formik.touched.message && Boolean(formik.errors.message)}>
                                    <InputLabel  shrink htmlFor="bootstrap-input" sx={{color:"white",fontSize:"18px" ,lineHeight:"40px" , fontFamily:"Gilroy-regular"}}>
                                        Message
                                    </InputLabel>
                                    <BootstrapInput onChange={formik.handleChange}
                                          value={formik.values.message} name="message"  fullWidth multiline rows={7}  id="bootstrap-input3"/>
                                    {formik.touched.message && formik.errors.message && (<FormHelperText>{formik.errors.message}</FormHelperText>)}   
                            </FormControl>
                               <ButtonCustomised  type="submit" sx={{background:"white" , width:"220px" , height:"50px" ,mt:3}}>Send Message</ButtonCustomised>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} md={5} >
                    
                        <Grid container sx={{width:1 ,justifyContent:"space-between" ,px:8 ,pt:5}}>
                        <Grid xs={6} >
                        <Typography variant="h5" sx={{textAlign:{lg:"left",xs:"center"} , color:"white" , pb:2}}>item title</Typography>
                        <List
                                sx={{
                                    width: '100%',
                                    position: 'relative',
                                    overflow: 'auto',
                                  
                                }}
                              
                                >
                                {listlink.map((sectionId) => (
                                  
                                    
                                            
                                            <ListItem key={sectionId.name} sx={{mb:5 , color:"#fff",cursor:"pointer" ,"&:hover":{
                                                fontWeight:"bold"
                                            }}} onClick={()=>navigate(sectionId.link)}>
                                                <ListItemButton sx={{ textAlign:{lg:"left",xs:"center"}}}>
                                                   <ListItemText primary={<Typography variant="p">{sectionId.name}</Typography>} />
                                                </ListItemButton>
                                            </ListItem>
                                    
                                   
                                ))}
                                </List>
                        </Grid>
                        <Grid xs={6}>
                        <Typography variant="h5" sx={{textAlign:{lg:"left",xs:"center"} , color:"#fff" , pb:2 }}>item title 2</Typography>

                        <List
                                sx={{
                                    width: '100%',
                                    position: 'relative',
                                    overflow: 'auto',
                                    
                                }}
                              
                                >
                                {["Home","Our Service","About","Contact us","Article" ].map((sectionId) => (
                                  
                                     
                                            
                                  <ListItem key={sectionId} sx={{mb:5 , color:"#fff" ,"&:hover":{
                                    fontWeight:"bold"
                                }}}>
                                    <ListItemButton sx={{ textAlign:{lg:"left",xs:"center"}}}> 
                                       <ListItemText primary={<Typography variant="p" >{sectionId}</Typography>} />
                                    </ListItemButton>
                                </ListItem>
                                      
                                   
                                ))}
                                </List>
                        </Grid>
                        </Grid>
                
                </Grid>
            </Grid>
        </>
    )
}
export default Footer;