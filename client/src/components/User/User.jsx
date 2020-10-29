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

    
    return isLoggedIn ? (<div><CreateArea /><Notes /></div> ) : props.history.push('/');  
    
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(User);