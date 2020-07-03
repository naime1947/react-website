import React from 'react';
import ser6 from '../images/ser6.png';

class LayoutPaddingGradiant extends React.Component {
    state = {
        text:''

    }
    componentDidMount() {
     const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,dicta sunt explicabo. Ut enim ad minima veniam quis nostrum exercitationem ullam corporis..!'

        this.setState({
            text
        })
    }

    render() {
        const {text}=this.state;
        return (
            <section class="layout_padding gradiant_bg cross_layout">
         <div class="container">
            <div class="row margin_bottom_30">
               <div class="col-md-6 cont_theme_blog">
                  <div class="full">
                     
                     <h4>{text}</h4>
                  </div>
                 
               </div>
               <div class="col-md-6 wow fadeInRight" data-wow-delay="0.5" data-wow-duration="1s">
                  <div class="full">
                     <div class="center"><img src={ser6} alt="#" /></div>
                  </div>
                  
               </div>
            </div>
         </div>
      </section>
        )
    }
}

export default LayoutPaddingGradiant;



