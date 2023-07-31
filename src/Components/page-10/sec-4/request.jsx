import React, { useState } from 'react';
import { TextField, Button, Grid,Box,Typography , FormControl , InputLabel , Select , MenuItem , FormHelperText } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CardCom from "../card-pattern.jsx/cardCom";
import Buttons from "../../buttons/button.component";
import axios from "axios"
import {toast} from "react-toastify"


const validationSchema = yup.object({
  title: yup.string().required('title is required'),
  company: yup.string().required('company is required'),
  date: yup.string().required('date is required'),
  remote: yup.string(),
  jobTime: yup.string().required('job title is required'),
  salary: yup.number().required('salary is required'),
  description: yup.string().required('description is required'),
});



const JobForm = () => {


  const [description , setJobs]=useState([])

  const formik = useFormik({
    initialValues: {
      title: '',
      company: '',
      date: '',
      remote: '',
      jobTime: '',
      salary: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
        console.log(values)
        alert(values)
        try{
            const response = await axios.get(
              "http://testy.frahosh.com/api/const/getjobs",
              {
                params:{
                  title:values.title,
                  company:values.company,
                  remote:values.remote,
                  date:values.date,
                  jobtime:values.jobtime,
                  salary:values.salary,
                  description:values.description,

                }
              }
            ).then((res)=>{
              console.log(res)
              if(res.status===200){
                setJobs(res.data)
                toast.success("Your request was sent successfully",{theme:"colored"})
                resetForm()
              }
            })
        }catch(err){
      
            console.log(err)
            toast.error("Your request was not sent",{theme:"colored"})

        }
    },
  });

  return (
    <div>
      <h2>THE LATEST JOB OPPORTUNITIES</h2>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} sx={{mb:5}}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="title"
              variant="outlined"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="company"
              name="company"
              label="Company"
              variant="outlined"
              value={formik.values.company}
              onChange={formik.handleChange}
              error={formik.touched.company && Boolean(formik.errors.company)}
              helperText={formik.touched.company && formik.errors.company}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="date"
              label="Date"
              variant="outlined"
              fullWidth
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="remote-select-label">Remote</InputLabel>
              <Select
                labelId="remote-select-label"
                id="remote"
                name="remote"
                value={formik.values.remote}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.remote && Boolean(formik.errors.remote)}
                label="Remote"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
              {formik.touched.remote && formik.errors.remote && (
                <FormHelperText error>{formik.errors.remote}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="jobtime"
              label="Job Time"
              variant="outlined"
              fullWidth
              value={formik.values.jobtime}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.jobtime && Boolean(formik.errors.jobtime)}
              helperText={formik.touched.jobtime && formik.errors.jobtime}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="salary"
              label="Salary"
              variant="outlined"
              fullWidth
              value={formik.values.salary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.salary && Boolean(formik.errors.salary)}
              helperText={formik.touched.salary && formik.errors.salary}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              fullWidth
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
          </Grid>
          <Grid item xs={12}>
          <Button type="submit" variant="contained" ><Typography sx={{fontFamily:"Gilroy-Bold" , fontSize:"16px"}}>Send Request</Typography></Button>
          </Grid>
          
        </Grid>
         
    </form>

    <Box>
              <Grid container>
                    <CardCom />
                    <CardCom />
                    <CardCom />
                    <CardCom />
                    <CardCom />
                    <CardCom />
                    <Buttons style={{margin:"20px auto 0px"}}><Typography sx={{fontFamily:"Gilroy-Bold" , fontSize:"16px"}}>See all</Typography></Buttons>
                </Grid>
    </Box>
</div>)
}
export default JobForm;