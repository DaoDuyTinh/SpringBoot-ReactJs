import React from "react";
import Carousel from "react-elastic-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeHeaderComponent from "../Home/HomeHeaderComponent";
import HomeFooterComponent from "../Home/HomeFooterComponent";

class ServiceComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        content: []
    } 
  }
  render() {
    return (
      <div>
      <HomeHeaderComponent />
      <body >
      <div className="row" style={{marginLeft:"40px", width:"1509px",marginTop:"20px", marginBottom:"50px"}}>
      <div className="container">
      <section className="padding-bottom-sm">
                <div className="product-item" style={{marginLeft:"30px", marginTop:"20px"}}>
                <a href={"./care/"}>
                  <div className="product-image" style={{width:"1140px"}}>
                    <a href={"./care/"}>
                      <img
                        style={{width:"1140px",height:"400px" }}
                        src={"https://global.yamaha-motor.com/business/mc/customer-support/img/index_key_002.jpg"}
                        alt="logo"
                      />
                      
                    </a>
                    <div className="product-action">
                      <button style={{fontSize:"80px",backgroundColor: "transparent",border:"0px",textTransform:"uppercase",color:"white",fontFamily: 'Roboto Condensed, sans-serif'}} href={"./product/"}>
                        Chăm sóc khách hàng
                      </button>
                    </div>
                  </div>
                  </a>
                </div>
                <div className="product-item" style={{marginLeft:"30px", marginTop:"20px"}}>
                <a href={"./test/"}>
                  <div className="product-image" style={{width:"1140px"}}>
                    <a href={"./test/"}>
                      <img
                        style={{width:"1140px",height:"400px" }}
                        src={"https://yamaha-motor.com.vn/wp/wp-content/webp-express/webp-images/doc-root/wp/wp-content/uploads/2019/06/Untitled-2.jpg.webp"}
                        alt="logo"
                      />
                      
                    </a>
                    <div className="product-action">
                      <button style={{fontSize:"80px",backgroundColor: "transparent",border:"0px",textTransform:"uppercase",color:"white",fontFamily: 'Roboto Condensed, sans-serif'}} href={"./product/"}>
                        Bảo hành
                      </button>
                    </div>
                  </div>
                  </a>
                </div>
                <div className="product-item" style={{marginLeft:"30px", marginTop:"20px"}}>
                <a href={"./free/"}>
                  <div className="product-image" style={{width:"1140px"}}>
                    <a href={"./free/"}>
                      <img
                        style={{width:"1140px",height:"400px" }}
                        src={"https://yamaha-motor.com.vn/wp/wp-content/webp-express/webp-images/doc-root/wp/wp-content/uploads/2019/06/Untitled-22.jpg.webp"}
                        alt="logo"
                      />
                      
                    </a>
                    <div className="product-action">
                      <button style={{fontSize:"80px",backgroundColor: "transparent",border:"0px",textTransform:"uppercase",color:"white",fontFamily: 'Roboto Condensed, sans-serif'}} href={"./product/"}>
                        Bảo dưỡng định kì
                      </button>
                    </div>
                  </div>
                  </a>
                </div>
           
    </section>
    </div>
    </div>
    </body>
        <HomeFooterComponent />
      </div>    
    );
  }
}

export default ServiceComponent;