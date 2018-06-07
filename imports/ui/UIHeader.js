import React, { Component } from 'react';

class UIHeader extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
<div className="navbar-inner" >
  <div className="header-seperation">
  <ul className="nav pull-left notifcation-center" id="main-menu-toggle-wrapper"
    style={{display:'none'}}>
    <li className="dropdown">
      <a id="main-menu-toggle" href="#main-menu" className="">
        <div className="iconset top-menu-toggle-white"></div>
      </a>
    </li>
  </ul>

  <a href="index.html">
    <img src="assets/img/logo2x.png" className="logo" alt=""
    data-src="assets/img/logo2x.png" data-src-retina="assets/img/logo2x.png"
    width="106" height="21"/></a>

    <ul className="nav pull-right notifcation-center">
      <li className="dropdown" id="header_task_bar">
        <a href="index.html" className="dropdown-toggle active" data-toggle="">
          <div className="iconset top-home"></div>
        </a>
      </li>
      <li className="dropdown" id="header_inbox_bar">
        <a href="email.html" className="dropdown-toggle">
          <div className="iconset top-messages"></div>
          <span className="badge animated bounceIn" id="msgs-badge">2</span>
        </a>
      </li>
      <li className="dropdown" id="portrait-chat-toggler" style={{display:'none'}}>
        <a href="#sidr" className="chat-menu-toggle">
          <div className="iconset top-chat-white "></div>
        </a>
      </li>
    </ul>
  </div>

  <div className="header-quick-nav">

    <div className="pull-left">
      <ul className="nav quick-section">
        <li className="quicklinks">
          <a href="#" className="" id="layout-condensed-toggle">
            <div className="iconset top-menu-toggle-dark"></div>
          </a>
        </li>
      </ul>
      <ul className="nav quick-section">
        <li className="quicklinks">
          <a href="#" className="">
            <div className="iconset top-reload"></div>
          </a>
        </li>
        <li className="quicklinks">
          <span className="h-seperate"></span>
        </li>
        <li className="quicklinks">
          <a href="#" className="">
            <div className="iconset top-tiles"></div>
          </a>
        </li>
        <li className="m-r-10 input-prepend inside search-form no-boarder">
          <span className="add-on">
            <span className="iconset top-search"></span>
          </span>
          <input name="" type="text" className="no-boarder "
            placeholder="Search Dashboard" style={{width:'250px'}} /></li>
        </ul>
      </div>

      <div className="pull-right">
        <div className="chat-toggler">
          <a href="#" className="dropdown-toggle" id="my-task-list"
            data-placement="bottom" data-content=""
            data-toggle="dropdown" data-original-title="Notifications">
            <div className="user-details">
              <div className="username">
                <span className="badge badge-important">3</span>
                John
                <span className="bold">Smith</span>
              </div>
            </div>
            <div className="iconset top-down-arrow"></div>
          </a>
          <div id="notification-list" style={{display:'none'}}>
            <div style={{width:'300px'}}>
              <div className="notification-messages info">
                <div className="user-profile">
                  <img src="assets/img/profiles/d2x.jpg" alt=""
                  data-src="assets/img/profiles/d.jpg"
                  data-src-retina="assets/img/profiles/d2x.jpg"
                  width="35" height="35"/></div>
                  <div className="message-wrapper">
                    <div className="heading">
                      David Nester - Commented on your wall
                    </div>
                    <div className="description">
                      Meeting postponed to tomorrow
                    </div>
                    <div className="date pull-left">
                      A min ago
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="notification-messages danger">
                  <div className="iconholder">
                    <i className="icon-warning-sign"></i>
                  </div>
                  <div className="message-wrapper">
                    <div className="heading">
                      Server load limited
                    </div>
                    <div className="description">
                      Database server has reached its daily capicity
                    </div>
                    <div className="date pull-left">
                      2 mins ago
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="notification-messages success">
                  <div className="user-profile">
                    <img src="assets/img/profiles/h2x.jpg" alt=""
                    data-src="assets/img/profiles/h.jpg"
                    data-src-retina="assets/img/profiles/h2x.jpg"
                    width="35" height="35"/></div>
                    <div className="message-wrapper">
                      <div className="heading">
                        You haveve got 150 messages
                      </div>
                      <div className="description">
                        150 newly unread messages in your inbox
                      </div>
                      <div className="date pull-left">
                        An hour ago
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="profile-pic">
                <img src="assets/img/profiles/avatar_small2x.jpg" alt=""
                data-src="assets/img/profiles/avatar_small.jpg"
                data-src-retina="assets/img/profiles/avatar_small2x.jpg"
                width="35" height="35"/></div>
              </div>
              <ul className="nav quick-section ">
                <li className="quicklinks">
                  <a data-toggle="dropdown" className="dropdown-toggle  pull-right " href="#" id="user-options">
                    <div className="iconset top-settings-dark "></div>
                  </a>
                  <ul className="dropdown-menu  pull-right" role="menu" aria-labelledby="user-options">
                    <li>
                      <a href="user-profile.html">
                        My Account</a>
                    </li>
                    <li>
                      <a href="calender.html">My Calendar</a>
                    </li>
                    <li>
                      <a href="email.html">
                        My Inbox&nbsp;&nbsp;<span className="badge badge-important animated bounceIn">2</span>
                      </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="login.html">
                        <i className="fa fa-power-off"></i>&nbsp;&nbsp;Log Out</a>
                    </li>
                  </ul>
                </li>
                <li className="quicklinks">
                  <span className="h-seperate"></span>
                </li>
                <li className="quicklinks">
                  <a id="chat-menu-toggle" href="#sidr" className="chat-menu-toggle">
                    <div className="iconset top-chat-dark ">
                      <span className="badge badge-important animated bounceIn"
                        id="chat-message-count">1</span>
                    </div>
                  </a>
                  <div className="simple-chat-popup chat-menu-toggle hide animated fadeOut">
                    <div className="simple-chat-popup-arrow"></div>
                    <div className="simple-chat-popup-inner">
                      <div style={{width:'100px'}}>
                        <div className="semi-bold">David Nester</div>
                        <div className="message">Hey you there
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>
    );
  }
}

export default UIHeader;
