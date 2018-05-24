import React from 'react';
import FlipMove from 'react-flip-move';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import _ from 'lodash';

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
  handleMoreClick() {
    Meteor.subscribe('transactions', PER_PAGE * (this.page + 1));
    this.page += 1;
  }
  renderTransaction() {
    var isShowButton = false;
    if (this.props.user) {
      if ( _.has(this.props.user, 'role') ) {
        isShowButton = this.props.user.role !== 3;
      }
    }

    return this.props.transactions.map((tran) => {
      return <TransactionsListItem key={tran._id} tran={tran} isShowButton={isShowButton} />
    });
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Transactions"/>
        <div className="page-content">
          <Nav />

          <FlipMove maintainContainerHeight={true}>
            {this.renderTransaction()}
          </FlipMove>
          <button className="button button--pill"
            onClick={this.handleMoreClick.bind(this)}>
            More..
          </button>
        </div>
      </div>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('transactions', PER_PAGE);

  return {
    user: Meteor.user(),
    meteorCall: Meteor.call,
    transactions: Transactions.find({}, { sort: { isApproved: 1, updatedAt: -1 } }).fetch()
  };
}, TransactionsList);
