import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import PrivateHeader from './PrivateHeader';

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
      <div>
        <ul>
          {this.props.transactions.map(
            trans => <li key={trans._id}>ID: {trans._id}, Approved: {
              trans.isApproved?'Yes':'No'
            }, updatedAt: {
              trans.updatedAt
            }</li>)}
        </ul>
      </div>
    );
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Transactions"/>
        <div className="page-content">
          Transactions page content.
          <div>
            <button onClick={this.handleAddClick.bind(this)}>Add fake transactions</button>
          </div>
          {this.renderTransaction()}
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
