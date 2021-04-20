import "./styling/app.scss";
import "./styling/responsive.scss";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// components
import ChatApp from "./app/chatApp";
import Chat from "./layout/chat";
import LandingPage from "./layout/langing-page";
import Register from "./layout/register";
import Login from "./layout/login";
import Alerts from "./layout/Alerts";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

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
              <div className="container">
                <Switch>
                  <Route exact path="/admin" component={ChatApp} />
                  <PrivateRoute exact path="/chat" component={Chat} />
                  <Route exact path="/" component={LandingPage} />

                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
