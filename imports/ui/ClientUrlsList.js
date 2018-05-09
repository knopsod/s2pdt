import React from 'react';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import PrivateHeader from './PrivateHeader';

import { ClientUrls } from '../api/client_urls';

class ClientUrlsList extends React.Component {
  constructor(props) {
    super(props)
  }
  handleAddClick() {
    this.props.meteorCall('client_urls.insert', (err, res) => {});
  }
  renderClientUrls() {
    return (
      <ul>
        {this.props.client_urls.map(cu =>
          <li key={cu._id}>URL: {cu.url}</li>)}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Client urls"/>
        <div className="page-content">
          Client urls page content.
          <div>
            <button onClick={() => browserHistory.replace('/dashboard')}>Dashboard</button>
          </div>
          <div>
            <button onClick={this.handleAddClick.bind(this)}>Add fake client urls</button>
          </div>
          <div>
            {this.renderClientUrls()}
          </div>
        </div>
      </div>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('client_urls');

  return {
    meteorCall: Meteor.call,
    client_urls: ClientUrls.find().fetch()
  };
}, ClientUrlsList);
