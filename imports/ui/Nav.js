import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import _ from 'lodash';

const Nav = (props) => {
  var role;

  if ( _.has(props.user, 'role') ) role = props.user.role;

  return <ul className="nav">
    <li><Link to="/dashboard" >Dashboard</Link></li>
    { role === 1 ? <li><Link to="/users" >Users</Link></li> : undefined }
    { role === 1 ? <li><Link to="/client_urls" >Client urls</Link></li> : undefined }
    <li><Link to="/transactions" >Transactions</Link></li>
  </ul>
}

export default createContainer(() => {
  Meteor.subscribe('allUsers');

  // const { role } = Meteor.user().role;
  // console.log('Meteor.user(): ', Meteor.user());
  // if (Meteor.user().role) {
  //   role = Meteor.user().role;
  // }

  return {
    user: Meteor.user()
  }
}, Nav);
