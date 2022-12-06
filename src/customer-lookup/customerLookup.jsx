import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Stack,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CUSTOMER_REGISTRATION } from "../routes";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "./styles.css";
import { useHistory } from "react-router-dom";

function createData(name, address, phone) {
  return { name, address, phone };
}

const rows = [
  createData("Rajesh", "12-34,colony,3434", 123456789),
  createData("Rajesh", "12-34,colony,3434", 123456789),
  createData("Rajesh", "12-34,colony,3434", 123456789),
];

function CustomerLookup() {
  const history = useHistory();
  const [results, setResults] = useState([]);

  const onSearch = () => {
    console.log("on search");
    setResults(rows);
  };

  console.log("in customer lookup");
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"flex-start"}
      spacing={3}
      margin={1}
      className="lookup-content"
    >
      <Grid item md={4} sm={10}>
        <Card className="search-card">
          <CardContent>
            <Typography variant="h6" component="h6">
              Customer Lookup
            </Typography>
            <Grid container direction={"row"} spacing={1}>
              <Grid item sm={4}>
                <FormControl variant="standard" className="age" fullWidth>
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
              </Grid>
              <Grid item sm={8}>
                <TextField
                  required
                  label="Mobile Number"
                  variant="standard"
                  className="mobile"
                  fullWidth
                />
              </Grid>
            </Grid>
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
            <Stack direction={"column"} spacing={1} className="buttons" mt={3}>
              <Button
                className="button-primary"
                variant="contained"
                onClick={() => onSearch()}
              >
                Search
              </Button>
              <Button
                className="button-secondary"
                variant="outlined"
                fullWidth
                onClick={() => history.push("/")}
              >
                Back
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={7} sm={10}>
        <Card className="result-card">
          <CardContent>
            <Typography variant="h6" component="h6" mb={2}>
              Results
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Edit Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {results.map((row) => (
                    <TableRow
                      key={row.name}
                      //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.address}</TableCell>
                      <TableCell>{row.phone}</TableCell>
                      <TableCell
                        onClick={() => history.push(CUSTOMER_REGISTRATION)}
                      >
                        Edit
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CustomerLookup;
