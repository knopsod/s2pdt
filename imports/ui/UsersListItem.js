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
    let buttonAdminClassName = user.role === 1 ? 'button' : 'button button--secondary';
    let buttonUserClassName = user.role === 2 ? 'button' : 'button button--secondary';
    let buttonCustomerClassName = user.role === 3 ? 'button' : 'button button--secondary';

    return <div className="item">
      <button className={buttonAdminClassName}
        onClick={this.handleRoleClick.bind(this, user._id, 1)}>Admin</button>
      <button className={buttonUserClassName}
        onClick={this.handleRoleClick.bind(this, user._id, 2)}>User</button>
      <button className={buttonCustomerClassName}
        onClick={this.handleRoleClick.bind(this, user._id, 3)}>Customer</button>
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
