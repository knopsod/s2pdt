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
              <input type="text" ref="url" className="form-control"
                placeholder="http://custormer-url.com" />
              {/* <input className="button" type="submit" /> */}
              <button className="btn btn-medium btn-success btn-demo-space"
                type="submit"
                >Create</button>
            </form>
          </div>
          {/* <FlipMove maintainContainerHeight={true}>
            {this.renderClientUrls()}
          </FlipMove> */}

          <div className="grid-body no-border">
            <h3>Client Url<span className="semi-bold">Management</span></h3>
            <p>

            </p>
            {/* <div className="pull-right">
                <button type="remove" className="btn btn-danger btn-cons"><i className="icon-ok"></i>remove</button>
            </div> */}
            <br/>
            <table className="table table-bordered no-more-tables">
              <thead>
              <tr>
                  {/* <th style="width:1%">
                      <div className="checkbox check-default">
                          <input id="checkbox20" type="checkbox" value="1" className="checkall"/>
                          <label for="checkbox20"></label>
                      </div>
                  </th> */}
                  <th className="text-center" style={{width: '0%'}}>Url</th>
                  <th className="text-center" style={{width: '0%'}}>Owner</th>
                  <th className="text-center" style={{width: '0%'}}>Approver</th>
                  <th className="text-center" style={{width: '8%'}}>Setup</th>
              </tr>
              </thead>
              <tbody>
                { this.renderClientUrls() }
              </tbody>
            </table>
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
    client_urls: ClientUrls.find({}).fetch(),
    Session
  };
}, ClientUrlsList);
