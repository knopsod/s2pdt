import React from 'react';
import FlipMove from 'react-flip-move';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import _ from 'lodash';

import PrivateHeader from './PrivateHeader';
import Nav from './Nav';
import TransactionsListItem from './TransactionsListItem';
import TransactionsListTableItem from './TransactionsListTableItem';

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
  renderTransactionsTable() {
    var isShowButton = false;
    if (this.props.user) {
      if ( _.has(this.props.user, 'role') ) {
        isShowButton = this.props.user.role !== 3;
      }
    }

    return this.props.transactions.map((tran) => {
      return <TransactionsListTableItem key={tran._id} tran={tran} isShowButton={isShowButton} />
    });
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Transactions"/>
        <div className="page-content">
          <Nav />

          <div className="item">
            <div className="row">

              <div className="col-md-2 text-center">DATE/TIME</div>
              <div className="col-md-1 text-center">BANK</div>
              <div className="col-md-1 text-center">FROM</div>
              <div className="col-md-2 text-center">TOTAL AMOUNT</div>
              <div className="col-md-2 text-center">DETAILS</div>
              {/* <div className="col-md-1 text-center">STATUS</div> */}
              <div className="col-md-2 text-center">ORDER ID</div>
              <div></div>
            </div>
          </div>
          <FlipMove maintainContainerHeight={true}>
            {this.renderTransaction()}
          </FlipMove>

          <button className="button button--pill"
            onClick={this.handleMoreClick.bind(this)}>
            More..
          </button>

          <div className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
                    <div className="grid simple ">
                      <div className="grid-body no-border">
                        <table className="table table-bordered no-more-tables">
                          <thead>
                            <tr>
                              <th style={{width: '1%' }}>
                                {/* <div className="checkbox check-default">
                                  <input id="checkbox20" type="checkbox" value="1" className="checkall" />
                                  <label htmlFor="checkbox20"></label>
                                </div> */}
                              </th>
                               <th className="text-center" style={{width: '0%'}}>Date/Time</th>
                              <th className="text-center" style={{width: '8%'}}>Bank</th>
                              <th className="text-center" style={{width: '0%'}}>From</th>
                               <th className="text-center" style={{width: '0%'}}>Total amount</th>
                               <th className="text-center" style={{width: '0%'}}>Details</th>
                               <th className="text-center" style={{width: '0%'}}>Status</th>
                               <th className="text-center" style={{width: '0%'}}>Order ID</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.renderTransactionsTable()}
                            <FlipMove maintainContainerHeight={true}>
                            </FlipMove>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



           {/* <div className="page-content"> */}
             <div className="content">
               <div className="row">
                 <div className="col-md-12">
                   <div className="row">
                     <div className="col-md-12">
                       <div className="grid simple ">
                         <div className="grid-body no-border">
                           <table className="table table-bordered no-more-tables">
                 						<thead>
                 							<tr>
                 								<th style={{width: '1%' }}>
                 									{/* <div className="checkbox check-default">
                 										<input id="checkbox20" type="checkbox" value="1" className="checkall" />
                 										<label htmlFor="checkbox20"></label>
                 									</div> */}
                 								</th>
                                 <th className="text-center" style={{width: '0%'}}>Date/Time</th>
                 								<th className="text-center" style={{width: '8%'}}>Bank</th>
                 								<th className="text-center" style={{width: '0%'}}>From</th>
                                 <th className="text-center" style={{width: '0%'}}>Total amount</th>
                                 <th className="text-center" style={{width: '0%'}}>Details</th>
                                 <th className="text-center" style={{width: '0%'}}>Status</th>
                                 <th className="text-center" style={{width: '0%'}}>Order ID</th>
                 							</tr>
                 						</thead>
                 						<tbody>
                 							<tr>
                                 <td>
                                   <div className="checkbox check-default text-center">
                 										{/* <input id="checkbox21" type="checkbox" value="1" />
                 										<label htmlFor="checkbox21"></label> */}
                                     <button className="button">APPROVE</button>
                 									</div>
                                 </td>
                                 <td className="text-center"> 30/04/2017 18.30 </td>
                                 <td className="text-center" style={{backgroundColor: 'green', color: 'gray'}}>กสิกรไทย</td>
                                 <td className="text-center"> ADM </td>
                                 <td className="text-center"> 5000 ฿ </td>
                                 <td className="text-center"> Tranfer Withdraw NB (EDC098467) </td>
                                 <td className="text-center" style={{backgroundColor: '#383737', color: 'gray'}}> แจ้งแล้ว </td>
                                 <td className="text-center">14123</td>
                               </tr>
                               <tr>
                                 <td>
                                   <div className="checkbox check-default text-center">
                                     {/* <input id="checkbox22" type="checkbox" value="1" />
                                     <label htmlFor="checkbox22"></label> */}
                                     <button className="button button--secondary">APPROVED</button>
                                   </div>
                                 </td>
                                 <td className="text-center"> 30/04/2017 20.30 </td>
                                 <td className="text-center" style={{backgroundColor: '#7a197a', color:'gray'}}>ไทยพาณิชย์</td>
                                 <td className="text-center"> ADM </td>
                                 <td className="text-center"> 5000 ฿ </td>
                                 <td className="text-center"> Tranfer Withdraw NB (EDC468567) </td>
                                 <td className="text-center" style={{backgroundColor: '#c6c6c6', color: 'gray'}}> ยังไม่แจ้งแล้ว </td>
                                 <td className="text-center">14124</td>
                               </tr>
                 						</tbody>
                 					 </table>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           {/* </div> */}

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
