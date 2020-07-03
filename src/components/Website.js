import React from 'react';
import Header from './Header';
import BannerParalax from './BannerParalax';
import LayoutPadding from './LayoutPadding';

class Website extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <BannerParalax/>
                <LayoutPadding/>
            </React.Fragment>)
    }
}

export default Website;