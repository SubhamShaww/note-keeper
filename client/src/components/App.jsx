import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./login/Login";
import User from "./User/User";
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
import {fetchUserAction} from "../actions/myAction";

function App(props) {
  useEffect(() => {
    props.fetchUser();
  },[]);

  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Login} />
      <Route path="/user" component={User} />
      <Footer />
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => { dispatch(fetchUserAction()) }
  }
}

export default connect(null, mapDispatchToProps)(App);
