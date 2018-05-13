import React from 'react';
import FlipMove from 'react-flip-move';
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
    return this.props.users.map(function (user) {
      return <UsersListItem key={user._id} user={user} />
    });
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Users"/>
        <div className="page-content">
          <Nav />
          Users page content.
          <FlipMove maintainContainerHeight={true}>
            {this.renderUsers()}
          </FlipMove>
        </div>
      </div>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('allUsers');

  return {
    users: Meteor.users.find({}, { sort: { role: 1 } }).fetch()
  }
}, UsersList);
