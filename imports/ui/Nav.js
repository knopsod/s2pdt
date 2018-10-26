import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import _ from 'lodash';

import Accounts from './Accounts';

const Nav = (props) => {
  var role;

  if ( _.has(props.user, 'role') ) role = props.user.role;

  const pathname = browserHistory.getCurrentLocation().pathname;

  var liDashboardClassName = pathname === '/dashboard' ? 'active' : '';
  var liUsersClassName = pathname === '/users' ? 'active' : '';
  var liClientUrlsClassName =
    (pathname === '/client_urls' || pathname === '/url_setup') ? 'active' : '';
  var liTransClassName = pathname === '/transactions' ? 'active' : '';
  var liWithdrawsClassName = pathname === '/withdraws' ? 'active' : '';

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li className={liDashboardClassName}>
            <Link to="/dashboard" >Dashboard</Link></li>
          { role === 1 ?
            <li className={liUsersClassName}><Link to="/users" >Users</Link></li>
            : undefined }
          { role === 1 ?
            <li className={liClientUrlsClassName}><Link to="/client_urls" >Client urls</Link></li>
            : undefined }
          <li className={liTransClassName}><Link to="/transactions" >Transactions</Link></li>
          <li className={liWithdrawsClassName}><Link to="/withdraws" >Withdraws</Link></li>
          <li>
            <div style={{marginTop: 15, marginLeft: 15}}>
              <Accounts />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )

  // return <ul className="nav">
  //   <li><Link to="/dashboard" >Dashboard</Link></li>
  //   { role === 1 ? <li><Link to="/users" >Users</Link></li> : undefined }
  //   { role === 1 ? <li><Link to="/client_urls" >Client urls</Link></li> : undefined }
  //   <li><Link to="/transactions" >Transactions</Link></li>
  // </ul>

  // return (
  //   <nav className="navbar navbar-default">
  //     <div className="container-fluid">
  //       <div className="navbar-header">
  //         <Link className="navbar-brand" to="/">Shop2Pay Auth., Animated UI</Link>
  //       </div>
  //       <ul className="nav navbar-nav">
  //         <li>
  //           <Accounts />
  //         </li>
  //
  //       </ul>
  //     </div>
  //   </nav>
  // )
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
