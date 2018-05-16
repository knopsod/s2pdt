import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { HTTP } from 'meteor/http';

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
        if(!err) {
          // https://docs.meteor.com/api/http.html
          // https://themeteorchef.com/tutorials/using-the-http-package
          // https://www.tutorialspoint.com/meteor/meteor_http.htm
          HTTP.call( 'POST', this.props.tran.client_rest_api_endpoint, {
            data: {
              ...this.props.tran,
              is_approved: true
            }
          }, function( error, response ) {
            if ( error ) {
              console.log( error );
            } else {
              console.log( response );
            }
          });
        }
      });
  }
  render() {

    const tran = this.props.tran;

    return <div>
      <button onClick={this.handleApproveClick.bind(this, tran._id, tran.isApproved)}>
        Approved
      </button>
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
