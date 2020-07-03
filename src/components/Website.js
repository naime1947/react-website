import React from 'react';
import Header from './Header';
import BannerParalax from './BannerParalax';
import LayoutPadding from './LayoutPadding';
import LayoutPaddingGradiant from './LayoutPaddingGradiant';
import Footer from './Footer';

class Website extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <BannerParalax/>
                <LayoutPadding/>
                <LayoutPaddingGradiant/>
                <Footer/>
            </React.Fragment>)
    }
}

export default Website;