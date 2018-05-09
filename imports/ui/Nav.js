import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  return <ul className="nav">
    <li><Link to="/dashboard" >Dashboard</Link></li>
    <li><Link to="/users" >Users</Link></li>
    <li><Link to="/client_urls" >Client urls</Link></li>
    <li><Link to="/transactions" >Transactions</Link></li>
  </ul>
}

export default Nav;
