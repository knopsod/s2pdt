import React, { Component } from 'react';

// import UIHeader from './UIHeader';
// import UISidebar from './UISidebar';

import '../client/styles/assets/plugins/pace/pace-theme-flash.css';

import '../client/styles/assets/plugins/boostrapv3/css/bootstrap.min.css';
import '../client/styles/assets/plugins/boostrapv3/css/bootstrap-theme.min.css';
import '../client/styles/assets/plugins/font-awesome/css/font-awesome.css';
import '../client/styles/assets/css/animate.min.css';
import '../client/styles/assets/plugins/jquery-scrollbar/jquery.scrollbar.css';

import '../client/styles/assets/css/style.css';
import '../client/styles/assets/css/responsive.css';
import '../client/styles/assets/css/custom-icon-set.css';

const uiExample = ( props ) => {
  return (
    <div>
    <div className="pace  pace-inactive">
    <div className="pace-progress" data-progress-text="100%" data-progress="99" style={{width: '100%'}}>
      <div className="pace-progress-inner"></div>
    </div>
    <div className="pace-activity"></div>
  </div>

<div className="header navbar navbar-inverse ">

  <div className="navbar-inner">
	<div className="header-seperation">
		<ul className="nav pull-left notifcation-center" id="main-menu-toggle-wrapper" style={{display:'none'}}>
		 <li className="dropdown"> <a id="main-menu-toggle" href="#main-menu" className=""> <div className="iconset top-menu-toggle-white"></div> </a> </li>
		</ul>

      <a href="index.html">
        <img src="assets/img/logo2x.png" className="logo" alt="" data-src="assets/img/logo2x.png"
        data-src-retina="assets/img/logo2x.png" width="106" height="21"/></a>

      <ul className="nav pull-right notifcation-center">
        <li className="dropdown" id="header_task_bar">
          <a href="index.html" className="dropdown-toggle active" data-toggle="">
            <div className="iconset top-home"></div> </a> </li>
        <li className="dropdown" id="header_inbox_bar">
          <a href="email.html" className="dropdown-toggle">
            <div className="iconset top-messages"></div>
            <span className="badge animated bounceIn" id="msgs-badge">2</span> </a></li>
		<li className="dropdown" id="portrait-chat-toggler" style={{display:'none'}}>
      <a href="#sidr" className="chat-menu-toggle"> <div className="iconset top-chat-white "></div> </a> </li>
      </ul>
      </div>

      <div className="header-quick-nav">

	  <div className="pull-left">
        <ul className="nav quick-section">
          <li className="quicklinks"> <a href="#" className="" id="layout-condensed-toggle">
            <div className="iconset top-menu-toggle-dark"></div>
            </a> </li>
        </ul>
        <ul className="nav quick-section">
          <li className="quicklinks"> <a href="#" className="">
            <div className="iconset top-reload"></div>
            </a> </li>
          <li className="quicklinks"> <span className="h-seperate"></span></li>
          <li className="quicklinks"> <a href="#" className="">
            <div className="iconset top-tiles"></div>
            </a> </li>
			<li className="m-r-10 input-prepend inside search-form no-boarder">
				<span className="add-on"> <span className="iconset top-search"></span></span>
				 <input name="" type="text" className="no-boarder "
           placeholder="Search Dashboard" style={{width:'250px'}}/>
			</li>
		  </ul>
	  </div>

      <div className="pull-right">
		<div className="chat-toggler">
				<a href="#" className="dropdown-toggle" id="my-task-list" data-placement="bottom"
          data-content="" data-toggle="dropdown" data-original-title="Notifications">
					<div className="user-details">
						<div className="username">
							<span className="badge badge-important">3</span>
							John <span className="bold">Smith</span>
						</div>
					</div>
					<div className="iconset top-down-arrow"></div>
				</a>
				<div id="notification-list" style={{display:'none'}}>
					<div style={{width:'300px'}}>
						  <div className="notification-messages info">
									<div className="user-profile">
										<img src="assets/img/profiles/d2x.jpg" alt="" data-src="assets/img/profiles/d.jpg"
                    data-src-retina="assets/img/profiles/d2x.jpg" width="35" height="35"/>
									</div>
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
									<img src="assets/img/profiles/h2x.jpg" alt="" data-src="assets/img/profiles/h.jpg"
                  data-src-retina="assets/img/profiles/h2x.jpg" width="35" height="35"/>
								</div>
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
					<img src="assets/img/profiles/avatar_small2x.jpg" alt="" data-src="assets/img/profiles/avatar_small.jpg"
          data-src-retina="assets/img/profiles/avatar_small2x.jpg" width="35" height="35"/>
				</div>
			</div>
		 <ul className="nav quick-section ">
			<li className="quicklinks">
				<a data-toggle="dropdown" className="dropdown-toggle  pull-right " href="#" id="user-options">
					<div className="iconset top-settings-dark "></div>
				</a>
				<ul className="dropdown-menu  pull-right" role="menu" aria-labelledby="user-options">
          <li><a href="user-profile.html"> My Account</a>
          </li>
          <li><a href="calender.html">My Calendar</a>
          </li>
          <li><a href="email.html"> My Inbox&nbsp;&nbsp;<span className="badge badge-important animated bounceIn">2</span></a>
          </li>
          <li className="divider"></li>
          <li><a href="login.html"><i className="fa fa-power-off"></i>&nbsp;&nbsp;Log Out</a></li>
       </ul>
			</li>
			<li className="quicklinks"> <span className="h-seperate"></span></li>
			<li className="quicklinks">
			<a id="chat-menu-toggle" href="#sidr" className="chat-menu-toggle"><div className="iconset top-chat-dark "><span className="badge badge-important animated bounceIn" id="chat-message-count">1</span></div>
			</a>
				<div className="simple-chat-popup chat-menu-toggle hide animated fadeOut">
					<div className="simple-chat-popup-arrow"></div><div className="simple-chat-popup-inner">
						 <div style={{width:'100px'}}>
						 <div className="semi-bold">David Nester</div>
						 <div className="message">Hey you there </div>
						</div>
					</div>
				</div>
			</li>
		</ul>
      </div>

      </div>


  </div>

</div>


<div className="page-container row">

  <div className="page-sidebar" id="main-menu">

    <div className="scroll-wrapper page-sidebar-wrapper scrollbar-dynamic" style={{position: 'relative'}}><div className="page-sidebar-wrapper scrollbar-dynamic scroll-content scroll-scrolly_visible" id="main-menu-wrapper"
      style={{marginBottom: '-17px', marginRight: '-17px', height: '239px'}}>

      <p className="menu-title">BROWSE <span className="pull-right"><a href="javascript:;"><i className="fa fa-refresh"></i></a></span></p>
      <ul>
        <li className="start"> <a href="index.html"> <i className="icon-custom-home"></i> <span className="title">Dashboard</span> <span className="selected"></span> </a></li>
          <li className="start"> <a href="user.html"> <i className="fa fa-user"></i> <span className="title">User</span> <span className="selected"></span> </a></li>
          <li className=""> <a href="widgets.html"> <i className="fa fa-th"></i> <span className="title">Statment</span> <span className="label label-important pull-right ">HOT</span></a> </li>
        <li className=""> <a href="javascript:;"> <i className="fa fa-envelope"></i> <span className="title">Transection</span> <span className="arrow"></span></a>
        <ul className="sub-menu">
          <li> <a href="#">Online</a> </li>
          <li> <a href="#">Offline</a> </li>
        </ul>
        </li>
        <li className=""> <a href="javascript:;"> <i className="fa fa fa-adjust"></i> <span className="title">Bank Account</span> <span className="arrow "></span> </a>
            <ul className="sub-menu">
              <li> <a href="#">ALL</a> </li>
              <li> <a href="#">Bangkok Bank</a> </li>
              <li> <a href="#">Kasikornthai Bank</a> </li>
              <li> <a href="#">Krungsri Bank</a> </li>
              <li> <a href="#">Krunthai Bank</a> </li>
              <li> <a href="#">TMB Bank</a> </li>
            </ul>
        </li>
      </ul>
      <div className="side-bar-widgets">
        <p className="menu-title">FOLDER <span className="pull-right"><a href="#" className="create-folder"> <i className="fa fa-plus"></i></a></span></p>
        <ul className="folders">
          <li><a href="#">
            <div className="status-icon green"></div>
            My quick tasks </a> </li>
          <li><a href="#">
            <div className="status-icon red"></div>
            To do list </a> </li>
          <li><a href="#">
            <div className="status-icon blue"></div>
            Projects </a> </li>
          <li className="folder-input" style={{display:'none'}}>
            <input type="text" placeholder="Name of folder" className="no-boarder folder-name" name=""/>
          </li>
        </ul>
      </div>
      <div className="clearfix"></div>

    </div>
    <div className="scroll-element scroll-x scroll-scrolly_visible">
      <div className="scroll-element_outer">
        <div className="scroll-element_size"></div>
        <div className="scroll-element_track"></div>
        <div className="scroll-bar" style={{width: '89px'}}>
        </div>
      </div>
    </div>
    <div className="scroll-element scroll-y scroll-scrolly_visible"><div className="scroll-element_outer">
      <div className="scroll-element_size"></div>
      <div className="scroll-element_track"></div>
      <div className="scroll-bar" style={{height: '47px', top: '0px'}}>

      </div>
    </div>
  </div>
</div>
  </div>
  <a href="#" className="scrollup" style={{display: 'none'}}>Scroll</a>
   <div className="footer-widget">
	<div className="progress transparent progress-small no-radius no-margin">
		<div className="progress-bar progress-bar-success animate-progress-bar" data-percentage="79%" style={{width: '79%'}}></div>
	</div>
	<div className="pull-right">
		<div className="details-status">
		<span className="animate-number" data-value="86" data-animation-duration="560">86</span>%
	</div>
	<a href="lockscreen.html"><i className="fa fa-power-off"></i></a></div>
  </div>

    <div className="page-content">

            <div id="portlet-config" className="modal hide">
                <div className="modal-header">
                    <button data-dismiss="modal" className="close" type="button"></button>
                     <h3>Widget Settings</h3>

                </div>
                <div className="modal-body">Widget settings form goes here</div>
            </div>
            <div className="clearfix"></div>
            <div className="content">
                <ul className="breadcrumb">
                    <li>
                        <p>YOU ARE HERE</p>
                    </li>
                    <li><a href="#" className="active">Dashboard</a>

                    </li>
                </ul>
                <div className="row">

                </div>
                <div className="row">

                    <div className="col-md-12">
                        <div className="col-sm-3 col-xs-12">
                            <div className="panel panel-default" style={{border:'0px'}}>
                                <div className="panel-heading text-left"
                                  style={{background:'#27ae60', color:'#ffffff', border:'0px', borderRadius:'0px'}}>
                                    <strong>กสิกรไทย</strong>
                                </div>
                                <div className="panel-body text-right"
                                  style={{background:'#27ae60', color:'#ffffff', padding:'0px 15px 10px 15px'}}>
                                    <span style={{fontSize:'20px'}}>0.00</span> <small>บาท</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-12">
                            <div className="panel panel-default" style={{border:'0px'}}>
                                <div className="panel-heading text-left"
                                  style={{background:'#2196F3', color:'#ffffff', border:'0px', borderRadius:'0px'}}>
                                    <strong>กรุงไทย</strong>
                                </div>
                                <div className="panel-body text-right"
                                  style={{background:'#2196F3', color:'#ffffff', padding:'0px 15px 10px 15px'}}>
                                    <span style={{fontSize:'20px'}}>2.88</span> <small>บาท</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-12">
                            <div className="panel panel-default" style={{border:'0px'}}>
                                <div className="panel-heading text-left"
                                  style={{background:'#2c3e50', color:'#ffffff', border:'0px', borderRadius:'0px'}}><strong>รวมทั้งหมด</strong></div>
                                <div className="panel-body text-right" style={{background:'#2c3e50', color:'#ffffff', padding:'0px 15px 10px 15px'}}>
                                    <span style={{fontSize:'20px'}}>2.88</span> <small>บาท</small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="grid simple ">
                                    <div className="grid-title no-border">
                                        	<h4>Dashboard</h4>
                                        <div className="tools">	<a href="javascript:;" className="collapse"></a>
											<a href="#grid-config" data-toggle="modal" className="config"></a>
											<a href="javascript:;" className="reload"></a>
											<a href="javascript:;" className="remove"></a>
                                        </div>
                                        <div style={{marginBottom: '15px'}}>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-primary put_all">อัพเดทรายการเดินบัญชีทั้งหมด</button>
                                                <button type="button" className="btn btn-primary dropdown-toggle"
                                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                  style={{padding: '16px 12px'}}>
                                                    <span className="caret"></span>
                                                    <span className="sr-only">Toggle Dropdown</span>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#" className="put_kbank">เฉพาะกสิกรไทย</a></li>
                                                    <li><a href="#" className="put_scb">เฉพาะไทยพาณิชย์</a></li>
                                                    <li><a href="#" className="put_ktb">เฉพาะกรุงไทย</a></li>
                                                    <li><a href="#" className="put_bbl">เฉพาะกรุงเทพ</a></li>
                                                    <li><a href="#" className="put_bay">เฉพาะกรุงศรีอยุธยา</a></li>
                                                    <li><a href="#" className="put_tmb">เฉพาะทหารไทย</a></li>
                                                    <li><a href="#" className="put_truewallet">เฉพาะ True Wallet</a></li>
                                                </ul>
                                            </div>
                                            <a className="btn btn-default" href="?action=deletetransaction">ลบรายการเดินบัญชีทั้งหมด</a>
                                        </div>

                                    </div>

                                    <div className="grid-body no-border">
											 <h3>รายการเดินบัญชี<span className="semi-bold">ทั้งหมด</span></h3>
											 <p>

											 </p>
											 <br/>
											 <table className="table table-bordered no-more-tables">
												<thead>
													<tr>
														<th style={{width:'1%'}}>
															<div className="checkbox check-default">
																<input id="checkbox20" type="checkbox" value="1" className="checkall"/>
																<label for="checkbox20"></label>
															</div>
														</th>
														<th className="text-center" style={{width:'0%'}}>Date/Time</th>
														<th className="text-center" style={{width:'8%'}}>Bank</th>
														<th className="text-center" style={{width:'0%'}}>From</th>
                            <th className="text-center" style={{width:'0%'}}>Total amount</th>
                            <th className="text-center" style={{width:'0%'}}>Details</th>
                            <th className="text-center" style={{width:'0%'}}>Status</th>
                            <th className="text-center" style={{width:'0%'}}>Order ID</th>
													</tr>
												</thead>
												<tbody>
													<tr>
                            <td>
                              <div className="checkbox check-default">
																<input id="checkbox21" type="checkbox" value="1"/>
																<label for="checkbox21"></label>
															</div>
                            </td>
                            <td className="text-center"> 30/04/2017 18.30 </td>
                            <td className="text-center" style={{backgroundColor:'green', color:'gray'}}>กสิกรไทย</td>
                            <td className="text-center"> ADM </td>
                            <td className="text-center"> 5000 ฿ </td>
                            <td className="text-center"> Tranfer Withdraw NB (EDC098467) </td>
                            <td className="text-center" style={{backgroundColor:'#383737', color:'gray'}}> แจ้งแล้ว </td>
                            <td className="text-center">14123</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox check-default">
                                <input id="checkbox22" type="checkbox" value="1"/>
                                <label for="checkbox22"></label>
                              </div>
                            </td>
                            <td className="text-center"> 30/04/2017 20.30 </td>
                            <td className="text-center" style={{backgroundColor:'#7a197a', color:'gray'}}>ไทยพาณิชย์</td>
                            <td className="text-center"> ADM </td>
                            <td className="text-center"> 5000 ฿ </td>
                            <td className="text-center"> Tranfer Withdraw NB (EDC468567) </td>
                            <td className="text-center" style={{backgroundColor:'#c6c6c6', color:'gray'}}> ยังไม่แจ้งแล้ว </td>
                            <td className="text-center">14124</td>
                          </tr>
												</tbody>
											 </table>
									</div>
								</div>
							</div>
						</div>
					</div>
                </div>
            </div>

        </div>

<div className="chat-window-wrapper">
	<div id="main-chat-wrapper" className="inner-content">
        <div className="scroll-wrapper chat-window-wrapper scroller scrollbar-dynamic" style={{position: 'relative'}}><div className="chat-window-wrapper scroller scrollbar-dynamic scroll-content scroll-scrollx_visible scroll-scrolly_visible" id="chat-users"
          style={{marginBottom: '-17px', marginRight: '-17px', height: '344px'}}>
            <div className="chat-header">
            <div className="pull-left">
              <div className="user-info-wrapper">
                <div className="profile-wrapper"> <img src="assets/img/profiles/avatar.jpg"  alt="" data-src="assets/img/profiles/avatar.jpg" data-src-retina="assets/img/profiles/avatar2x.jpg" width="69" height="69" /> </div>
                <div className="user-info">
                  <div className="greeting">Welcome</div>
                  <div className="username">John <span className="semi-bold">Smith</span></div>
                  <div className="status">Status<a href="#">
                    <div className="status-icon green"></div>
                    Online</a></div>
                </div>
              </div>
                <input type="text" placeholder="search"/>
            </div>
                <div className="pull-right">
                    <a href="#" className=""><div className="iconset top-settings-dark "></div> </a>
                </div>
            </div>
            <div className="side-widget">
               <div className="side-widget-title">group chats</div>
                <div className="side-widget-content">
                 <div id="groups-list">
                    <ul className="groups">
                        <li><a href="#"><div className="status-icon green"></div>Office work</a></li>
                        <li><a href="#"><div className="status-icon green"></div>Personal vibes</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="side-widget fadeIn">
               <div className="side-widget-title">favourites</div>
               <div id="favourites-list">
                <div className="side-widget-content">
                    <div className="user-details-wrapper active" data-chat-status="online" data-chat-user-pic="assets/img/profiles/d.jpg" data-chat-user-pic-retina="assets/img/profiles/d2x.jpg" data-user-name="Jane Smith">
                        <div className="user-profile">
                            <img src="assets/img/profiles/d2x.jpg" alt="" data-src="assets/img/profiles/d.jpg"
                            data-src-retina="assets/img/profiles/d2x.jpg" width="35" height="35"/>
                        </div>
                        <div className="user-details">
                            <div className="user-name">
                            Jane Smith
                            </div>
                            <div className="user-more">
                            Hello you there?
                            </div>
                        </div>
                        <div className="user-details-status-wrapper">
                            <span className="badge badge-important">3</span>
                        </div>
                        <div className="user-details-count-wrapper">
                            <div className="status-icon green"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="user-details-wrapper" data-chat-status="busy" data-chat-user-pic="assets/img/profiles/d.jpg" data-chat-user-pic-retina="assets/img/profiles/d2x.jpg" data-user-name="David Nester">
                        <div className="user-profile">
                            <img src="assets/img/profiles/c2x.jpg" alt="" data-src="assets/img/profiles/c.jpg"
                            data-src-retina="assets/img/profiles/c2x.jpg" width="35" height="35"/>
                        </div>
                        <div className="user-details">
                            <div className="user-name">
                            David Nester
                            </div>
                            <div className="user-more">
                            Busy, Do not disturb
                            </div>
                        </div>
                        <div className="user-details-status-wrapper">
                            <div className="clearfix"></div>
                        </div>
                        <div className="user-details-count-wrapper">
                            <div className="status-icon red"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                </div>
            </div>
            <div className="side-widget">
               <div className="side-widget-title">more friends</div>
                 <div className="side-widget-content" id="friends-list">
                    <div className="user-details-wrapper" data-chat-status="online" data-chat-user-pic="assets/img/profiles/d.jpg" data-chat-user-pic-retina="assets/img/profiles/d2x.jpg" data-user-name="Jane Smith">
                        <div className="user-profile">
                            <img src="assets/img/profiles/d2x.jpg" alt="" data-src="assets/img/profiles/d.jpg"
                            data-src-retina="assets/img/profiles/d2x.jpg" width="35" height="35"/>
                        </div>
                        <div className="user-details">
                            <div className="user-name">
                            Jane Smith
                            </div>
                            <div className="user-more">
                            Hello you there?
                            </div>
                        </div>
                        <div className="user-details-status-wrapper">

                        </div>
                        <div className="user-details-count-wrapper">
                            <div className="status-icon green"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="user-details-wrapper" data-chat-status="busy" data-chat-user-pic="assets/img/profiles/d.jpg" data-chat-user-pic-retina="assets/img/profiles/d2x.jpg" data-user-name="David Nester">
                        <div className="user-profile">
                            <img src="assets/img/profiles/h2x.jpg" alt="" data-src="assets/img/profiles/h.jpg"
                            data-src-retina="assets/img/profiles/h2x.jpg" width="35" height="35"/>
                        </div>
                        <div className="user-details">
                            <div className="user-name">
                            David Nester
                            </div>
                            <div className="user-more">
                            Busy, Do not disturb
                            </div>
                        </div>
                        <div className="user-details-status-wrapper">
                            <div className="clearfix"></div>
                        </div>
                        <div className="user-details-count-wrapper">
                            <div className="status-icon red"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="user-details-wrapper" data-chat-status="online" data-chat-user-pic="assets/img/profiles/d.jpg" data-chat-user-pic-retina="assets/img/profiles/d2x.jpg" data-user-name="Jane Smith">
                        <div className="user-profile">
                            <img src="assets/img/profiles/c2x.jpg" alt="" data-src="assets/img/profiles/c.jpg"
                            data-src-retina="assets/img/profiles/c2x.jpg" width="35" height="35"/>
                        </div>
                        <div className="user-details">
                            <div className="user-name">
                            Jane Smith
                            </div>
                            <div className="user-more">
                            Hello you there?
                            </div>
                        </div>
                        <div className="user-details-status-wrapper">

                        </div>
                        <div className="user-details-count-wrapper">
                            <div className="status-icon green"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="user-details-wrapper" data-chat-status="busy" data-chat-user-pic="assets/img/profiles/d.jpg" data-chat-user-pic-retina="assets/img/profiles/d2x.jpg" data-user-name="David Nester">
                        <div className="user-profile">
                            <img src="assets/img/profiles/h2x.jpg" alt="" data-src="assets/img/profiles/h.jpg"
                            data-src-retina="assets/img/profiles/h2x.jpg" width="35" height="35"/>
                        </div>
                        <div className="user-details">
                            <div className="user-name">
                            David Nester
                            </div>
                            <div className="user-more">
                            Busy, Do not disturb
                            </div>
                        </div>
                        <div className="user-details-status-wrapper">
                            <div className="clearfix"></div>
                        </div>
                        <div className="user-details-count-wrapper">
                            <div className="status-icon red"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </div><div className="scroll-element scroll-x scroll-scrollx_visible scroll-scrolly_visible"><div className="scroll-element_outer">    <div className="scroll-element_size"></div>    <div className="scroll-element_track"></div>    <div className="scroll-bar"
          style={{width: '233px', left: '0px'}}></div></div></div><div className="scroll-element scroll-y scroll-scrollx_visible scroll-scrolly_visible"><div className="scroll-element_outer">    <div className="scroll-element_size"></div>    <div className="scroll-element_track"></div>
        <div className="scroll-bar" style={{height: '173px', top: '0px'}}></div></div></div></div>

        <div className="chat-window-wrapper" id="messages-wrapper" style={{display:'none'}}>
        <div className="chat-header">
            <div className="pull-left">
                <input type="text" placeholder="search"/>
            </div>
                <div className="pull-right">
                    <a href="#" className=""><div className="iconset top-settings-dark "></div> </a>
                </div>
            </div>
        <div className="clearfix"></div>
        <div className="chat-messages-header">
        <div className="status online"></div><span className="semi-bold">Jane Smith(Typing..)</span>
        <a href="#" className="chat-back"><i className="icon-custom-cross"></i></a>
        </div>
        <div className="scroll-wrapper chat-messages scrollbar-dynamic clearfix" style={{position: 'relative'}}>
          <div className="chat-messages scrollbar-dynamic clearfix scroll-content"
            style={{marginBottom: '-17px', marginRight: '-17px'}}>
            <div className="inner-scroll-content clearfix">
            <div className="sent_time">Yesterday 11:25pm</div>
            <div className="user-details-wrapper ">
                <div className="user-profile">
                    <img src="assets/img/profiles/d2x.jpg" alt="" data-src="assets/img/profiles/d.jpg"
                    data-src-retina="assets/img/profiles/d2x.jpg" width="35" height="35"/>
                </div>
                <div className="user-details">
                  <div className="bubble">
                        Hello, You there?
                   </div>
                </div>
                <div className="clearfix"></div>
               <div className="sent_time off">Yesterday 11:25pm</div>
            </div>
            <div className="user-details-wrapper ">
                <div className="user-profile">
                    <img src="assets/img/profiles/d2x.jpg" alt="" data-src="assets/img/profiles/d.jpg"
                    data-src-retina="assets/img/profiles/d2x.jpg" width="35" height="35"/>
                </div>
                <div className="user-details">
                  <div className="bubble">
                        How was the meeting?
                   </div>
                </div>
                <div className="clearfix"></div>
                <div className="sent_time off">Yesterday 11:25pm</div>
            </div>
            <div className="user-details-wrapper ">
                <div className="user-profile">
                    <img src="assets/img/profiles/d2x.jpg" alt="" data-src="assets/img/profiles/d.jpg"
                    data-src-retina="assets/img/profiles/d2x.jpg" width="35" height="35"/>
                </div>
                <div className="user-details">
                  <div className="bubble">
                        Let me know when you free
                   </div>
                </div>
                <div className="clearfix"></div>
                <div className="sent_time off">Yesterday 11:25pm</div>
            </div>
            <div className="sent_time ">Today 11:25pm</div>
            <div className="user-details-wrapper pull-right">
                <div className="user-details">
                  <div className="bubble sender">
                        Let me know when you free
                   </div>
                </div>
                <div className="clearfix"></div>
                <div className="sent_time off">Sent On Tue, 2:45pm</div>
            </div>
        </div>
        </div><div className="scroll-element scroll-x"><div className="scroll-element_outer">    <div className="scroll-element_size"></div>    <div className="scroll-element_track"></div>    <div className="scroll-bar"></div></div></div><div className="scroll-element scroll-y"><div className="scroll-element_outer">    <div className="scroll-element_size"></div>    <div className="scroll-element_track"></div>    <div className="scroll-bar"></div></div></div></div>
        <div className="chat-input-wrapper" style={{display:'none'}}>
            <textarea id="chat-message-input" rows="1" placeholder="Type your message"></textarea>
        </div>
        <div className="clearfix"></div>
        </div>
    </div>
</div>

 </div>
</div>
  );
}

export default uiExample;
