import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Box sx={{ flexGrow: 1, backgroundColor: 'grey' }}>
      <AppBar position="fixed" className="header-main">
        <Toolbar>
          <Button color="inherit">My Logo</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
          <AccountCircleOutlinedIcon sx={{ mr: '8px'}} />
          <LogoutIcon />
        </Toolbar>
      </AppBar>
    </Box>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
