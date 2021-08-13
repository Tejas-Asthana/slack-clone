import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Chat from "./components/Chat.js";
import Login from "./pages/Login.js";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";

import "./App.css";

function App(props) {
  return (
    <Provider store={store}>
      <div className="app">
        <PersistGate persistor={persistor}>
          {!props.isAuthenticated ? (
            <Login />
          ) : (
            <>
              {/* header */}
              <Header user={props.user} />
              <div className="app-body">
                <Sidebar user={props.user} />

                {/* Switch will check the url and show us the route which matches the path */}
                <Switch>
                  <Route path="/room/:roomId">
                    <Chat user={props.user} />
                  </Route>
                  <Route path="/">
                    <h1>WELCOME</h1>
                  </Route>
                </Switch>
              </div>
              {/* sidebar */}
            </>
          )}
        </PersistGate>
      </div>
    </Provider>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state?.authReducer?.isAuthenticated,
  user: state?.authReducer?.user,
  error: state?.authReducer?.error,
});

export default withRouter(connect(mapStateToProps)(App));
