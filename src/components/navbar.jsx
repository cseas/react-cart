import React, { Component } from "react";

class NavBar extends Component {
  render() {
    // object destructuring
    const { totalCounters } = this.props;

    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
