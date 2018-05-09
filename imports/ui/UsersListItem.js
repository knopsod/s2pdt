import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class UsersListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  handleRoleClick(_id, role) {
    this.props.meteorCall('users.role_update',
      Meteor.userId(),
      { role },
      (err, res) => {

      });
  }
  render() {
    return <li>
      {this.props.user.emails[0].address}, role:
      {(this.props.user.role === 1)?'admin':undefined}
      {(this.props.user.role === 2)?'user':undefined}
      {(this.props.user.role === 3)?'customer':undefined}
      <button onClick={this.handleRoleClick.bind(this, this.props.user._id, 1)}>Admin</button>
      <button onClick={this.handleRoleClick.bind(this, this.props.user._id, 2)}>User</button>
      <button onClick={this.handleRoleClick.bind(this, this.props.user._id, 3)}>Customer</button>
    </li>
  }
}

export default createContainer(() => {
  return {
    meteorCall: Meteor.call
  }
}, UsersListItem);
