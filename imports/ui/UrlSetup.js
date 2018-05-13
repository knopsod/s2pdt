import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import PrivateHeader from './PrivateHeader';
import Nav from './Nav';

import { ClientUrls } from '../api/client_urls';

class UrlSetup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: '',
      url: '',
      approver: ''
    };
  }
  componentWillMount() {
    if(this.props.client_url) {
      this.setState({
        ...this.props.client_url
      });
    }
  }
  handleSelectClick(user) {
    console.log(this.state);
    console.log(user);

    const _id = this.state._id;
    const approver = user.emails[0].address;

    this.props.meteorCall('client_urls.update',
      _id,
      { approver },
      (err, res) => {
        if(!err) {
          this.setState({approver});
        }
      });
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Setting URL"/>
        <div className="page-content">
          <Nav />
          Setting URL page content.
          <div>
            URL : {this.state.url !== '' ? this.state.url : undefined}
          </div>
          <div>
            Approver : {this.state.approver !== '' ? this.state.approver : undefined}
          </div>
          <div>
            {this.props.users.map((user) => {
              return <div key={user._id}>
                <button onClick={this.handleSelectClick.bind(this, user)}>Select</button>{user.emails[0].address}
              </div>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  const selectedClientUrlId = Session.get('selectedClientUrlId');
  Meteor.subscribe('allUsers');

  return {
    client_url: ClientUrls.findOne(selectedClientUrlId),
    users: Meteor.users.find({ role: 2}).fetch(),
    meteorCall: Meteor.call
  }
}, UrlSetup)
