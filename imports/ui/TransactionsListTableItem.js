import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import numeral from 'numeral';

class TransactionsListTableItem extends Component {
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

    let buttonClassName = tran.isApproved ? `btn` : `btn btn-primary`;

    let bankBgColor = 0x000000;

    switch (tran.bank_short_name) {
      case 'KBANK':
        bankBgColor = '#088A29';
        break;

      case 'SCB':
        bankBgColor = '#7a197a';
        break;

      case 'BAY':
        bankBgColor = '#FACC2E';
        break;

      case 'GOV':
        bankBgColor = '#F5A9E1';
        break;

      case 'TMB':
        bankBgColor = '#0174DF';
        break;

      case 'KTB':
        bankBgColor = '#81DAF5';
        break;

      default:

    }

    const statusBgColor = tran.isApproved ? '#c6c6c6' : '#383737';

    return <tr>
      <td className="text-center">
        { this.props.isShowButton ?
          <button className={buttonClassName}
            onClick={this.handleApproveClick.bind(this, tran._id, tran.isApproved)}>
            { tran.isApproved ? 'Approved' : 'Approve' }
          </button>
          : undefined
        }
      </td>
      <td className="text-center"> {tran.transferred_datetime} </td>
      <td className="text-center" style={{backgroundColor: bankBgColor, color: 'gray'}}> { `${tran.bank_name} ${tran.bank_short_name}` }</td>
      <td className="text-center"> { tran.transfer_type } </td>
      <td className="text-center"> { numeral(tran.amount).format('0,0') } ฿ </td>
      <td className="text-center"> { tran.transfer_detail } </td>
      <td className="text-center" style={{backgroundColor: statusBgColor, color: 'gray'}}> { tran.isApproved ? 'Approved' : 'None Approve' }  </td>
      <td className="text-center">{ tran.client_transaction_id }</td>
    </tr>;
  }
}

export default createContainer(() => {
  return {
    meteorCall: Meteor.call
  }
}, TransactionsListTableItem);
