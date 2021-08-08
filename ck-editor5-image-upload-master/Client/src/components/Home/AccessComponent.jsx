import ProductService from "./../../service/ProductService";
import React from 'react';
import NumberFormat from 'react-number-format';
import { total, list, quantity, add, remove, onChange } from 'cart-localstorage'
import HomeProductDealsComponent from "./HomeProductDealsComponent";
import HomeFooterComponent from './HomeFooterComponent';
import HomeHeaderComponent from './HomeHeaderComponent';
class AccessComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            content:[],
            currentPage: 1,
            size: 12,
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
      ProductService.getAllAccess(this.state.id,currentPage,this.state.size)
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
            <h4 className="title-section text-uppercase">Phụ kiện</h4>
          </header>
          <div className="row row-sm">
            {this.state.content.map(
              pro =>
              <div className="col-xl-2 col-lg-3 col-md-4 col-6" style={{height:"400px"}}>
              <div className="card card-sm card-product-grid"style={{height:"350px"}}>
                <a href={"product/"+(pro.id)} className="img-wrap"> <img src={"http://localhost:8080/images/"+pro.image}/> </a>
                <figcaption className="info-wrap">
                <a href={"product/"+(pro.id)} className="text-muted" style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}>{pro.category.name}</a>
                  <a href={"product/"+(pro.id)} className="title" style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}>{pro.name}</a>
                  <div className="price mt-1" style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}><NumberFormat value={pro.price} displayType={'text'} thousandSeparator={true} />
                  <br></br><span><b> Theo xe:</b> </span>
                <span class="price" style={{fontSize:"17px",fontWeight:"bold",textDecoration:"none"}}><NumberFormat value={pro.priceNet} displayType={'text'} thousandSeparator={true} /></span></div> {/* price-wrap.// */}
                </figcaption>
              </div>
            </div> 
            )}
            </div>
        </section>
        <ul className="pagination"> 
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
export default AccessComponent
