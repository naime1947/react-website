import React from 'react';
import logo from '../assets/logo1.png';

class Header extends React.Component {
    state={
        menus:[]

    }
    componentDidMount() {
        const menus = ["Home","About","Service","Screenshots","Pricing","Team","Contact"]

        this.setState({
            menus
        })
    }

   renderMenus  = ()=> (this.state.menus.map((menu, index) => (
        <li key={index} ><a href={menu+'.html'} className={menu==='Home'? 'active':''} >{menu}</a></li>
    ) ))

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
                                        
                                        {this.renderMenus()}
                                        
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

