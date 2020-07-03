import React from 'react';
import Header from './Header';
import BannerParalax from './BannerParalax';

class Website extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <BannerParalax/>
            </React.Fragment>)
    }
}

export default Website;