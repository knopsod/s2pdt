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
    return (
      <tr>
          {/* <td>
              <div className="checkbox check-default">
                  <input id="checkbox21" type="checkbox" value="1"/>
                  <label for="checkbox21"></label>
              </div>
          </td> */}
          <td className="text-center"> {this.props.client_url.url} </td>
          <td className="text-center"> {this.props.client_url.owner} </td>
          <td className="text-center"> {this.props.client_url.approver} </td>
          <td className="text-center">
            <button type="setup" className="btn btn-primary"
              onClick={this.handleUrlSetupClick.bind(this)}>
            <i className="icon-ok"></i>Setup</button>
          </td>
      </tr>
    );
    // return <div className="item">
    //   <button className="btn btn-primary"
    //     onClick={this.handleUrlSetupClick.bind(this)}>
    //     <i className="icon-ok"></i>Setup
    //   </button>
    //   URL: {this.props.client_url.url},
    //   Owner: {this.props.client_url.owner},
    //   Approver: {this.props.client_url.approver}
    //
    // </div>;
  }
}

export default createContainer(() => {
  return {
    Session
  }
}, ClientUrlsListItem);
