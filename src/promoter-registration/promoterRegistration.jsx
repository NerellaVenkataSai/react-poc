import React, { useState } from "react";
import {
  Grid,
  Stack,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
  Typography,
} from "@mui/material";
import "./styles.css";
import { useHistory } from "react-router-dom";

const rObj = {
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "",
  mobileNumber: "",
};

function PromoterRegistration() {
  const history = useHistory();
  // const [registerState, setRegisterState] = useState(true)
  const [registerObj, setRegisterObj] = useState(rObj);
  const helperText = "Please fill this field";

  const onRegister = () => {
    console.log(registerObj);
    let isRegister = true;
    for (const key in registerObj) {
      const val = registerObj[key];
      console.log("val---", val);
      if (val === "error" || !val) {
        isRegister = false;
        break;
      }
    }

    if (isRegister) {
      console.log("do api here----");
    }
  };

  const onChangeHandler = (e, fieldName) => {
    const value = e.target.value;
    console.log("value----", value);
    setRegisterObj({ ...registerObj, [fieldName]: value });
  };

  const onBlurHandler = (e, fieldName) => {
    const value =
      typeof e.target.value === "string"
        ? e.target.value.trim()
        : e.target.value;
    console.log("blur----", !value);

    if (!value) setRegisterObj({ ...registerObj, [fieldName]: "error" });
    else setRegisterObj({ ...registerObj, [fieldName]: value });
    // setFirstName(value);
  };

  return (
    <Grid
      container
      direction={"row"}
      spacing={1}
      alignItems="center"
      justifyContent={"center"}
      className="registration-content"
    >
      
      <Grid item sm={12} md={4} lg={4} className="container">
        <Typography variant="h6" component="h6">
          Marketing Promoter Registration
        </Typography>
        <TextField
          required
          className="field"
          label="First Name"
          variant="standard"
          fullWidth
          value={
            registerObj["firstName"] !== "error" ? registerObj["firstName"] : ""
          }
          error={registerObj["firstName"] === "error"}
          helperText={registerObj["firstName"] === "error" ? helperText : ""}
          onChange={(e) => onChangeHandler(e, "firstName")}
          onBlur={(e) => onBlurHandler(e, "firstName")}
        />
        <TextField
          required
          className="field"
          label="Last Name"
          variant="standard"
          fullWidth
          value={
            registerObj["lastName"] !== "error" ? registerObj["lastName"] : ""
          }
          error={registerObj["lastName"] === "error"}
          helperText={registerObj["lastName"] === "error" ? helperText : ""}
          onChange={(e) => onChangeHandler(e, "lastName")}
          onBlur={(e) => onBlurHandler(e, "lastName")}
        />
        <TextField
          required
          className="field"
          label="Email"
          variant="standard"
          fullWidth
          value={registerObj["email"] !== "error" ? registerObj["email"] : ""}
          error={registerObj["email"] === "error"}
          helperText={registerObj["email"] === "error" ? helperText : ""}
          onChange={(e) => onChangeHandler(e, "email")}
          onBlur={(e) => onBlurHandler(e, "email")}
        />
        <Stack direction={"row"} spacing={1} className="age-mobile">
          <FormControl variant="standard" className="age">
            <InputLabel id="demo-simple-select-standard-label">
              Country Code
            </InputLabel>
            <Select
              value={
                registerObj["countryCode"] !== "error"
                  ? registerObj["countryCode"]
                  : ""
              }
              error={registerObj["countryCode"] === "error"}
              onChange={(e) => onChangeHandler(e, "countryCode")}
              onBlur={(e) => onBlurHandler(e, "countryCode")}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            {registerObj["countryCode"] === "error" ? (
              <FormHelperText className="select-error">
                {helperText}
              </FormHelperText>
            ) : (
              ""
            )}
          </FormControl>
          <TextField
            required
            label="Mobile Number"
            variant="standard"
            className="mobile"
            fullWidth
            value={
              registerObj["mobileNumber"] !== "error"
                ? registerObj["mobileNumber"]
                : ""
            }
            error={registerObj["mobileNumber"] === "error"}
            helperText={
              registerObj["mobileNumber"] === "error" ? helperText : ""
            }
            onChange={(e) => onChangeHandler(e, "mobileNumber")}
            onBlur={(e) => onBlurHandler(e, "mobileNumber")}
          />
        </Stack>
        <Stack direction={"column"} spacing={1} className="buttons">
          <Button
            className="button-primary"
            variant="contained"
            onClick={() => onRegister()}
          >
            Register
          </Button>
          <Button
            className="button-secondary"
            variant="outlined"
            onClick={() => history.push("/")}
          >
            Back
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default PromoterRegistration;
