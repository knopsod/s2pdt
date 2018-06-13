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
            <button className="btn btn-default"
              onClick={() => browserHistory.replace('/client_urls')}>
              {`< Back`}
            </button>
          </div>
          <br />
          <div>
            { this.state.error !== '' ? this.state.error : undefined }
          </div>
          <div className="item">
            <div>
              <input type="text" value={this.state.url} className="form-control"
                placeholder="http://customer-url.com"
                onChange={this.handleUrlChange.bind(this)}/>
              </div>
              {/* <div>
                Default REST API endpoint :
                <input value={this.state.endpoint}
                  placeholder="http://example.com/api/transactions"
                  onChange={this.handleEndpointChange.bind(this)}/>
              </div> */}

          </div>

          <table className="table table-bordered no-more-tables">
            <thead>
            <tr>
                {/* <th style="width:1%">
                    <div className="checkbox check-default">
                        <input id="checkbox20" type="checkbox" value="1" className="checkall"/>
                        <label for="checkbox20"></label>
                    </div>
                </th> */}
                <th className="text-center" style={{width: '0%'}}>Email</th>
                <th className="text-center" style={{width: '0%'}}>Owner</th>
                <th className="text-center" style={{width: '0%'}}>Approver</th>
            </tr>
            </thead>
            <tbody>
              {this.props.users.map((user) => {
                let buttonOwnerClassName =
                  this.state.owner === user.emails[0].address ?
                    'btn btn-success' : 'btn btn-default';
                let buttonApproverClassName =
                  this.state.approver === user.emails[0].address ?
                    'btn btn-success' : 'btn btn-default';
                return <tr key={user._id}>
                  <td className="text-center"> {user.emails[0].address} </td>
                  <td className="text-center">
                    <button className={buttonOwnerClassName}
                      onClick={this.handleSetAsOwnerClick.bind(this, user)}>
                      Owner
                    </button>
                  </td>
                  <td className="text-center">
                    <button className={buttonApproverClassName}
                      onClick={this.handleSetAsApproverClick.bind(this, user)}>
                      Approver
                    </button>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>

          {/* <FlipMove maintainContainerHeight={true}>
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
          </FlipMove> */}

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
