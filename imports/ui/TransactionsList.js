import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import PrivateHeader from './PrivateHeader';
import Nav from './Nav';
import TransactionsListItem from './TransactionsListItem';

import { Transactions } from '../api/transactions';

const PER_PAGE = 20;

class TransactionsList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.page = 1;
  }
  handleAddClick() {
    this.props.meteorCall('transactions.insert', (err, res) => {

    });
  }
  handleMoreClick() {
    Meteor.subscribe('transactions', PER_PAGE * (this.page + 1));
    this.page += 1;
  }
  renderTransaction() {
    return (
      <ul>
        {this.props.transactions.map((tran) => {
          return <TransactionsListItem key={tran._id} tran={tran} />
        })}
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
          <button onClick={this.handleMoreClick.bind(this)}>More..</button>
        </div>
      </div>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('transactions', PER_PAGE);

  return {
    meteorCall: Meteor.call,
    transactions: Transactions.find({}, { sort: { isApproved: 1, updatedAt: -1 } }).fetch()
  };
}, TransactionsList);
