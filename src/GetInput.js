import React from 'react';

class GetInput extends React.Component {
  

  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange} />
      </div>
    );
  }
}

export default GetInput;
