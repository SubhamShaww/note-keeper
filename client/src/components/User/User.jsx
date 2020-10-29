import React,{useEffect} from "react";
import CreateArea from "./noteInput/CreateArea";
import Notes from "./notes/Notes";
import {connect} from "react-redux";

function User(props) {

    useEffect(() => {
        if(props.user) {
            return (
                <div>
                    <CreateArea />
                    <Notes />
                </div>
            );
        } else {
            // when user is not logged in
            props.history.push('/');
        }
    },[]); 
    
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(User);