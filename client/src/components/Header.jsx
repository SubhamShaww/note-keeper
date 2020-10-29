import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

function Header(props) {
  const renderContent = () => {
    switch(props.user){
      case null: // when not connected to server
        return (
          <li className="nav-item">
            <a className="nav-link active text-light" href="/">Loading</a>
          </li>
        )
      case false: // when user is not logged in
        return;
      
      default: // when user is logged in
        return (
          <React.Fragment>
            <li className="nav-item">
              <a className="nav-link active text-light" href="/api/logout">Logout</a>
            </li>
          </React.Fragment>
        )
    }
  }

  return (
    <header className="navbar">
        <Link className="navbar-brand" to={ props.user ? '/user' : '/' }>
          <h1>
            <HighlightIcon />
            NoteKeeper
          </h1>
        </Link>
        
      
        <ul className="navbar-nav ml-auto mr-4">
          {renderContent()}
        </ul>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth
  }
}

export default connect(mapStateToProps)(Header);
