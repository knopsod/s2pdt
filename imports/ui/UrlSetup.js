import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import PrivateHeader from './PrivateHeader';
import Nav from './Nav';

class UrlSetup extends React.Component {
  constructor(props) {
    super(props)
  }
  renderUsers() {
    return (
      <ul>
        {this.props.users.map((user) => {
          return <div key={user._id}>
            <button>User</button>
            <button>Customer</button>
            {user.emails[0].address}
          </div>
        })}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Setting URL"/>
        <div className="page-content">
          <Nav />
          Setting URL page content.
          <div>
            {this.renderUsers()}
          </div>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('allUsers');
  return {
    users: Meteor.users.find({}, { sort: { role: 1 } }).fetch()
  }
}, UrlSetup)
