import React from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import FlipMove from 'react-flip-move';

import PrivateHeader from './PrivateHeader';
import Nav from './Nav';

import { ClientUrls } from '../api/client_urls';

class UrlSetup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      _id: '',
      url: '',
      endpoint: '',
      owner: '',
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
  handleUrlChange(e) {
    const _id = this.state._id;
    const url = e.target.value;
    this.setState({ url });
    this.props.meteorCall('client_urls.update',
      _id,
      { url },
      (err, res) => {
        if(err) {
          this.setState({error: err.reason});
        } else {
          this.setState({error: ''});
        }
      });
  }
  handleEndpointChange(e) {
    const _id = this.state._id;
    const endpoint = e.target.value;
    this.setState({ endpoint });
    this.props.meteorCall('client_urls.update',
      _id,
      { endpoint },
      (err, res) => {
        if(err) {
          this.setState({error: err.reason});
        } else {
          this.setState({error: ''});
        }
      });
  }
  handleSetAsOwnerClick(user) {
    const _id = this.state._id;
    const owner = user.emails[0].address;

    this.props.meteorCall('client_urls.update',
      _id,
      { owner },
      (err, res) => {
        if(!err) {
          this.setState({ owner });
        }
      });
  }
  handleSetAsApproverClick(user) {
    const _id = this.state._id;
    const approver = user.emails[0].address;

    this.props.meteorCall('client_urls.update',
      _id,
      { approver },
      (err, res) => {
        if(!err) {
          this.setState({ approver });
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
            <button onClick={() => browserHistory.replace('/client_urls')}>&lt;Back</button>
          </div>
          <div>
            { this.state.error !== '' ? this.state.error : undefined }
          </div>
          <div>
            URL :
            <input value={this.state.url}
              placeholder="http://example.com"
              onChange={this.handleUrlChange.bind(this)}/>
          </div>
          <div>
            Endpoint :
            <input value={this.state.endpoint}
              placeholder="http://example.com/api/transactions"
              onChange={this.handleEndpointChange.bind(this)}/>
          </div>
          <div>
            Owner : {this.state.owner}
          </div>
          <div>
            Approver : {this.state.approver}
          </div>
          <FlipMove maintainContainerHeight={true}>
            {this.props.users.map((user) => {
              return <div key={user._id}>
                <button onClick={this.handleSetAsOwnerClick.bind(this, user)}>Set as owner</button>
                <button onClick={this.handleSetAsApproverClick.bind(this, user)}>Set as approver</button>
                {user.emails[0].address}
              </div>
            })}
          </FlipMove>
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
    users: Meteor.users.find({ role: 2 }).fetch(),
    meteorCall: Meteor.call
  }
}, UrlSetup)
