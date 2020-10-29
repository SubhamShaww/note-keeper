import React from "react";

function SignIn(props) {
    return (
        <div className={props.btnColor} role="button" >
            <a className="card-body btn btn-block btn-social signIn-button" href={props.auth}>
                {props.text}
                <i className={props.sym}></i>
            </a>
        </div>
            
    );
}

export default SignIn;