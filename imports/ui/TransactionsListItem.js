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
      { this.props.isShowButton && <button onClick={this.handleApproveClick.bind(this, tran._id, tran.isApproved)}>
        Approved
      </button> }
      { tran.isApproved?'Yes':'No' },
      {tran.client_url},
      Trans. ID: { tran.client_transaction_id },
      { tran.bank_account },
      { tran.bank_no },
      { tran.bank_short_name },
      { tran.amount } BHT.,
      { tran.transferred_datetime }
    </div>
  }
}

export default createContainer(() => {
  return {
    meteorCall: Meteor.call
  }
}, TransactionsListItem);
