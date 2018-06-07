import React, { Component } from 'react';

import UIHeader from './UIHeader';
import UISidebar from './UISidebar';

class UIExample extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div>
        <UIHeader />
      </div>
    );
  }
}

export default UIExample;
