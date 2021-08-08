import React from 'react';
import ProductService from '../../../service/ProductService';
import Carousel from "react-elastic-carousel";
import NumberFormat from 'react-number-format';
import { total, list, quantity, add, remove, onChange } from 'cart-localstorage'
import HomeFooterComponent from '../HomeFooterComponent';
import HomeHeaderComponent from '../HomeHeaderComponent';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import AuthService from '../../../service/AuthService';
var price = 0;
class ProductDetailComponent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
              name:'',
              color:'',
              price:'',
              size:'',
              image:'',
              weight:'',
              productNumber:'',
              horsePower:'',
              massFraction:'',
              priceNet:'',
              percent:'',
              petrol:'',
              frontBrake:'',
              rearBrake:'',
              category:[],
              productimage:[],
              content:[],
              news:[],
              allquan:1,
              description:"",
              install:"",
              check:false,
              sale:"",
              salient:[],
              access:[],
              accesscheck:""
        }
        this.changeimage = this.changeimage.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.changehandle = this.changehandle.bind(this);
    }
    componentDidMount(){
      const currentUser = AuthService.getCurrentUser();

      this.setState({ currentUser: currentUser, userReady: true});
        ProductService.getProductById(this.state.id).then((res) =>{
            let product = res.data;
            this.setState({name: product.name, color: product.color, price: product.price, size: product.size, image: product.image,weight: product.weight,
                horsePower: product.horsePower, massFraction :product.massFraction, priceNet: product.priceNet, percent: product.percent,category: product.category,
                productimage: product.productimage,petrol:product.petrol,frontBrake:product.frontBrake,rearBrake:product.rearBrake,news:product.news,productNumber:product.productNumber,
              description:product.description,install:product.install,sale:product.sale,salient:product.salient, accesscheck:product.access});
        });
        ProductService.getProductRelated(this.state.id).then((res) =>{
          this.setState({content:res.data});
      });
      ProductService.getAccess(0,10).then(response => response.data)
      .then((data) => {
        this.setState({access: data.content
          
        });
    });     
    }
    changeimage(change){
        this.setState({image:change});
    }
  AddCart(id, title, price, image,category, e) { 
    const quan = Number(this.state.allquan);
    add({ id: id, title: title, price: price, image: image ,category: category},quan);
    onChange();
    alert("đã thêm vào giỏ hàng")
    window.location.reload();
  }
  handleValueChange = (e)=>{
    const value = e.target.value;
    this.setState({ allquan: value });
  }
  changehandle = (e)=>{
    if (this.state.check === false) this.setState({ check: true });
    else this.setState({ check: false });
  }
  next(){

  }
    render (){
      const { currentUser } = this.state;
        return (
          <div>
          <HomeHeaderComponent/>
        <body >
            <div style={{marginTop:"20px"}}>
  <section className="section-content bg-white padding-y">
    <div className="container">
      {/* ============================ ITEM DETAIL ======================== */}
      <div className="row">
        <aside className="col-md-6">
          <div className="card">
            <article className="gallery-wrap"> 
              <div className="img-big-wrap">
                <div><TransformWrapper>
                            <TransformComponent><img src={("http://localhost:8080/images/")+(this.state.image)}/></TransformComponent>
                          </TransformWrapper></div>
              </div> {/* slider-product.// */}
              <div className="thumbs-wrap">
                {this.state.productimage.map(
                  img =>
                  <a href="#" className="item-thumb"> <img src={("http://localhost:8080/images/")+(img.name) } style={{height: '150px', width:'176px',border: 'solid', borderWidth:'1px'}} onClick={() =>this.changeimage(img.name)}/></a>   
                )}
                
              </div> {/* slider-nav.// */}
            </article> {/* gallery-wrap .end// */}
          </div> {/* card.// */}
        </aside>
        <main className="col-md-6">
          <article className="product-info-aside">
            <h2 className="title mt-3">{this.state.name}</h2>
            <div className="rating-wrap my-3">
              <ul className="rating-stars">
                <li style={{width: '80%'}} className="stars-active"> 
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
              <small className="label-rating text-muted">132 Đánh giá</small>
              <small className="label-rating text-success"> <i className="fa fa-clipboard-check" /> Đã bán 154 </small>
            </div> {/* rating-wrap.// */}
            <div className="mb-3"> 
            {this.state.check
            ?<var className="price h4"><span>Giá: </span> <NumberFormat value={this.state.install*this.state.allquan} displayType={'text'} thousandSeparator={true} /> VND <span><i>(Đã gồm giấy tờ xe)</i></span></var>       
            :(this.state.sale)
              ?<var className="price h4"><span>Giá: </span><NumberFormat value={this.state.priceNet*this.state.allquan} displayType={'text'} thousandSeparator={true} /> VND</var>
              :<var className="price h4"><span>Giá: </span><NumberFormat value={this.state.price*this.state.allquan} displayType={'text'} thousandSeparator={true}  /> VND</var>}
               
            </div> {/* price-detail-wrap .// */}
           <span> { ReactHtmlParser(this.state.description) }</span>
            <dl className="row" style={{marginTop:"10px"}}>
              <dt className="col-sm-3">Nhà sản xuất:</dt>
              <dd className="col-sm-9"><a href={"http://localhost:3000/category/"+(this.state.category.id)}style={{fontSize:"14px",textDecoration:"none"}}>{this.state.category.name}</a></dd>
              <dt className="col-sm-3">Số sản phầm:</dt>
              <dd className="col-sm-9">{this.state.productNumber}</dd>
              <dt className="col-sm-3">Bảo hành:</dt>
              <dd className="col-sm-9">2 năm</dd>
              <dt className="col-sm-5">Thời gian nhận sản phẩm từ: </dt>
              <dd className="col-sm-7">4 - 6 ngày</dd>
              <dt className="col-sm-6">Bao gồm giấy tờ xe: <input type="checkbox" value={this.state.check} onChange={this.changehandle}/></dt>  
            </dl>
            <div className="form-row mt-4">
              <div className="form-group col-md flex-grow-0">
                <div className="input-group mb-3 input-spinner" style={{width:'120px'}}>
                  <div className="input-group-prepend">
                  <select className="form-control" style={{ width: "101px", marginTop: "5px",marginLeft:"8px",fontSize:"15px" }} onChange={this.handleValueChange}>
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10" >10</option>
                          </select>
                  </div>
                </div>
              </div> {/* col.// */}
              <div className="form-group col-md">
                <a href="#" className="btn btn-primary"onClick={(e)=>this.AddCart(this.state.id,this.state.name,this.state.price,this.state.image,this.state.category.name)}> 
                  <i className="fas fa-shopping-cart" /> <span className="text">Thêm vào giỏ hàng</span> 
                </a>
                <a href="http://localhost:3000/contact" className="btn btn-success" style={{marginLeft:"2px"}}>
                  <i className="fas fa-envelope" /> <span className="text">Liên hệ với cửa hàng</span> 
                </a>
                <div>
                  {currentUser
                  ?(<a href="http://localhost:3000/order" style={{marginTop:"10px", width:"376px"}} className="btn btn-danger"onClick={(e)=>this.AddCart(this.state.id,this.state.name,this.state.price,this.state.image,this.state.category.name)}> 
                  <span className="h3">Mua ngay</span> 
                </a>)
                :(
                  <a href="http://localhost:3000/login" style={{marginTop:"10px", width:"376px"}} className="btn btn-danger"onClick={(e)=>this.AddCart(this.state.id,this.state.name,this.state.price,this.state.image,this.state.category.name)}> 
                  <span className="h3">Mua ngay</span> 
                </a>
                )}
                  <div className="col-md bordernew" style={{marginTop:"10px",borderRadius:"5px",height:"70px",width:"405px", marginLeft:"-15px"}}>
                    <p className="alert alert-success mt-3" style={{paddingTop:"13px"}}> <i class="fa fa-truck" aria-hidden="true"></i> Miễn phí vận chuyển khi đặt mua trực tuyến
                    <br/><i class="fa fa-gift" aria-hidden="true"></i>  Được tặng bảo hiểm xe máy 1 năm</p>
                  </div>
                </div>
                
              </div> {/* col.// */}
            </div> {/* row.// */}
          </article> {/* product-info-aside .// */}
        </main> {/* col.// */}
      </div> {/* row.// */}
      {/* ================ ITEM DETAIL END .// ================= */}
    </div> {/* container .//  */}
  </section>
  {/* ========================= SECTION CONTENT END// ========================= */}
  {this.state.accesscheck
  ?(<p></p>)
:(<div style={{marginLeft:'80px',marginRight:'80px'}}>
<section className="padding-bottom titles">
<div class="border-title"> <span class="border-title__content">Tính năng nổi bật</span></div>
<Carousel itemsToShow={1}>
    {this.state.salient.map(
        pro =>
        <div className="row" style={{width:"1300px",marginTop:"10px",marginLeft:"40px",borderRadius:"5px",marginRight:"10px"}}>
   <div className="col-md-4">
            <img src={"http://localhost:8080/images/"+(pro.images)} style={{width:"380px",height:"270px"}}/>
       </div>
       <div className="col-md-8" style={{marginLeft:"0px"}}>
         <h3 style={{textAlign:"center",textTransform:"uppercase"}}><b>{pro.title}</b></h3>
       <span style={{paddingTop:"30px",fontSize:"18px"}}>{ ReactHtmlParser(pro.description) }</span>
              </div>
  </div>
    )}
  </Carousel>
</section>
</div>)}
  <section className="section-name padding-y bg">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h5 className="title-description">Thông số kĩ thuật</h5>
          <table className="table table-bordered">
            <tbody><tr> <th >Kích thướt</th><td colSpan={2}>{this.state.size} </td></tr>
                   <tr> <th >Khối lượng</th><td colSpan={2}>{this.state.weight} Kg</td></tr>
                   <tr> <th >Phân khối</th><td colSpan={2}>{this.state.massFraction} CC</td></tr>
                   <tr> <th >Mã lực</th><td colSpan={2}>{this.state.horsePower} kW</td></tr>
                   <tr> <th >Dung tích bình xăng</th><td colSpan={2}>{this.state.petrol} Lít</td></tr>
                   <tr> <th >Phanh trước</th><td colSpan={2}>{this.state.frontBrake}</td></tr>
                   <tr> <th >Phanh sau</th><td colSpan={2}>{this.state.rearBrake}</td></tr>
                   <tr> <th >Màu sắc</th><td colSpan={2}><td colSpan={2} style={{backgroundColor:(this.state.color),width:"50px"}}></td></td></tr>
                   <tr> <th >Hệ thống khởi động</th><td colSpan={2} >Khởi động điện</td></tr>
            </tbody></table>
        </div> {/* col.// */}
        <aside className="col-md-4" style={{marginTop:"28px"}}>
          <div className="box" style={{ height:"418px"}}>
            <h5 className="title-description">Tin tức</h5>
            {this.state.news.map(
              ne =>
              <article className="media mb-3"style={{height:"115px"}}>
              <a href={"http://localhost:3000/news/"+(ne.id)}><img className="img-sm mr-3" src={("http://localhost:8080/images/")+(ne.image)} style={{width:"100px",height:"100px"}}/></a>
              <div className="media-body">
                <h6 className="mt-0 g"><a href={"http://localhost:3000/news/"+(ne.id)} style={{fontSize:"14px",textDecoration:"none"}}>{ne.title}</a></h6>
                <p className="mb-2 "> <span className="f">{ne.shortDescription} </span></p>
              </div>
            </article>
              )}     
          </div> {/* box.// */}
        </aside> {/* col.// */}
      </div> {/* row.// */}
    </div> {/* container .//  */}
  </section>
  <div style={{marginLeft:'40px',marginRight:'40px'}}>
            <section className="padding-bottom">
            <header className="section-heading heading-line">
            <h4 className="title-section text-uppercase"style={{color:"#ae0d0d"}}>Phụ kiện liên quan</h4>
          </header>
            <div className="row row-sm">
            <Carousel itemsToShow={5}>
          {this.state.access.map(
              pro =>
              <div className="col-xl-2 col-lg-3 col-md-4 col-6" style={{marginLeft:"-60px"}}>
          <div href={"http://localhost:3000/product/"+(pro.id)} className="card card-sm card-product-grid"style={{width: '240px',marginLeft:'-100px'}}>
            <a href={"http://localhost:3000/product/"+(pro.id)} className="img-wrap"style={{width: '240px'}}> 
              <img src={"http://localhost:8080/images/"+(pro.image)} style={{width: '220px'}}/> 
            </a>
            <span className="badge badge-danger" style={{position:"absolute"}}>Mới 100%</span>
            <figcaption className="info-wrap">
            <div className="price-wrap">
                <del className="price-old" style={{fontSize:"17px",fontWeight:"bold"}}><NumberFormat value={pro.price} displayType={'text'} thousandSeparator={true} /> <span className="badge badge-danger" style={{marginLeft:"5px"}}> Giảm {pro.percent}%</span> </del> 
                <br></br><span><b>SL nhiều:</b> </span>
                <span class="price" style={{fontSize:"17px",fontWeight:"bold"}}><NumberFormat value={pro.install} displayType={'text'} thousandSeparator={true} /></span>
                <br></br><span><b>Theo xe:</b> </span>
                <span class="price" style={{fontSize:"17px",fontWeight:"bold"}}><NumberFormat value={pro.priceNet} displayType={'text'} thousandSeparator={true} /></span>
              </div> {/* price-wrap.// */}
            </figcaption>
          </div>
        </div>
          )}
        </Carousel>
            </div>
          </section>
          </div>
  <div style={{marginLeft:'40px',marginRight:'40px'}}>
            <section className="padding-bottom">
            <header className="section-heading heading-line">
            <h4 className="title-section text-uppercase"style={{color:"#ae0d0d"}}>Sản phẩm liên quan</h4>
          </header>
            <div className="row row-sm">
            <Carousel itemsToShow={5}>
          {this.state.content.map(
              pro =>
              <div className="col-xl-2 col-lg-3 col-md-4 col-6"style={{marginLeft:"-60px"}}>
          <div href={"http://localhost:3000/product/"+(pro.id)} className="card card-sm card-product-grid"style={{width: '240px',marginLeft:'-100px'}}>
            <a href={"http://localhost:3000/product/"+(pro.id)} className="img-wrap"style={{width: '240px'}}> 
              <img src={"http://localhost:8080/images/"+(pro.image)} style={{width: '220px'}}/> 
            </a>
            <span className="badge badge-danger" style={{position:"absolute"}}>Trả góp 0%</span>
            <figcaption className="info-wrap">
            <a href={"http://localhost:3000/product/"+(pro.id)} className="text-muted"style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}>{pro.category.name}</a>
              <a href={"http://localhost:3000/product/"+(pro.id)} className="title"style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}>{pro.name}</a>
              <div className="price-wrap">
              <span class="price"style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}><NumberFormat value={pro.price} displayType={'text'} thousandSeparator={true} /></span>
              </div> {/* price-wrap.// */}
            </figcaption>
          </div>
        </div>
          )}
        </Carousel>
            </div>
          </section>
          </div>
        </div>
      </body>
      <HomeFooterComponent/>
    </div>
        )
    }
}
export default ProductDetailComponent