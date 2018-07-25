import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import NavBar from "./components/navBar";
import Movies from "./components/movies";
import Movie from "./components/movie";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <div className="content">
            <Switch>
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/movies/:id" component={Movie} />
              <Route path="/movies/new" component={Movie} />
              <Route path="/movies" component={Movies} />
              <Route path="/customers" component={Customers} />
              <Route path="/rentals" component={Rentals} />
              <Redirect from="/" to="/movies" exact />
              <Route component={NotFound} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
