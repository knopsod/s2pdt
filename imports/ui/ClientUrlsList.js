import React from 'react';
import FlipMove from 'react-flip-move';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import PrivateHeader from './PrivateHeader';
import Nav from './Nav';

import { ClientUrls } from '../api/client_urls';

class ClientUrlsList extends React.Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault();

    const url = this.refs.url.value;

    this.props.meteorCall('client_urls.insert',
      { url },
      (err, res) => {});
  }
  renderClientUrls() {
    return this.props.client_urls.map(function (cu) {
      return <div key={cu._id}>
        <button onClick={() => browserHistory.replace('/url_setup')}>Setup</button>
        URL: {cu.url}
      </div>;
    });
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Client urls"/>
        <div className="page-content">
          <Nav />
          Client urls page content.
          <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" ref="url" placeholder="https://" />
              <input type="submit"/>
            </form>
          </div>
          <FlipMove maintainContainerHeight={true}>
            {this.renderClientUrls()}
          </FlipMove>
        </div>
      </div>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('client_urls');

  return {
    meteorCall: Meteor.call,
    client_urls: ClientUrls.find({}).fetch()
  };
}, ClientUrlsList);
