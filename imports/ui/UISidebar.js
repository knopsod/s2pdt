import React, { Component } from 'react';

class UISidebar extend Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Client urls</li>
        <li>Transactions</li>
      </ul>
    );
  }
}

export default UISidebar;
