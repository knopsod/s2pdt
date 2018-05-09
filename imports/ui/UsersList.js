import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import PrivateHeader from './PrivateHeader';
import Nav from './Nav';

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
          <Nav />
          Users page content.
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
