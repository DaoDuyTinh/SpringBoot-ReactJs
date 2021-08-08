import React from "react";
import NewsService from "../../service/NewsService";
import HomeHeaderComponent from "../Home/HomeHeaderComponent";
import HomeFooterComponent from "../Home/HomeFooterComponent";
import HomeProductDealsComponent from "../Home/HomeProductDealsComponent";
import NumberFormat from 'react-number-format';
import ProductService from "../../service/ProductService";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
class NewsDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: this.props.match.params.id,
        title:"",
        description:"",
        product:[]

    };
  }
  componentDidMount() {
    NewsService.getNewsById(this.state.id).then(res =>{
        let news = res.data;
        this.setState({title:news.title,description:news.description});
    });
    NewsService.review(this.state.id);
    ProductService.getProductSale(this.state.currentPage-1,6)
    .then((response) => response.data)
      .then((data) => {
        this.setState({
          product: data.content})
    })
  }
  render() {
    return (
      <div>
      <HomeHeaderComponent/>
        <div>
        <section className="section-content bg-white padding-y"style={{marginTop:"20px"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8" style={{backgroundColor:"#dee2e6"}}>
            <h3 className="card-title">{this.state.title}</h3>
            { ReactHtmlParser(this.state.description) }</div>
              <div className="col-lg-3 border-listnew" style={{marginTop:"0px"}}>
              <ul class="list-group" style={{width:"290px"}}>
                <li class="list-group-item active btn btn-danger">Giảm sốc</li>
                    {this.state.product.map( tutorial =>
                     <li class="list-group-item">
                     <li class="row" >
                     <div className="col-md-3">
                  <div className="product-all mt-1" >
                  <span className="badge badge-danger" style={{position:"absolute"}}>-   {tutorial.percent}%</span>
                    <a href={"http://localhost:3000/product/" + tutorial.id}>
                      <img
                        src={"http://localhost:8080/images/" + tutorial.image}
                        className="image-product"
                        style={{ width: "270px", height: "200px" }}
                      />
                    </a>
                    <div className="product-name" style={{width:"270px"}}>
                      <a href={"http://localhost:3000/product/" + tutorial.id}style={{textDecoration:"none"}}>
                        {tutorial.name}
                      </a>
                    </div>
                    <div className="price-wrap">
                        <span class="price">
                          <NumberFormat
                            value={tutorial.priceNet}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </span>
                        <del class="price-old">
                          <NumberFormat
                            value={tutorial.price}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </del>
                        <img
                          src={"http://localhost:8080/images/sale.png"}
                          className="image-product"
                          style={{
                            width: "90px",
                            height: "50px",
                            marginLeft:"150px",
                            marginTop:"-50px"
                            
                          }}
                        />
                      </div>
                  </div>
             </div>
                    </li>
                    </li>

                      )}
              </ul>
            </div>
          </div> {/* row.// */}
          <br /><br />
          <a href="javascript: history.back()" className="btn btn-light"> «Trở về</a>
        </div> {/* container .//  */}
      </section>
      </div> 
      <HomeFooterComponent/>
      </div>
    );
  }
}
export default NewsDetailComponent;
