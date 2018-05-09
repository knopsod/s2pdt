import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import PrivateHeader from './PrivateHeader';
import Nav from './Nav';
import UsersListItem from './UsersListItem';

class UsersList extends React.Component {
  constructor(props) {
    super(props)
  }
  renderUsers() {
    return (
      <ul>
        {this.props.users.map((user) => {
          // return <li key={user._id}>{user.emails[0].address}, role:
          //   {(user.role === 1)?'admin':undefined}
          //   {(user.role === 2)?'user':undefined}
          //   {(user.role === 3)?'customer':undefined}</li>
          return <UsersListItem key={user._id} user={user} />
        })}
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
  return {
    users: Meteor.users.find().fetch()
  }
}, UsersList);
