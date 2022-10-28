import React, { Suspense } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { useLocation } from "react-router";
import HomePage from "./homePage";
import "./App.css";
import { HOME_PAGE, CUSTOMER_LOOKUP, CUSTOMER_REGISTRATION } from "./routes";
import CustomerLookup from "./customerLookup";
import CustomerRegistration from "./customer-registration";

const routes = {
  Home: HOME_PAGE,
  customerLookup: CUSTOMER_LOOKUP,
  customerRegistration: CUSTOMER_REGISTRATION
}
function App() {
  const { pathname } = useLocation();
  console.log("inapp---", pathname);
  const routesObj = {
    [HOME_PAGE]: ["Home"],
    [CUSTOMER_LOOKUP]: ["Home", "customerLookup"],
    [CUSTOMER_REGISTRATION]: ["Home", "customerRegistration"],
  };
  return (
    <div className="App">
      <div className="container navigation">
        <div className="row">
          {routesObj[pathname].map((route) => (
            <>
              <div className="col-auto nav-route">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
              <div className="col-auto nav-route"><Link to={routes[route]}>{route}</Link></div>
            </>
          ))}
        </div>
      </div>
      <Suspense fallback={<p className="text-center">loading...</p>}></Suspense>
      <Switch>
        <Route path={HOME_PAGE} component={HomePage} />
        <Route path={CUSTOMER_LOOKUP} component={CustomerLookup} />
        <Route path={CUSTOMER_REGISTRATION} component={CustomerRegistration} />

        {/* Redirect to homepage when route is unknown */}
        {/* <Route><HomePage /></Route> */}
      </Switch>
    </div>
  );
}

export default App;
