import React from "react";
import Carousel from "react-elastic-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductService from "../../service/ProductService";
import NumberFormat from 'react-number-format';

class CommingSoonComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        content: []
    } 
  }
  componentDidMount(){
    ProductService.getProductSoon(this.state.currentPage,6)
    .then((response) => response.data)
      .then((data) => {
        this.setState({
          content: data.content})
    })

  }
  render() {
    const { items } = this.state;
    return (
      <div style={{marginLeft:'40px',marginRight:'40px'}}>
      <section className="padding-bottom titles">
      <header className="section-heading heading-line">
      <h4 className="title-section text-uppercase"style={{color:"#ae0d0d"}}>Sản phẩm mới</h4>
          </header>
      <div className="row row-sm ">
      <Carousel itemsToShow={4}>
          {this.state.content.map(
              pro =>
              <div className="col-xl-2 col-lg-3 col-md-4 col-6 "style={{marginLeft:"-60px"}}>
          <div href={"http://localhost:3000/product/"+(pro.id)} className="card card-sm card-product-grid titleall"style={{width: '290px',marginLeft:'-100px'}}>
            <a href={"http://localhost:3000/product/"+(pro.id)} className="img-wrap"style={{width: '280px',height:"200px"}}> 
              <img src={"http://localhost:8080/images/"+(pro.image)} style={{width: '300px'}}/> 
            </a> <div className="product-action" style={{position:"absolute"}}>
            <img src={"http://localhost:8080/images/commingsoon.jpg"} style={{width: '80px',height:"30px",position:"absolute"}}/> 
                        </div>
                        <div className="product-action" style={{position:"relative", marginLeft:"235px"}}>
                        <img src={"http://localhost:8080/images/baohanh.jpg"} style={{width: '50px',height:"30px",position:"absolute"}}/>
                        </div>
            <figcaption className="info-wrap">
            <a href={"http://localhost:3000/product/"+(pro.id)} className="text-muted" style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}>{pro.category.name}</a>
              <a href={"http://localhost:3000/product/"+(pro.id)} className="title" style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}>{pro.name}</a>
              <div className="price-wrap">
              <span class="price" style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}><NumberFormat value={pro.install} displayType={'text'} thousandSeparator={true} /></span>
             <br></br><span><b>Đặt trước:</b> </span>
                <span className="price-old" style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}><NumberFormat value={pro.price} displayType={'text'} thousandSeparator={true} /></span>
                +<span className="badge badge-danger">PMH: 10%</span>
              </div> {/* price-wrap.// */}
            </figcaption>
          </div>
        </div>
          )}
        </Carousel>
      </div>
    </section>
    </div>
    );
  }
}

export default CommingSoonComponent;