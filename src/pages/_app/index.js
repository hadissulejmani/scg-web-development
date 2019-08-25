import React from "react";
import Navbar from "./../../components/Navbar";
import HomePage from "./../home";
import { Switch, Route, Router } from "./../../util/router.js";
import Footer from "./../../components/Footer";
import { ProvideAuth } from "./../../util/auth.js";
import logo from '../../assets/logo.png'
import "./styles.scss";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <Navbar
            color="white"
            spaced={true}
            logo={logo}
          />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>

          <Footer
            color="light"
            size="normal"
            logo={logo}
            copyright="© 2019 Skopje Consulting Group"
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
