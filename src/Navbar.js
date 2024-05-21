import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, my name is: {this.props.name}</h1>
      </div>
    );
  }
}

export default Navbar;


