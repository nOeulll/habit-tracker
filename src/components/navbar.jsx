import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    console.log("navbar");
    return (
      <header className="navbar">
        <div className="habit-tracker-icon">
          <i className="fas fa-leaf"></i>
        </div>
        <span className="header-name">Habit Tracker</span>
        <span className="habit-tracker-count">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Navbar;
