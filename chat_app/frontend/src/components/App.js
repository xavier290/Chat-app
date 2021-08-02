import "./styling/main.scss";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import React, { Component, Fragment, Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// components
import Spinner from "react-bootstrap/Spinner";

// pages
import Home from "./layout/home";
import Chat from "./layout/chat";
import LandingPage from "./layout/landing-page";

import Alerts from "./layout/Alerts";

import PrivateRoute from "./common/PrivateRoute";

import routes from "./routes";
import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";
import Groups from "./layout/Chat/groups";

const alertOptions = {
  timeout: 6000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Alerts />
              <div className="container-app">
                <Suspense
                  fallback={
                    <div className="loader">
                      <Spinner animation="border" role="status">
                        <span className="sr-only"></span>
                      </Spinner>
                    </div>
                  }
                >
                  <Switch>
                    {routes.map((route) => (
                      <Route
                        path={route.path}
                        component={route.component}
                        key={route.path}
                      />
                    ))}

                    <PrivateRoute exact path="/chat" component={Chat} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/groups" component={Groups} />
                    <Route exact path="/" component={LandingPage} />
                  </Switch>
                </Suspense>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
