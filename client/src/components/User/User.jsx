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
    },[isLoggedIn]);

    const getNotes = () => {
        if(isLoggedIn) {
            return (
                <div>
                    <CreateArea />
                    <Notes />
                </div>
            );
        } else {
            return <div></div>;
        }
    } 
    
    return <div>{getNotes}</div>
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(User);