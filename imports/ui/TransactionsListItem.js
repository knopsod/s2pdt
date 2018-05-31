import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import numeral from 'numeral';

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

    let buttonClassName = tran.isApproved ? `button button--secondary` : `button`;

    return <div className="item">
      <div className="row">

        <div className="col-md-2 text-center">
          { tran.transferred_datetime }
        </div>
        <div className="col-md-1 text-center">{ tran.bank_short_name }</div>
        <div className="col-md-1 text-center">{ tran.client_url }</div>
        <div className="col-md-2 text-center">{ numeral(tran.amount).format('0,0') }</div>
        <div className="col-md-2 text-center">-</div>
        {/* <div className="col-md-1 text-center">STATUS</div> */}
        <div className="col-md-2 text-center">{ tran.client_transaction_id }</div>
        <div className="pull-right" style={{paddingRight: 10}}>
          { this.props.isShowButton ?
            <button className={buttonClassName}
              onClick={this.handleApproveClick.bind(this, tran._id, tran.isApproved)}>
              { tran.isApproved ? 'Approved' : 'Approve' }
            </button>
            : undefined
          }
        </div>
      </div>
    </div>

    return <div className="item">
      { this.props.isShowButton ?
        <button className={buttonClassName}
          onClick={this.handleApproveClick.bind(this, tran._id, tran.isApproved)}>
          { tran.isApproved ? 'Approved' : 'Approve' }
        </button>
        : undefined
      }
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
