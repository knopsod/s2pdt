import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class TransactionsListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  handleApproveClick(_id, isApproved) {
    isApproved = !isApproved;
    this.props.meteorCall('transactions.update',
      _id,
      { isApproved },
      (err, res) => {

      });
  }
  render() {

    const tran = this.props.tran;

    return <div>
      <button onClick={this.handleApproveClick.bind(this, tran._id, tran.isApproved)}>
        Approve
      </button>
      Approved: { tran.isApproved?'Yes':'No' },
      ID: {tran._id},
      updatedAt: { tran.updatedAt }
    </div>
  }
}

export default createContainer(() => {
  return {
    meteorCall: Meteor.call
  }
}, TransactionsListItem);
