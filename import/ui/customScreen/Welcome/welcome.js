import React from "react";
import Login from "../../Authication/Login/Login";

class welcome extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Login/>
    );
  }
}


welcome.propTypes = {};

welcome.defaultProps = {};

export default welcome;

