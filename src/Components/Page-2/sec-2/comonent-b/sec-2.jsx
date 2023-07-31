import {Box,FormControl, FormHelperText,InputLabel,MenuItem ,Select }from "@mui/material"
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {  toast } from 'react-toastify';
import { useFormik } from 'formik';
import axios from "axios"
import * as Yup from "yup"
import {styled} from "@mui/material/styles"
import { useTheme } from '@mui/material/styles';
import  "./style.css"
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const Sec2= () => {


  const theme = useTheme();
  const items = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  const InputNumber = styled(TextField)(() => ({
    '& fieldset': {
      borderRadius: '17px',
      borderColor: '#02979D',
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: '#02979D',
      }
    }
  }));
  

  const validationSchema = Yup.object({
    field:Yup.string().required("field is required"),
    Psychologist:Yup.string().required("Psychologist is required"),
    Phone_number:Yup.string().required("phone number is required"),

})

const formik = useFormik({
    initialValues: {
      field: '',
      Psychologist: '',
      Phone_number: '',
    },
    validationSchema,
    onSubmit: async (values , {setSubmitting}) => {
      setTimeout(()=>{
      
        axios({
          method: 'post',
          headers:{"Accept": "*/*"},
          data: {
            field: values.field,
            psychologist: values.Psychologist,
            Phone_number: values.Phone_number,
            _token :"{{csrf_token()}}"
          },
          url: `http://testy.frahosh.com/api/const/appoint`
        })
        .then(response => {
          console.log(response)
          if(response.status===200){
            toast.success("Your consultation request has been successfully registered",{theme:"colored"})
          }
        })
        .catch(error => {
          console.log('ERROR', error)
          toast.error("Request submission was not successful",{theme:"colored"})
        })
        // setSubmitting(false)
      },400)

    },
  });

  return (
    
      <Box sx={{position:"relative" , bottom:"0px",left:"0px",right:"0px",width:"100%",height:"0.05px" }} >
          <Box component="form" autoComplete="off" onSubmit={formik.handleSubmit} sx={{width:"100%",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",background:"white",boxShadow:" rgba(2, 151, 157, 0.2) 0px 18px 50px -10px",zIndex:"999" ,margin:"0px auto",height:"auto",display:"flex",alignItems:"center",justifyContent:"space-around" , border:"1px solid #02979D",width:{lg:"80%",xs:"95%",sm:"90%",md:"85%",xl:"80%"},maxWidth:"1800px",borderRadius:"20px" ,p:"45px 40px"}}>
            <Grid container sx={{display:{xs:"block" , lg:"flex"},alignItems:"center",justifyContent:"space-around"}}>
               <Grid xs={12} lg={3}>
                
               <FormControl sx={{ m: 1, width: {sm:"200px",xs:"200px"}, borderRadius:"40px"}} error={formik.touched.field && Boolean(formik.errors.field)}>
                    <InputLabel id="fieldlabel">Select Field</InputLabel>
                    <Select
                    labelStyle={{ color: '#ff0000' }}
                    
                    sx={{color: "#818181",
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: '#02979D',
                      borderRadius:"17px"
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#02979D',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00888D',
                    },
                    '.MuiSvgIcon-root ': {
                      fill: "#818181 !important",
                    },
                    width:{sx:"100px"}
                  }}
                      labelId="fieldlabel"
                      id="field"
                      name="field"
                      value={formik.values.field}
                      onChange={formik.handleChange}
                      MenuProps={MenuProps}

                    >
                      {items.map((item,index) => (
                        <MenuItem
                          key={index}
                          value={item}
                          sx={{zIndex:"999"}}
                        >
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                    {Boolean(formik.touched.field && formik.errors.field) ? <FormHelperText>{formik.errors.field}</FormHelperText>:null}
                  </FormControl>
                          
                          </Grid>
                          <Grid xs={12} lg={3}>
                            
                          <FormControl sx={{ m: 1, width: {sm:"200px",xs:"200px"}, borderRadius:"40px"}} error={formik.touched.Psychologist && Boolean(formik.errors.Psychologist)}>
                    <InputLabel id="Psychologistlabel">Select Psychologist</InputLabel>
                    <Select
                    labelStyle={{ color: '#ff0000' }}
                    
                    sx={{color: "#818181",
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: '#02979D',
                      borderRadius:"17px"
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#02979D',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00888D',
                    },
                    '.MuiSvgIcon-root ': {
                      fill: "#818181 !important",
                    },
                    width:{sx:"100px"}
                  }}
                      labelId="Psychologistlabel"
                      id="Psychologist"
                      name="Psychologist"
                      value={formik.values.Psychologist}
                      onChange={formik.handleChange}
                      MenuProps={MenuProps}

                    >
                      {items.map((item , index) => (
                        <MenuItem
                          key={index}
                          value={item}
                          sx={{zIndex:"999"}}
                        >
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                    {Boolean(formik.touched.Psychologist && formik.errors.Psychologist) ? <FormHelperText>{formik.errors.Psychologist}</FormHelperText>:null}
                  </FormControl>
                          
               </Grid>
               <Grid xs={12} lg={3} sx={{textAlign:"center"}}>
                <input
                  id="Phone_number"
                  name="Phone_number"
                  label="Phone Number"
                  value={formik.values?.Phone_number}
                  onChange={formik.handleChange}
                  className={`Phone ${(formik.touched.Phone_number &&  formik.errors.Phone_number)?"inputerror":""}`}
                />
                <div className={(formik.touched.Phone_number && Boolean( formik.errors.Phone_number))?"phoneerrors":""}>{ formik.errors.Phone_number}</div>
                </Grid>
                <Grid xs={12} lg={3} sx={{paddingX:2,textAlign:'center',my:{xs:1 ,lg:0}}}>
                   <Button type="submit" sx={{padding:{md:"6px 20px",xs:"15px 20px"},"&.MuiButtonBase-root:active":{border:"none",outline:"none"},borderRadius:"16px",outline:"none","&:hover":{color:"#02979D"},"&:focus":{border:"none",outline:"none"}, background:"#02979D",color:"white",fontFamily:"Gilroy-Bold",fontSize:{lg:"14px",xs:"12px"}}}>Request Appointment</Button>  
                </Grid>            
            </Grid>    
          </Box>
       </Box>

  );
};

export default Sec2;
