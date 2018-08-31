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
  handleRemove(_id) {
    var r = confirm("Are you sure to delete?");
    if (r == true) {
      this.props.meteorCall('users.remove',
        _id,
        (err, res) => {

        });
    }
  }
  render() {

    const user = this.props.user;
    let buttonAdminClassName = user.role === 1 ? 'button' : 'button button--secondary';
    let buttonUserClassName = user.role === 2 ? 'button' : 'button button--secondary';
    let buttonCustomerClassName = user.role === 3 ? 'button' : 'button button--secondary';

    let role = '';
    switch (user.role) {
      case 1: role = 'Administrator'; break;
      case 2: role = 'User'; break;
      case 3: role = 'Shop Manager'; break;
      default:

    }

    return (
      <tr>
        <td className="v-align-middle">
          {user.emails[0].address}
        </td>
        <td className="v-align-middle">
          <span className="muted"></span>
        </td>
        <td className="v-align-middle">
          <span className="muted">{role}</span>
        </td>
        <td>
          <div className="btn-group">
            <button className="btn btn-medium btn-success btn-demo-space">Action</button>
            <button className="btn btn-mini btn-success dropdown-toggle btn-demo-space"
              data-toggle="dropdown" >
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Action</a>
              </li>
              <li>
                <a href="#" onClick={this.handleRoleClick.bind(this, user._id, 1)}
                  >Administrator</a>
              </li>
              <li>
                <a href="#" onClick={this.handleRoleClick.bind(this, user._id, 2)}
                  >User</a>
              </li>
              <li>
                <a href="#" onClick={this.handleRoleClick.bind(this, user._id, 3)}
                  >Shop Manager</a>
              </li>
            </ul>
          </div>
        </td>
        <td>
          <button className="btn btn-medium btn-danger"
            onClick={this.handleRemove.bind(this, user._id)}>Remove</button>
        </td>
      </tr>
    );

    // return <div className="item">
    //   <button className={buttonAdminClassName}
    //     onClick={this.handleRoleClick.bind(this, user._id, 1)}>Admin</button>
    //   <button className={buttonUserClassName}
    //     onClick={this.handleRoleClick.bind(this, user._id, 2)}>User</button>
    //   <button className={buttonCustomerClassName}
    //     onClick={this.handleRoleClick.bind(this, user._id, 3)}>Customer</button>
    //   {user.emails[0].address}
    // </div>
  }
}

export default createContainer(() => {
  return {
    meteorCall: Meteor.call
  }
}, UsersListItem);
