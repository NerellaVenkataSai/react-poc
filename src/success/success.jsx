import React from "react";
import { Grid, Typography, Stack, Button, Box } from "@mui/material";
import { useHistory } from "react-router-dom";
import {CUSTOMER_REGISTRATION} from  '../routes'

const SuccessMessage = ({ firstName = "", mobileNumber = "" }) => {
  const history = useHistory()  
  return (
    <Grid container direction={"row"} justifyContent="center">
      <Grid item sm={4}>
        <Typography variant="h6" component="h6">
          Customer Registered Successfully
        </Typography>
        <Box margin={1}>
            <span>First Name</span> {firstName}
        </Box>
        <Box margin={1}>
            <span>Mobile Number</span> {mobileNumber}
        </Box>
        <Stack direction={"column"} spacing={1} className="buttons" mt={3}>
              <Button
                className="button-primary"
                variant="contained"
                style={{width: '100%'}}
                // onClick={() => onSearch()}
              >
                Go to Profile
              </Button>
              <Button
                className="button-secondary"
                variant="outlined"
                fullWidth
                style={{width: '100%'}}
                onClick={() => history.push(CUSTOMER_REGISTRATION)}
              >
                Add another Customer
              </Button>
            </Stack>
      </Grid>
    </Grid>
  );
};

export default SuccessMessage;
