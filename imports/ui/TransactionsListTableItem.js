import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

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

    let buttonClassName = tran.isApproved ? `button button--secondary` : `button`;

    return <tr>
      <td>
        <div className="checkbox check-default text-center">
         {/* <input id="checkbox21" type="checkbox" value="1" />
         <label htmlFor="checkbox21"></label> */}
         { this.props.isShowButton ?
           <button className={buttonClassName}
             onClick={this.handleApproveClick.bind(this, tran._id, tran.isApproved)}>
             { tran.isApproved ? 'Approved' : 'Approve' }
           </button>
           : undefined
         }
       </div>
      </td>
      <td className="text-center"> 30/04/2017 18.30 </td>
      <td className="text-center" style={{backgroundColor: 'green', color: 'gray'}}>กสิกรไทย</td>
      <td className="text-center"> ADM </td>
      <td className="text-center"> 5000 ฿ </td>
      <td className="text-center"> Tranfer Withdraw NB (EDC098467) </td>
      <td className="text-center" style={{backgroundColor: '#383737', color: 'gray'}}> แจ้งแล้ว </td>
      <td className="text-center">14123</td>
    </tr>;
  }
}

export default createContainer(() => {
  return {
    meteorCall: Meteor.call
  }
}, TransactionsListTableItem);
