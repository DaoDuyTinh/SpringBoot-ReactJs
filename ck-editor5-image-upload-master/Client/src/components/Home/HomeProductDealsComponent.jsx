import React from "react";
import Carousel from "react-elastic-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductService from "../../service/ProductService";
import NumberFormat from 'react-number-format';
import Marquee from 'react-fast-marquee';

class HomeProductDealsComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        content: []
    } 
  }
  componentDidMount(){
    ProductService.getProductSale(this.state.currentPage,10)
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
      <h4 className="title-section text-uppercase"style={{color:"#ae0d0d"}}>Ưu đãi<img src={"http://localhost:8080/images/sale2.png"} style={{width: '40px'}}/> </h4>
          </header>
      <div className="row row-sm ">
      <Carousel itemsToShow={4}>
          {this.state.content.map(
              pro =>
              <div className="col-xl-2 col-lg-3 col-md-4 col-6 "style={{marginLeft:"-60px"}}>
          <div href={"http://localhost:3000/product/"+(pro.id)} className="card card-sm card-product-grid titleall"style={{width: '300px',marginLeft:'-100px'}}>
            <a href={"http://localhost:3000/product/"+(pro.id)} className="img-wrap"style={{width: '300px',height:"200px"}}> 
              <img src={"http://localhost:8080/images/"+(pro.image)} style={{width: '400px'}}/> 
              <span className="badge badge-danger">Giảm sốc </span>
            </a>
            <figcaption className="info-wrap">
            <a href={"http://localhost:3000/product/"+(pro.id)} className="text-muted" style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}>{pro.category.name}</a>
              <a href={"http://localhost:3000/product/"+(pro.id)} className="title" style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}>{pro.name}</a>
              <div className="price-wrap">
                <del className="price-old" style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}><NumberFormat value={pro.price} displayType={'text'} thousandSeparator={true} /> <span className="badge badge-danger" style={{marginLeft:"5px"}}> Giảm {pro.percent}%</span> </del> 
                <br></br><span><b>Giá còn:</b> </span>
                <span class="price" style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}><NumberFormat value={pro.priceNet} displayType={'text'} thousandSeparator={true} /></span>
                +<span className="badge badge-danger">Phụ kiện: 10%</span>
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

export default HomeProductDealsComponent;