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
          <div>
            <button className="button button--pill"
              onClick={() => browserHistory.replace('/client_urls')}>
              &lt;Back
            </button>
          </div>
          <div>
            { this.state.error !== '' ? this.state.error : undefined }
          </div>
          <div className="item">
            <div>
              URL :
              <input value={this.state.url}
                placeholder="http://example.com"
                onChange={this.handleUrlChange.bind(this)}/>
              </div>
              {/* <div>
                Default REST API endpoint :
                <input value={this.state.endpoint}
                  placeholder="http://example.com/api/transactions"
                  onChange={this.handleEndpointChange.bind(this)}/>
              </div> */}

          </div>

          <FlipMove maintainContainerHeight={true}>
            {this.props.users.map((user) => {
              let buttonOwnerClassName =
                this.state.owner === user.emails[0].address ?
                  'button' : 'button button--secondary';
              let buttonApproverClassName =
                this.state.approver === user.emails[0].address ?
                  'button' : 'button button--secondary';
              return <div className="item" key={user._id}>
                <button className={buttonOwnerClassName}
                  onClick={this.handleSetAsOwnerClick.bind(this, user)}>
                  Owner
                </button>
                <button className={buttonApproverClassName}
                  onClick={this.handleSetAsApproverClick.bind(this, user)}>
                  Approver
                </button>
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
    users: Meteor.users.find({ role: { $ne: 1 } }).fetch(),
    meteorCall: Meteor.call
  }
}, UrlSetup)
