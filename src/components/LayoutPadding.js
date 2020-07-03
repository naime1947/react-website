import React from 'react';
import ser5 from '../images/ser5.png';

class LayoutPadding extends React.Component {
    state = {
        title: '',
        paragraph: ''

    }
    componentDidMount() {
        const title = 'UNIQUE APP WITH DIFFERENT FEATURES';
        const paragraph = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo 
        Ut enim ad minima veniam quis nostrum exercitationem ullam corporis..!`;

        this.setState({
            title,
            paragraph
        })
    }

    render() {
        const {title, paragraph}=this.state;
        return (
            <section class="layout_padding padding_top_0">
                <div class="container">
                    <div class="row margin_bottom_30">

                        <div class="col-md-6 cont_theme_blog">
                            <div class="full">
                                <div class="center"><img src={ser5} alt="#" /></div>
                            </div>

                        </div>

                        <div class="col-md-6 wow fadeInRight" data-wow-delay="0.5" data-wow-duration="1s">
                            <div class="full">
                                <h3>{title}</h3>
                                <p>{paragraph}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        )
    }
}

export default LayoutPadding;



