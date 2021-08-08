import ProductService from "./../../../service/ProductService";
import React from 'react';
import NumberFormat from 'react-number-format';
import { total, list, quantity, add, remove, onChange } from 'cart-localstorage'
import CategoryService from "../../../service/CategoryService";
import HomeProductDealsComponent from "../HomeProductDealsComponent";
import HomeFooterComponent from '../HomeFooterComponent';
import HomeHeaderComponent from '../HomeHeaderComponent';
class ProductByCategoryComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            content:[],
            currentPage: 1,
            size: 10,
            disabled1:'',
            disabled2:'',
            category:''
        }
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.findAll = this.findAll.bind(this);
        
    }
    changcurrentPage(currentPage){
      let condition = Math.ceil(this.state.totalElements/this.state.size);
      if(currentPage === 1)
      this.setState({disabled1:"disabled"});
      else
      this.setState({disabled1:" "});
    if(currentPage === condition)
      this.setState({disabled2:"disabled"});
      else
      this.setState({disabled2:" "});
    }
    previousPage(){
      if(this.state.currentPage>1)
        this.state.currentPage-=1;
        this.findAll(this.state.currentPage);    
        this.changcurrentPage(this.state.currentPage);    
    }
    nextPage (){
      let condition = Math.ceil(this.state.totalElements/this.state.size);
      if(this.state.currentPage<condition)
        this.state.currentPage+=1;
        this.findAll(this.state.currentPage);
        this.changcurrentPage(this.state.currentPage);    
    }
    findAll(currentPage){
      currentPage-=1;
      ProductService.getProductbyCate(this.state.id,currentPage,this.state.size)
      .then(response => response.data)
      .then((data) => {
        this.setState({content: data.content,
          totalPages:data.totalPages,
          totalElements: data.totalElements,
          currentPage:data.number+1});
        });
    }
    componentDidMount(){
      this.changcurrentPage(this.state.currentPage);    
      this.findAll(this.state.currentPage);
      CategoryService.getCategoryById(this.state.id).then((response) => {
        let category = response.data;
        this.setState({category:category.name
        })
    })
    }
    AddCart(id, name, price, image,category, e) { 
      add({ id: id, name: name, price: price, image: image ,category: category});
      onChange();
    }
    render (){
        return (
            <div>
                <HomeHeaderComponent/>
            
          <div style={{marginLeft:'40px',marginRight:'40px',marginTop:"20px"}} >
          <section className="padding-bottom-sm">
          <header className="section-heading heading-line">
            <h4 className="title-section text-uppercase">{this.state.category}</h4>
          </header>
          <div>
                <ul className="row no-gutters bordered-cols" style={{marginLeft:"120px", marginTop:"-50px"}}>
                {this.state.content.map((hotnew) => (
                 <div className="row" style={{marginTop:"70px"}}>
                      <div className="col-md-3" style={{marginLeft:"10px",marginRight:"13px", height:"300px"}} >
                    <div className="product-item">                
                      <div className="product-image">
                        <a href={"./product/" + hotnew.id}>
                        <span className="badge badge-danger" style={{position:"absolute"}}>Trả góp 0%</span>
                          <img
                            className="img-sm"
                            style={{ marginLeft: "-2px",width:"250px",height:"200px" }}
                            src={"http://localhost:8080/images/"+hotnew.image}
                            alt="logo"
                          />                          
                        </a>                        
                        <div className="product-action">
                          <a style={{width:"100px", backgroundColor:"#ae0d0d", borderColor:"#ae0d0d",textDecoration:"none"}} type="button" href={"./product/" + hotnew.id}>
                            Xem chi tiết
                          </a>
                        </div>                        
                      </div><div className="product-title title">
                      <a href={"./product/" + hotnew.id} style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}} className="text-muted">{hotnew.category.name}</a>
                      </div>
                      <div className="product-title title">
                        <a href={"./product/" + hotnew.id} style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}>{hotnew.name}</a>
                      </div>
                      <div className="product-title title">
                        <a href={"./product/" + hotnew.id} style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}><NumberFormat value={hotnew.price} displayType={'text'} thousandSeparator={true} /></a>
                      </div>
                      <div className="title" style={{textAlign:"center"}}>
                        <span className="price-old"href={"./product/" + hotnew.id} style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}><NumberFormat value={hotnew.install} displayType={'text'} thousandSeparator={true} /></span>
                        +<span className="badge badge-danger">Phụ kiện: 20%</span>
                      </div>
                      <div className="product-title title">
                      <ul className="rating-stars">
                <li style={{width: '100%'}} className="stars-active"> 
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
                      </div>                      
                    </div>                    
                  </div>
                 </div>
                  ))}
                </ul>
              </div>
        </section>
        <ul className="pagination" style={{marginTop:"50px"}}> 
  <li className={"page-item "+(this.state.disabled1)} ><button className="page-link" href="#" onClick={this.previousPage} >Trước</button></li>
  <li className="page-item active"><a className="page-link" href="#" value={this.state.currentPage} onChange={this.changcurrentPage}>{this.state.currentPage}</a></li>
  <li className={"page-item "+(this.state.disabled2)}> <button className="page-link" href="#"  onClick={this.nextPage}>Tiếp</button></li>
</ul>
                
        </div>  
        <HomeProductDealsComponent/>
                <HomeFooterComponent/>
        </div>  
        )
    }
}
export default ProductByCategoryComponent
