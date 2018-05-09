import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import PrivateHeader from './PrivateHeader';
import Nav from './Nav';

import { Transactions } from '../api/transactions';

class TransactionsList extends React.Component {
  constructor(props) {
    super(props)
  }
  handleAddClick() {
    this.props.meteorCall('transactions.insert', (err, res) => {

    });
  }
  renderTransaction() {
    return (
      <ul>
        {this.props.transactions.map(tran =>
          <li key={tran._id}>ID: {tran._id}, Approved: {
            tran.isApproved?'Yes':'No'
          }, updatedAt: {
            tran.updatedAt
          }</li>)}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Transactions"/>
        <div className="page-content">
          <Nav />
          Transactions page content.
          <div>
            <button onClick={this.handleAddClick.bind(this)}>Add fake transaction</button>
          </div>
          <div>
            {this.renderTransaction()}
          </div>
        </div>
      </div>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('transactions');

  return {
    meteorCall: Meteor.call,
    transactions: Transactions.find().fetch()
  };
}, TransactionsList);
