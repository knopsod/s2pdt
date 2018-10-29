import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import numeral from 'numeral';

class WithdrawsListTableItem extends Component {
  constructor(props) {
    super(props);
  }
  handleApproveClick(_id, isApproved) {
    isApproved = !isApproved;
    this.props.meteorCall('withdraws.update',
      _id,
      { isApproved },
      (err, res) => {

      });
  }
  render() {
    const withdraw = this.props.withdraw;

    let buttonClassName = withdraw.isApproved ? `btn` : `btn btn-primary`;

    let bankBgColor = 0x000000;

    switch (withdraw.bank_short_name) {
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

    const statusBgColor = withdraw.isApproved ? '#c6c6c6' : '#383737';

    return <tr>
      <td className="text-center">
        { this.props.isShowButton ?
          <button className={buttonClassName}
            onClick={this.handleApproveClick.bind(this, withdraw._id, withdraw.isApproved)}>
            { withdraw.isApproved ? 'Approved' : 'Approve' }
          </button>
          : undefined
        }
      </td>
      <td className="text-center"> {withdraw.transferred_datetime} </td>
      <td className="text-center" style={{backgroundColor: bankBgColor, color: 'gray'}}> 
        { `${withdraw.bank_name} ${withdraw.bank_short_name}` }
      </td>
      <td className="text-center"> { withdraw.transfer_type } </td>
      <td className="text-center"> { numeral(withdraw.amount).format('0,0') } ฿ </td>
      <td className="text-center"> { withdraw.transfer_detail } </td>
      <td className="text-center" style={{backgroundColor: statusBgColor, color: 'gray'}}> 
        { withdraw.isApproved ? 'Approved' : 'None Approve' }  
      </td>
      <td className="text-center">{ withdraw.client_withdraw_id }</td>
      <td className="text-center">
        { withdraw.client_url }*{ withdraw.approver }*{ withdraw.owner }*{ withdraw.short_client_url }
      </td>
    </tr>;
  }
}

export default createContainer(() => {
  return {
    meteorCall: Meteor.call
  }
}, WithdrawsListTableItem);
