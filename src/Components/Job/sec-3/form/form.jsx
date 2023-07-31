import React from "react";
import { Field, FieldArray, Formik } from 'formik';
import { Grid, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Yup from 'yup';
import "./form.style.css"

const Basic = () => {
  const [value, setValue] = React.useState(dayjs(''));
  return(
  <div>
    
  <Typography sx={{fontFamily:'Alice',fontSize:{lg:"40px",xs:"28px"}, marginBottom:{md:"0px" , xs:"20px"} ,textAlign:"left"}}> Become One of Us</Typography>
  <Typography sx={{fontFamily:'Gilroy-Medium',fontSize:{lg:"19px",xs:"12px"},lineHeight:{md:"40px"}, width:{md:"1239px"} , height:{md:"240px"}, marginLeft:{md:"30px"}, marginBottom:{md:"18px" , xs:"20px"} ,textAlign:"left"}}>Lorem ipsum dolor sit amet consectetur. Viverra pellentesque volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut vitae felis convallis. Egestas enim diam ac nisi orci id tellus lobortis. Lacus in etiam rhoncus.</Typography>
    <Formik
      initialValues={{Name:"" , lastName : "", sex: ["men" , "women"], country: ["iran" , "iraq"], city: ["qom" , "tehran" , "isfahan"], phoneNumber :"" , mobileNumber:"" , postalCard : "" ,   email: '', Address: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid sm={12} md={4}>
             <Stack direction={"column"}>
        <label className="input_title">Name</label>
        <Field className="input_field"
            type="text"
            name="Name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Stack>
          </Grid>
          <Grid sm={12} md={4}>
             <Stack>
        <label className="input_title">last Name</label>
            <Field className="input_field"
            type="text"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Stack>
          </Grid>
          <Grid sm={12} md={4}>
           <Stack>
        <label className="input_title">Date of birth</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container>
          <Grid md={3}> <DatePicker  className="input_date"
          views={['year']}
          label="Year"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        /></Grid>
          <Grid md={4}>
          <DatePicker   className="input_date"
          views={['month']}
          label="month"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
          </Grid>
          <Grid md={4}> <DatePicker   className="input_date"
          views={['day']}
          label="day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        /></Grid>
        </Grid>
        </LocalizationProvider>
        </Stack>
          </Grid>
        </Grid>
        <Grid container>
        <Grid sm={12} md={4}>
        <Stack>
        <label className="input_title">Sex</label>
          <select  className="input_field" name="sex" value={values.sex}  onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: 'block' }}>
            <option value="" label="">
            </option>
            <option value="man" label="man">
              man
              </option>
              <option value="women" label="women">
              women
              </option>
          </select>
        </Stack>
        </Grid>
          <Grid sm={12} md={4}>
            <Stack>
              <label className="input_title">Phone number</label>
              <Field  className="input_field" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  name="phoneNumber"
            onChange={handleChange}
            onBlur={handleBlur} />
            </Stack>
          </Grid>
          <Grid sm={12} md={4}>
            <Stack>
              <label className="input_title">Mobile number</label>
              <Field  className="input_field" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  name="mobileNumber"
            onChange={handleChange}
            onBlur={handleBlur} />
            </Stack>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sm={12} sm={4}>
             <Stack>
        <label className="input_title">Email address</label>
          <Field  className="input_field"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
        </Stack>
        </Grid>
          <Grid sm={12} md={4}>
          <Stack>
        <label className="input_title">Country</label>
          <select  className="input_field" name="country" value={values.country}  onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: 'block' }}>
            <option value="" label="">
            </option>
            <option value="iran" label="iran">
              Iran
              </option>
              <option value="iraq" label="iraq">
              Iraq
              </option>
          </select>
        </Stack>
        </Grid>
        <Grid sm={12} md={4}>
        <Stack>
        <label className="input_title"> City</label>
          <select  className="input_field" name="city" value={values.city}  onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: 'block' }}>
            <option value="" label="">
            </option>
            <option value="qom" label="Qom">
              qom
              </option>
              <option value="tehran" label="Tehran">
              tehran
              </option>
              <option value="isfahan" label="Isfahan">
              isfahan
              </option>
          </select>
        </Stack>
        </Grid>
        </Grid>
        <Grid container>
        <Grid sm={12} md={4}>
        <Stack>
        <label className="input_title">Address</label>
        <Field as="textarea" name="Address" value={values.Address} />
        </Stack>
        </Grid>
        <Grid>
        <Stack>
        <label className="input_title">Postal code</label>
          <Field  className="input_field" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={values.postalCard}  />
        </Stack>
        </Grid>
        </Grid>
          <button className="sub_btn" type="submit" disabled={isSubmitting}>
            Send
          </button>
          <button className="reset_btn" type="reset" disabled={isSubmitting}>
            Cancel
          </button>
        </form>
      )}
    </Formik>
  </div>
)
        };

export default Basic;