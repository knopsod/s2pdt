import React from 'react';
import FlipMove from 'react-flip-move';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

import PrivateHeader from './PrivateHeader';
import Nav from './Nav';
import ClientUrlsListItem from './ClientUrlsListItem';

import { ClientUrls } from '../api/client_urls';

class ClientUrlsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ''
    };
  }
  handleSubmit(e) {
    e.preventDefault();

    const url = this.refs.url.value;
    const endpoint = '';
    const owner = '';
    const approver = '';

    this.props.meteorCall('client_urls.insert',
      { url, endpoint, owner, approver },
      (err, res) => {
        if(err) {
          this.setState({error: err.reason});
        } else {
          this.setState({error: ''});
        }
      });

    this.refs.url.value = '';
  }
  renderClientUrls() {
    return this.props.client_urls.map(function (cu) {
      return <ClientUrlsListItem key={cu._id} client_url={cu}/>
    });
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Client urls"/>
        <div className="page-content">
          <Nav />

          <div className="item">
            { this.state.error !== '' ? this.state.error : undefined }
            <form
              onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" ref="url"
                placeholder="http://custormer-url.com" />
              {/* <input className="button" type="submit" /> */}
              <button className="button" type="submit">Create</button>
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
    client_urls: ClientUrls.find({}).fetch(),
    Session
  };
}, ClientUrlsList);
