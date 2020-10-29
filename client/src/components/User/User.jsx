import React,{useEffect, useState} from "react";
import CreateArea from "./noteInput/CreateArea";
import Notes from "./notes/Notes";
import {connect} from "react-redux";

function User(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if(props.user) {
            setIsLoggedIn(true);
        }
    },[]); 

    switch(isLoggedIn) {
        case true: return (<div><CreateArea /><Notes /></div> );

        case false: props.history.push('/');

        default: return null;
    } 
    
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(User);