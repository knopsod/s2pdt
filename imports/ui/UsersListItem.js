import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class UsersListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  handleRoleClick(_id, role) {
    this.props.meteorCall('users.role_update',
      _id,
      { role },
      (err, res) => {

      });
  }
  render() {

    const user = this.props.user;

    return <div>
      <button onClick={this.handleRoleClick.bind(this, user._id, 1)}>Admin</button>
      <button onClick={this.handleRoleClick.bind(this, user._id, 2)}>User</button>
      <button onClick={this.handleRoleClick.bind(this, user._id, 3)}>Customer</button>
      {user.emails[0].address},
      role:
        {(user.role === 1)?'admin':undefined}
        {(user.role === 2)?'user':undefined}
        {(user.role === 3)?'customer':undefined}
    </div>
  }
}

export default createContainer(() => {
  return {
    meteorCall: Meteor.call
  }
}, UsersListItem);
