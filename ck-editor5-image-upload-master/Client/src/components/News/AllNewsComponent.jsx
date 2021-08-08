import React from "react";
import NewsService from "../../service/NewsService";
import { confirmAlert } from "react-confirm-alert";
import HomeHeaderComponent from "../Home/HomeHeaderComponent";
import HomeFooterComponent from "../Home/HomeFooterComponent";
import HomeProductDealsComponent from "../Home/HomeProductDealsComponent";
import CategoryService from "../../service/CategoryService";
import NumberFormat from 'react-number-format';
import ProductService from "../../service/ProductService";
class AllNewsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      currentPage: 1,
      size: 3,
      disabled1: "",
      disabled2: "",
      product:[],
      news:[], 
      newsright:[],
      sortnews:[]
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.findAll = this.findAll.bind(this);
    this.handlechange = this.handlechange.bind(this);
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  changcurrentPage(currentPage) {
    let condition = Math.ceil(this.state.totalElements / this.state.size);
    if (currentPage === 1) this.setState({ disabled1: "disabled" });
    else this.setState({ disabled1: " " });
    if (currentPage === condition) this.setState({ disabled2: "disabled" });
    else this.setState({ disabled2: " " });
  }
  previousPage() {
    if (this.state.currentPage > 1) this.state.currentPage -= 1;
    this.findAll(this.state.currentPage);
    this.changcurrentPage(this.state.currentPage);
  }
  nextPage() {
    let condition = Math.ceil(this.state.totalElements / this.state.size);
    if (this.state.currentPage < condition) this.state.currentPage += 1;
    this.findAll(this.state.currentPage);
    this.changcurrentPage(this.state.currentPage);
  }
  findAll(currentPage) {
    currentPage-=1;
    NewsService.getAdminNews(currentPage, this.state.size)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          content: data.content,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number + 1,
        });
      });
  }
  handlechange(){
    this.state.size+=2;
    this.findAll(this.state.currentPage);
  };
  componentDidMount() {
    this.changcurrentPage(this.state.currentPage);
    this.findAll(this.state.currentPage);
    ProductService.getProductSale(this.state.currentPage-1,6)
    .then((response) => response.data)
      .then((data) => {
        this.setState({
          product: data.content})
    })
    NewsService.getHotNews(this.getRandomInt(2),1).then((res) => res.data)
    .then((data) => {
      this.setState({
        news: data.content
      })
  })
    NewsService.getHotNews(this.state.currentPage,2).then((res) => res.data)
    .then((data) => {
      this.setState({
        newsright: data.content})
  })
  NewsService.getSortNews().then((res) => res.data)
    .then((data) => {
      this.setState({
        sortnews: data.content})
  })
  }
  render() {
    var i=0;
    return (
      <div>
        <HomeHeaderComponent />
        <body >
          <div className="row" style={{marginLeft:"10px", width:"1509px",marginTop:"20px"}}>
            <div className="col-md-2 border-listnew" >
              <ul class="list-group" style={{width:"190px"}}>
                <li class="list-group-item active btn btn-danger">Sản phẩm nổi bật</li>
               
                    {this.state.product.map( tutorial =>
                     <li class="list-group-item">
                     <li class="row" style={{}}>
                     <div className="col-md-3">
                  <div className="product-all mt-1">
                    <a href={"http://localhost:3000/product/" + tutorial.id}>
                      <img
                        src={"http://localhost:8080/images/" + tutorial.image}
                        className="image-product"
                        style={{ width: "170px", height: "110px" }}
                      />
                    </a>
                    <div className="product-name">
                      <a href={"http://localhost:3000/product/" + tutorial.id} style={{textDecoration:"none"}}>
                        {tutorial.name}
                      </a>
                    </div>
                    <div className="price-wrap">
                        <span class="price">
                          <NumberFormat
                            value={tutorial.price}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </span>
                        <img
                          src={"http://localhost:8080/images/sale.png"}
                          className="image-product"
                          style={{
                            width: "90px",
                            height: "50px",
                            marginLeft: "70px",
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
            <div className="col-md-7" style={{marginLeft:"-50px"}}>
              <div className="row">
              {this.state.news.map(ne=>
              <div className="col-lg-6 ">
              <div className="card bordernew" style={{ width: "36.5rem",height:"527px" }}>
                <img
                  className="card-img-top"
                  style={{height:"350px"}}
                  src={"http://localhost:8080/images/"+ne.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{ne.title}</h5>
                  <p
                    className="card-text"
                    style={{
                      fontSize: "13px",
                      float: "left",
                    }}
                  >
                   {ne.shortDescription}
                  </p>
                </div>
                <a href={"http://localhost:3000/news-"+(ne.id)}><div
                  className="btn btn-dark"
                  typeof="button"
                  style={{ width: "110px", marginLeft: "436px" }}
                >
                  Xem thêm <i class="fas fa-angle-double-right"></i>
                </div>
                </a>
              </div>
            </div>)}
            <div className="col-lg-3" style={{marginLeft:"115px"}}>
              {this.state.newsright.map(
                n=>
              <div className="row-md-4"style={{ width: "18rem",height:"210px" }}>
              <div className="card bordernew" >
              <a href={"http://localhost:3000/news-"+(n.id)}><img
                  className="card-img-top"
                  style={{ width: "268px", height: "160px" }}
                  src={"http://localhost:8080/images/"+n.image}
                  alt="Card image cap"
                /></a>
                <div className="card-body"style={{height:"95px" }}>
                <a href={"http://localhost:3000/news-"+(n .id)}style={{textDecoration:"none"}}><h6 className="card-title ">{n.title}</h6></a>
                </div>
              </div>
              </div>
                )}      
            </div>
                {this.state.content.map((listnew) => (
                 <article className="card card-product-list" key={listnew.id} style={{marginLeft:"13px",marginTop:"10px",width:"825px",marginRight:"10px",height:"230px"}}>
                 <div className="row no-gutters">
                     <aside className="col-md-3">
                         <a href={"http://localhost:3000/news-"+listnew.id} className="img-wrap">
                            
                             <img src={"http://localhost:8080/images/"+listnew.image} style={{padding: '1rem 1rem'}}/>
                         </a>
                     </aside> {/* col.// */}
                     <div className="col-md-9">
                         <div className="info-main">
                             <a href={"http://localhost:3000/news-"+listnew.id} className="h5 title" style={{textDecoration:"none"}} > {listnew.title}</a>
                             <div className="rating-wrap mb-2">
                                 <ul className="rating-stars">
                                     <li style={{ width: '100%' }} className="stars-active">
                                         <i className="fa fa-star" /> <i className="fa fa-star" />
                                         <i className="fa fa-star" /> <i className="fa fa-star" />
                                         <i className="fa fa-star" />
                                     </li>
                                     <li>
                                         <i className="fa fa-star" /> <i className="fa fa-star" />
                                         <i className="fa fa-star" /> <i className="fa fa-star" />
                                         <i className="fa fa-star" />
                                     </li>
                                 </ul>
                                 <div className="label-rating">9/10</div>
                             </div> {/* rating-wrap.// */}
                             
                             <p className="mb-3">
                                 <span className="tag"> <i className="fa fa-check" /> Xác minh</span>
                                 <span className="tag"> {listnew.reviews} Lượt xem </span>
                             </p>
                             <p className="d"> {listnew.shortDescription}</p>
                         </div> {/* info-main.// */}
                     </div> {/* col.// */}
                     
                 </div> {/* row.// */}
             </article> 
                ))}
              </div>
            </div>
            <div className="col-md-3 border-listnew" style={{marginLeft:"-35px"}}>
              <ul class="list-group" style={{width:"310px"}}>
                <li class="list-group-item active btn btn-danger">Xem nhiều nhất</li>
               
                    {this.state.sortnews.map( tutorial =>
                    <li class="list-group-item">
                     <li class="row">
                     <div className="col-md-3 ">
                       <a href={"http://localhost:3000/news-" + tutorial.id}>
                      <button type="button" class="btn btn-danger btn-circle btn-lg"><i class="glyphicon glyphicon-list"></i><b>{i+=1}</b></button>
                  </a>
             </div>
             <div className="col-md-9">
             <a href={"http://localhost:3000/news-" + tutorial.id} style={{textDecoration:"none"}}><h6>{tutorial.title}</h6> </a>
                    </div>
                    </li>
                    </li>
                   
                      )}
              </ul>
              <ul class="list-group" style={{width:"310px"}}>
                     <li class="list-group-item">
                     <b>Dịch vụ</b>
                     <li class="row">
                     <div className="col-md-3 " style={{marginTop:"-17px"}}>
                     <div className="product-item" style={{marginLeft:"90px", marginTop:"20px"}}>
                <a href={"./care/"}>
                  <div className="product-image" style={{width:"280px"}}>
                    <a href={"./care/"}>
                      <img
                        style={{width:"280px",height:"100px" }}
                        src={"https://global.yamaha-motor.com/business/mc/customer-support/img/index_key_002.jpg"}
                        alt="logo"
                      />
                      
                    </a>
                    <div className="product-action">
                      <button style={{fontSize:"20px",backgroundColor: "transparent",border:"0px",textTransform:"uppercase",color:"white",fontFamily: 'Roboto Condensed, sans-serif'}} href={"./product/"}>
                        Chăm sóc khách hàng
                      </button>
                    </div>
                  </div>
                  </a>
                </div>
                <div className="product-item" style={{marginLeft:"90px", marginTop:"20px"}}>
                <a href={"./test/"}>
                  <div className="product-image" style={{width:"280px"}}>
                    <a href={"./test/"}>
                      <img
                        style={{width:"280px",height:"100px" }}
                        src={"https://yamaha-motor.com.vn/wp/wp-content/webp-express/webp-images/doc-root/wp/wp-content/uploads/2019/06/Untitled-2.jpg.webp"}
                        alt="logo"
                      />
                      
                    </a>
                    <div className="product-action">
                      <button style={{fontSize:"20px",backgroundColor: "transparent",border:"0px",textTransform:"uppercase",color:"white",fontFamily: 'Roboto Condensed, sans-serif'}} href={"./product/"}>
                        Bảo hành
                      </button>
                    </div>
                  </div>
                  </a>
                </div>
                <div className="product-item" style={{marginLeft:"90px", marginTop:"20px"}}>
                <a href={"./free/"}>
                  <div className="product-image" style={{width:"280px"}}>
                    <a href={"./free/"}>
                      <img
                        style={{width:"280px",height:"100px" }}
                        src={"https://yamaha-motor.com.vn/wp/wp-content/webp-express/webp-images/doc-root/wp/wp-content/uploads/2019/06/Untitled-22.jpg.webp"}
                        alt="logo"
                      />
                      
                    </a>
                    <div className="product-action">
                      <button style={{fontSize:"20px",backgroundColor: "transparent",border:"0px",textTransform:"uppercase",color:"white",fontFamily: 'Roboto Condensed, sans-serif'}} href={"./product/"}>
                        Bảo dưỡng định kì
                      </button>
                    </div>
                  </div>
                  </a>
                </div>
                    </div>
                    </li>
                    </li>
              </ul>
              </div>
          </div>
          <ul className="pagination" style={{marginLeft:"700px", marginTop:"20px"}}>
            <li className={"page-item " + this.state.disabled2}>
              {" "}
              <button className="page-link" href="#" onClick={this.handlechange}>
                <b>Xem thêm</b> <i class="fas fa-angle-double-right"></i>
              </button>
            </li>
          </ul>
        </body>
        <HomeFooterComponent />
      </div>
    );
  }
}
export default AllNewsComponent;

