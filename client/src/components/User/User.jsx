import React from "react";
import CreateArea from "./noteInput/CreateArea";
import Notes from "./notes/Notes";
import {connect} from "react-redux";

function User(props) {
    switch(props.user){
        case null: // when not connected to server or loading or slow internet connection
            return null;

        case false: // when user is not logged in
            props.history.push('/');
        
        default: // when user is logged in
            return (
                <div>
                    <CreateArea />
                    <Notes />
                </div>
            );
    }  
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(User);