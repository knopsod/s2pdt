import React from 'react';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import PrivateHeader from './PrivateHeader';

class UsersList extends React.Component {
  constructor(props) {
    super(props)
  }
  renderUsers() {
    return (
      <ul>
        {this.props.users.map(user =>
          <li key={user._id}>{user.emails[0].address}</li>)}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Users"/>
        <div className="page-content">
          Users page content.
          <div>
            <button onClick={() => browserHistory.replace('/dashboard')}>Dashboard</button>
          </div>
          <div>
            {this.renderUsers()}
          </div>
        </div>
      </div>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('allUsers');
  console.log(Meteor.users.find().fetch());
  return {
    users: Meteor.users.find().fetch()
  }
}, UsersList);
