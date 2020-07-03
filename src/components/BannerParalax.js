import React from 'react';


class Header extends React.Component {
    state = {
        title: '',
        paragraph: '',
        callToActionText:''

    }
    componentDidMount() {
        const title = 'Familiarize Your Creative Application';
        const paragraph = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium..!';
        const callToActionText = 'Download';

        this.setState({
            title,
            paragraph,
            callToActionText
        })
    }



    render() {
        const {title, paragraph,callToActionText} = this.state;
        return (
            <section id="banner_parallax" className="slide_banner1" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="full">
                                <div className="slide_cont">
                                    <h2>{title}</h2>
                                    <p>{paragraph}</p>
                                    <div className="full slide_bt"> <a className="white_bt bt_main" href="index.html">{callToActionText}</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>)
    }
}

export default Header;

