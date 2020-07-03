import React from 'react';


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

   

    render() {
        return (
            <section id="banner_parallax" className="slide_banner1" >
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="full">
                     <div className="slide_cont">
                        <h2>Familiarize Your Creative Application</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium..!</p>
                        <div className="full slide_bt"> <a className="white_bt bt_main" href="index.html">Download</a> </div>
                     </div>
                  </div>
               </div>
            </div>
           
         </div>
      </section>)
    }
}

export default Header;

