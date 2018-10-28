import React from 'react';
import FlipMove from 'react-flip-move';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import _ from 'lodash';
import _u from 'underscore';
import numeral from 'numeral';

import PrivateHeader from './PrivateHeader';
import Nav from './Nav';
import TransactionsListItem from './TransactionsListItem';
import TransactionsListTableItem from './TransactionsListTableItem';
import TransactionsListBankSums from './TransactionsListBankSums';

import { Withdraws } from '../api/withdraws';

const PER_PAGE = 20;

class WithdrawsList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.page = 1;
  }
  handleMoreClick() {
    Meteor.subscribe('withdraws', PER_PAGE * (this.page + 1));
    this.page += 1;
  }
  renderWithdrawsTable() {
    return this.props.withdraws.map((wDr, index) => {
      return <tr>
        <td>{1 + index}</td>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td>{wDr._id}</td>
      </tr>
    });
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Withdraws"/>
        <div className="page-content">
          <Nav />

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
                              <th style={{width: '1%' }}></th>
                              <th className="text-center" style={{width: '0%'}}>Date/Time</th>
                              <th className="text-center" style={{width: '8%'}}>Bank</th>
                              <th className="text-center" style={{width: '0%'}}>From</th>
                              <th className="text-center" style={{width: '0%'}}>Total amount</th>
                              <th className="text-center" style={{width: '0%'}}>Details</th>
                              <th className="text-center" style={{width: '0%'}}>Status</th>
                              <th className="text-center" style={{width: '0%'}}>Order ID</th>
                              <th className="text-center" style={{width: '0%'}}>***trace***</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.renderWithdrawsTable()}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="btn btn-default"
            onClick={this.handleMoreClick.bind(this)}>
            More..
          </button>

        </div>
      </div>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('withdraws', PER_PAGE);

  const user = Meteor.user();
  const meteorCall = Meteor.call;
  const withdraws = Withdraws.find({}).fetch();

  return {
    user,
    meteorCall,
    withdraws,
  };
}, WithdrawsList);
