import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import PrivateHeader from './PrivateHeader';

class UsersList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Users"/>
        <div className="page-content">
          Users page content.
        </div>
      </div>
    );
  }
};

export default UsersList;
