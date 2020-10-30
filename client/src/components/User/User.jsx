import React from "react";
import CreateArea from "./noteInput/CreateArea";
import Notes from "./notes/Notes";
import {connect} from "react-redux";

function User(props) { 
    
  const renderContent = () => {
      switch(props.user){
        case null: // when not connected to server
          return ;
        case false: // when user is not logged in
          props.history.push('/');
        
        default: // when user is logged in
          return (
            <React.Fragment>
              <CreateArea />
              <Notes />
            </React.Fragment>
          )
      }
  }

  return <div>{renderContent()}</div>
  
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(User);