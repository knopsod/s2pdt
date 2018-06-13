import React from 'react';
import FlipMove from 'react-flip-move';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import PrivateHeader from './PrivateHeader';
import Nav from './Nav';
import UsersListItem from './UsersListItem';

class UsersList extends React.Component {
  constructor(props) {
    super(props)
  }
  renderUsers() {
    return this.props.users.map(function (user) {
      return <UsersListItem key={user._id} user={user} />
    });
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Users"/>
        <div className="page-content">
          <Nav />

          {/* <FlipMove maintainContainerHeight={true}>
            {this.renderUsers()}
          </FlipMove> */}

          <div className = "grid-body no-border" >
            <h3>All User<span className="semi-bold">Manage</span></h3>
            <table className="table no-more-tables">
              <thead>
                <tr>
                  {/* <th style={{width: '1%'}}>
                    <div className="checkbox check-default">
                      <input id="checkbox10" type="checkbox" value="1" className="checkall"/>
                      <label for="checkbox10"></label>
                    </div>
                  </th> */}
                  <th style={{width: '9%'}}>User</th>
                  <th style={{width: '22%'}}>Description</th>
                  <th style={{width: '6%'}}>Role</th>
                  <th style={{width: '10%'}}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.renderUsers()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('allUsers');

  return {
    users: Meteor.users.find({}, { sort: { role: 1 } }).fetch()
  }
}, UsersList);
