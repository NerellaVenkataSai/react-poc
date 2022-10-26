import React, { Suspense } from 'react';
import logo from './logo.svg';
import { Route, Router, Switch } from 'react-router-dom';
import {useLocation} from 'react-router';
import HomePage from './homePage';
import './App.css';
import { HOME_PAGE, CUSTOMER_LOOKUP, CUSTOMER_REGISTRATION } from './routes';
// import { createBrowserHistory } from "history";
import CustomerLookup from './customerLookup';
import CustomerRegistration from './customerRegistration';

// const customHistory = createBrowserHistory();

function App() {
  const {pathname} = useLocation();

  console.log('inapp---',pathname)
  const routesObj = {
    [HOME_PAGE]: ['Home'],
    [CUSTOMER_LOOKUP]: ['Home', 'customerLookup'],
    [CUSTOMER_REGISTRATION]: ['Home', 'customerRegistration']
  }
  return (
    <div className="App">
      <Suspense fallback={<p className="text-center">loading...</p>}></Suspense>
      {/* <Router> */}
        <Switch>
          <Route  path={HOME_PAGE} component={HomePage} />
          <Route  path={CUSTOMER_LOOKUP} component={CustomerLookup} />
          <Route  path={CUSTOMER_REGISTRATION} component={CustomerRegistration} />
          
          {/* Redirect to homepage when route is unknown */}
          {/* <Route><HomePage /></Route> */}
        </Switch>
      {/* </Router> */}
    </div>
  );
}

export default App;
