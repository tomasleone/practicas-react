import React from 'react';
import Navbar from './Navbar';

class MyApp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    };
  }

  render() {
    return (
      <div>
        <Navbar name={this.state.name} />
      </div>
    );
  }
}

export default MyApp2;
