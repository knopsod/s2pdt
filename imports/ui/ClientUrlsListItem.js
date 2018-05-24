import React from 'react';
import { browserHistory } from 'react-router';

import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

class ClientUrlsListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  handleUrlSetupClick() {
    this.props.Session.set('selectedClientUrlId', this.props.client_url._id);
    browserHistory.replace('/url_setup');
  }
  render() {
    return <div className="item">
      <button className="button"
        onClick={this.handleUrlSetupClick.bind(this)}>
        Setting
      </button>
      URL: {this.props.client_url.url},
      Owner: {this.props.client_url.owner},
      Approver: {this.props.client_url.approver}
    </div>;
  }
}

export default createContainer(() => {
  return {
    Session
  }
}, ClientUrlsListItem);
