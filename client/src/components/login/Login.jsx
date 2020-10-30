import React from "react";
import SignIn from "./SignInCard";
import {connect} from "react-redux";

function Login(props) {

    const renderContent = () => {
        switch(props.user){
          case null: // when not connected to server
            return ;
          case false: // when user is not logged in
            return (
                <div className="card text-center my-5 mx-auto container">
                    <SignIn text="Sign In with " btnColor="btn-outline-danger" sym="fab fa-google" auth="/auth/google"/>
                    <SignIn text="Sign In with " btnColor="btn-outline-primary" sym="fab fa-facebook" auth="/auth/facebook"/>
                </div>
            )
          
          default: // when user is logged in
            props.history.push('/user');
        }
    }
  
    return <div>{renderContent()}</div>

}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(Login);