import React from 'react';

import PrivateHeader from './PrivateHeader';
import Nav from './Nav';

export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
        <Nav />
        Dashboard page content.

      </div>
    </div>
  );
};
