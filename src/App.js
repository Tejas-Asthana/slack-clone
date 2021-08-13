import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Chat from "./components/Chat.js";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        {/* header */}
        <Header />
        <div className="app-body">
          <Sidebar />

          {/* Switch will check the url and show us the route which matches the path */}
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>WELCOME</h1>
            </Route>
          </Switch>
        </div>
        {/* sidebar */}
      </Router>
    </div>
  );
}

export default App;
