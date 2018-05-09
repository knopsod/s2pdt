import React from 'react';
import { browserHistory } from 'react-router';

import PrivateHeader from './PrivateHeader';

export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
        Dashboard page content.
        <div>
          <button onClick={() => browserHistory.replace('/users')}>
            Users list</button>
        </div>
        <div>
          <button onClick={() => browserHistory.replace('/transactions')}>
            Transactions list</button>
        </div>
        <div>
          <button onClick={() => browserHistory.replace('/client_urls')}>
            Client url list</button>
        </div>
      </div>
    </div>
  );
};
