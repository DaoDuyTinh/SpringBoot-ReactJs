import React from 'react';
import ProductService from '../../service/ProductService';
import HeaderComponent from '../Admin/HeaderComponent';
import FooterComponent from '../Admin/FooterComponent';
import BodyComponent from '../Admin/BodyComponent';
import { confirmAlert } from 'react-confirm-alert';
class ListProductComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
        currentPage: 1,
        size: 10,
        disabled1:'',
        disabled2:'',
        product:[]
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.nextPage = this.nextPage.bind(this);
      this.previousPage = this.previousPage.bind(this);
      this.findAll = this.findAll.bind(this);
      this.handlechange = this.handlechange.bind(this);
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
      ProductService.getProduct(currentPage,this.state.size)
      .then(response => response.data)
      .then((data) => {
        this.setState({product: data.content,
          totalPages:data.totalPages,
          totalElements: data.totalElements,
          currentPage:data.number+1});
        });
    }
    componentDidMount(){
      this.changcurrentPage(this.state.currentPage);    
      this.findAll(this.state.currentPage);
    }
     handlechange= async(event)=>{
      await this.setState({size: parseInt(event.target.value)})
      await this.findAll(this.state.currentPage);
  }
    addProduct(){
      this.props.history.push('/admin-add-product');
    }
    editProduct(id){
      this.props.history.push('/admin-update-product/'+id);
    }
    salient(id){
      this.props.history.push('/admin-salient/'+id);
    }
    deleteProduct(id){
      ProductService.deleteProduct(id).then((res)=>{
        this.setState({product: this.state.product.filter( pro => pro.id !== id)});
      })
    }delete(id){
      confirmAlert({
        message: 'Bạn muốn xóa sản phẩm này.',
        buttons: [
          {
            label: 'OK',
            onClick: () => this.deleteProduct(id),
            
          },
          {
            label: 'Hủy',
            onClick: () => this.onClose
          }
        ]
      });
    }
    onClose(){
    }
    render (){
        return (
          <body id="page-top">
          <div id="wrapper">
         <HeaderComponent/>
         <div id="content-wrapper" className="d-flex flex-column">
         <BodyComponent/>
         
            <div className="container-fluid">
  <h1 className="h3 mb-2 text-gray-800">Danh sách sản phẩm</h1>
  <div className="card shadow mb-4">
    <div className="card-header py-3">
      <button type="button" class="btn btn-success" onClick={this.addProduct}>Thêm Sản Phẩm Mới</button>
    </div>
    <div className="card-body">
    <label>Hiển thị 
    <select name="dataTable_length" onChange={this.handlechange} aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm" style={{width:"60px"}} >
    <option value="10" selected >10</option>
    <option value="25">25</option>
    <option value="50" >50</option>
    <option value="100">100</option>
    </select></label>
      <div className="table-responsive">
        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
          <thead>
            <tr>
            <th>STT</th>
              <th>Tên</th>
              <th>Hình ảnh</th>
              <th>Giá</th>
              <th>Kích thước</th>
              <th>Mã lực</th>
              <th>Phân khối</th>
              <th>Loại</th>
              <th col={3}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
          {this.state.product.map(
                pro =>
            <tr key = {pro.id}>
                <td>{pro.id}</td> 
              <td>{pro.name}</td>
              <td ><img src={"http://localhost:8080/images/"+pro.image} style={{width:"80px",height:"60px"}}/></td>
              <td>{pro.price}</td>
              <td>{pro.size}</td>
              <td>{pro.horsePower}</td>
              <td>{pro.massFraction}</td>
              <td>{pro.category.name}</td>
              <td>
              <button type="button" class="btn btn-success" onClick={() =>this.salient(pro.id)} >Tính năng</button>
              <button type="button" class="btn btn-info" onClick={() =>this.editProduct(pro.id)} style={{marginLeft: "2px"}}>Chỉnh sửa</button>
              <button type="button" class="btn btn-danger" onClick={() =>this.delete(pro.id)} style={{marginLeft: "2px"}}>Xóa</button>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <ul className="pagination"> 
  <li className={"page-item "+(this.state.disabled1)} ><button className="page-link" href="#" onClick={this.previousPage} >Trước</button></li>
  <li className="page-item active"><a className="page-link" href="#" value={this.state.currentPage} onChange={this.changcurrentPage}>{this.state.currentPage}</a></li>
  <li className={"page-item "+(this.state.disabled2)}> <button className="page-link" href="#"  onClick={this.nextPage}>Tiếp</button></li>
</ul>
</div>
</div>
</div>
<FooterComponent/>

    </body>
        )
    }
}
export default ListProductComponent
