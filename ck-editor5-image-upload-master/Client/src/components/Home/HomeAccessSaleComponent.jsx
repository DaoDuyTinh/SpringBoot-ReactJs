import ProductService from "../../service/ProductService";
import React from 'react';
import NumberFormat from 'react-number-format';
import Carousel from "react-elastic-carousel";
class HomeAccessSaleComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            product:[]
        }
    }
    componentDidMount(){
        ProductService.getAccessSale(0,10).then((response) => response.data)
        .then((data) => {
          this.setState({
            product: data.content})
      })
    }
    render (){
        return (
          <div style={{marginLeft:'40px',marginRight:'40px'}}>
      <section className="padding-bottom titles">
      <header className="section-heading heading-line">
      <h4 className="title-section text-uppercase"style={{color:"#ae0d0d"}}>Ưa đãi phụ kiện<img src={"http://localhost:8080/images/sale.png"} style={{width: '50px'}}/> </h4>
          </header>
      <div className="row row-sm ">
      <Carousel itemsToShow={4}>
          {this.state.product.map(
              pro =>
              <div className="col-xl-2 col-lg-3 col-md-4 col-6 "style={{marginLeft:"-60px"}}>
          <div href={"http://localhost:3000/product/"+(pro.id)} className="card card-sm card-product-grid titleall"style={{width: '300px',marginLeft:'-100px'}}>
            <a href={"http://localhost:3000/product/"+(pro.id)} className="img-wrap"style={{width: '300px',height:"200px"}}> 
              <img src={"http://localhost:8080/images/"+(pro.image)} style={{width: '400px'}}/> 
              <span className="badge badge-danger">Đang giảm %</span>
            </a>
            <figcaption className="info-wrap">
            <a href={"http://localhost:3000/product/"+(pro.id)} className="text-muted" style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}>{pro.category.name}</a>
              <a href={"http://localhost:3000/product/"+(pro.id)} className="title" style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}>{pro.name}</a>
              <div className="price-wrap">
                <del className="price-old" style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}><NumberFormat value={pro.price} displayType={'text'} thousandSeparator={true} /> <span className="badge badge-danger" style={{marginLeft:"5px"}}> Giảm {pro.percent}%</span> </del> 
                <br></br><span><b>Giá còn:</b> </span>
                <span class="price" style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}><NumberFormat value={pro.priceNet} displayType={'text'} thousandSeparator={true} /></span>+<span className="badge badge-danger">PMH: <NumberFormat value={50000} displayType={'text'} thousandSeparator={true} /></span>
              </div> {/* price-wrap.// */}
            </figcaption>
          </div>
        </div>
          )}
        </Carousel>
      </div>
    </section>
    </div>
        )
    }
}
export default HomeAccessSaleComponent
