import React, { Component } from 'react';
import ONama from './ONama';
import ONamaPart2 from './ONamaPart2';

 class OnamaHolderComponent extends Component {
  render() {
    return (
      <div id='onama'>
          <ONama />
          <ONamaPart2 />
      </div>
    )
  }
}

export default OnamaHolderComponent;
