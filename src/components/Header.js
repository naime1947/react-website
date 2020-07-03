import React from 'react';
import logo from '../assets/logo.png';

class Header extends React.Component {
    render() {
        return (
            <header className="header header_style1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-lg-10">
                            <div className="logo"><a href="index.html"><img src={logo} alt="#" /></a></div>
                            <div className="main_menu float-right">
                                <div className="menu">
                                    <ul className="clearfix">
                                        <li className="active"><a href="index.html">Home</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="service.html">Service</a></li>
                                        <li><a href="screenshots.html">Screenshots</a></li>
                                        <li><a href="pricing.html">Pricing</a></li>
                                        <li><a href="team.html">Team</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2" style={{ top: '-10px' }} >
                            <div className="right_bt">
                                <a className="bt_main" href="index.html">Get Support</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>)
    }
}

export default Header;

