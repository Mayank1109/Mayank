import React from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
} from "@mui/material";

const Profile = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="dashboard section">
      <Container
        maxWidth="md"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Profile
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="firstName"
                  control={methods.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      style={{ borderRadius: "10px" }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="lastName"
                  control={methods.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      style={{ borderRadius: "10px" }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="age"
                  control={methods.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Age"
                      variant="outlined"
                      type="number"
                      fullWidth
                      style={{ borderRadius: "10px" }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="gender"
                  control={methods.control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label="Gender"
                      variant="outlined"
                      fullWidth
                      style={{ borderRadius: "10px" }}
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="dateOfBirth"
                  control={methods.control}
                  defaultValue={null}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Date of Birth"
                      type="date"
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      style={{ borderRadius: "10px" }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="status"
                  control={methods.control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormControl
                      component="fieldset"
                      style={{ borderRadius: "10px" }}
                    >
                      <RadioGroup
                        row
                        aria-label="status"
                        name="status"
                        {...field}
                      >
                        <FormControlLabel
                          value="single"
                          control={<Radio />}
                          label="Single"
                        />
                        <FormControlLabel
                          value="married"
                          control={<Radio />}
                          label="Married"
                        />
                      </RadioGroup>
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="interests"
                  control={methods.control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <>
                      <FormControl
                        component="fieldset"
                        style={{ borderRadius: "10px" }}
                      >
                        <Typography variant="subtitle1" gutterBottom>
                          Interests
                        </Typography>
                        <FormControlLabel
                          control={
                            <Checkbox
                              {...field}
                              value="music"
                              color="primary"
                            />
                          }
                          label="Music"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              {...field}
                              value="sports"
                              color="primary"
                            />
                          }
                          label="Sports"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              {...field}
                              value="books"
                              color="primary"
                            />
                          }
                          label="Books"
                        />
                      </FormControl>
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ borderRadius: "10px" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Container>
    </section>
  );
};

export default Profile;
