import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.scss";
import Footer from "./components/Footer";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
