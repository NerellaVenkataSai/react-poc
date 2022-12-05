import React, { useState } from "react";
import {
  Grid,
  Stack,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import "./styles.css";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useHistory } from "react-router-dom";

function NewCustomerRegistration() {
  const history = useHistory();
  return (
    <Box margin={5}>
      <Typography variant="h4" component="h4">
        Customer Registration
      </Typography>
      <Box mt={3}>
        <Typography variant="h5" component="h4" marginBottom={3}>
          Personal Information
        </Typography>
        <Grid
          container
          direction={"row"}
          spacing={3}
          alignItems="center"
          justifyContent={"flex-start"}
          className="personal-information"
        >
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              className="field"
              label="First Name"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              className="field"
              label="Middle Name"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              className="field"
              label="Last Name"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                label="Date of Birth"
                inputFormat="MM/DD/YYYY"
                value={null}
                onChange={() => console.log("")}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" fullWidth />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              className="field"
              label="Email"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack direction={"row"} spacing={1} className="age-mobile">
              <FormControl variant="standard" className="age">
                <InputLabel id="demo-simple-select-standard-label">
                  Country Code
                </InputLabel>
                <Select>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <TextField
                required
                label="Mobile Number"
                variant="standard"
                className="mobile"
                fullWidth
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Typography variant="h5" component="h4" marginBottom={3}>
          Address Information
        </Typography>
        <Grid
          container
          direction={"row"}
          spacing={3}
          alignItems="center"
          justifyContent={"flex-start"}
          className="personal-information"
        >
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              label="Street Address"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Street Address 2(Optional)"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="City/Town" variant="standard" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="State/Provinence" variant="standard" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="Postal Code" variant="standard" fullWidth />
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Typography variant="h5" component="h4" marginBottom={3}>
          Marketing & Communication Preferences
        </Typography>
        <Grid
          container
          direction={"row"}
          spacing={3}
          alignItems="center"
          justifyContent={"flex-start"}
        >
          <Grid item>
            <FormControlLabel
              label="SMS"
              control={
                <Checkbox
                  checked={true}
                  onChange={() => console.log("in check")}
                />
              }
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              label="Email"
              control={
                <Checkbox
                  checked={true}
                  onChange={() => console.log("in check")}
                />
              }
            />
          </Grid>
        </Grid>
      </Box>
      <Stack direction={"row"} spacing={1} marginTop={3} marginBottom={3} className="buttons">
          <Button
            className="button-primary"
            variant="contained"
            // onClick={() => onRegister()}
          >
            Register
          </Button>
          <Button
            className="button-secondary"
            variant="outlined"
            onClick={() => history.push("/")}
          >
            Cancel
          </Button>
        </Stack>
    </Box>
  );
}

export default NewCustomerRegistration;
