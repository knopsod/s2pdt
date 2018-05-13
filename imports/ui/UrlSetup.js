import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import PrivateHeader from './PrivateHeader';
import Nav from './Nav';

class UrlSetup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <PrivateHeader title="Setting URL"/>
        <div className="page-content">
          <Nav />
          Setting URL page content.
          <div>

          </div>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    client_url: {}
  }
}, UrlSetup)
