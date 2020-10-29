import React from "react";
import SignIn from "./SignInCard";

function Login() {
    return (
        <div className="card text-center my-5 mx-auto container">
            <SignIn text="Sign In with " btnColor="btn-outline-danger" sym="fab fa-google" auth="/auth/google"/>
            <SignIn text="Sign In with " btnColor="btn-outline-primary" sym="fab fa-facebook" auth="/auth/facebook"/>
        </div>
    );
}

export default Login;