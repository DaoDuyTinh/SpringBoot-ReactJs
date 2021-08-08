import React from 'react';
import OrderService from '../../service/OrderService';
import HeaderComponent from '../Admin/HeaderComponent';
import FooterComponent from '../Admin/FooterComponent';
import BodyComponent from '../Admin/BodyComponent';
import { confirmAlert } from 'react-confirm-alert';
import Moment from 'react-moment';
import 'moment-timezone';
class ListOrderComponent extends React.Component{
  constructor(props){
    super(props)
    this.state={
        content:[],
        currentPage: 1,
        size: 10,
        disabled1:'',
        disabled2:''
    }
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.findAll = this.findAll.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.addNews = this.addNews.bind(this);
    this.getOrder= this.getOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.delete = this.delete.bind(this);
    this.onClose = this.onClose.bind(this);
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
  OrderService.getAllOrderUser(currentPage,this.state.size)
  .then(response => response.data)
  .then((data) => {
    this.setState({content: data.content,
      totalPages:data.totalPages,
      totalElements: data.totalElements,
      currentPage:data.number+1});
    });
}
handlechange= async(event)=>{
  await this.setState({size: parseInt(event.target.value)})
  await this.findAll(this.state.currentPage);
}
componentDidMount(){
  this.changcurrentPage(this.state.currentPage);    
  this.findAll(this.state.currentPage);
}
addNews(){
  this.props.history.push('/admin-add-news');
}
getOrder(id){
  this.props.history.push('/admin-get-orderdetail/'+id);
}

deleteOrder(id){
  OrderService.deleteOrder(id).then((response) => {
    window.location.reload();
});
}  
delete(id){
  confirmAlert({
    message: 'Đơn hàng giao thành công.',
    buttons: [
      {
        label: 'OK',
        onClick: () => this.deleteOrder(id),
        
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
<h1 className="h3 mb-2 text-gray-800">Tất cả đơn hàng</h1>
<div className="card shadow mb-4">
<div className="card-header py-3">
</div>
<label>Hiển thị <select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm" style={{width:"60px"}}>
    <option value={10} selected onChange={this.handlechange}>10</option>
    <option value={25} onChange={this.handlechange}>25</option>
    <option value={50} onChange={this.handlechange}>50</option>
    <option value={100} onChange={this.handlechange}>100</option>
    </select></label>
<div className="card-body">
  <div className="table-responsive">
    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
      <thead>
        <tr>
            <th>ID</th>
          <th>Email</th>
          <th>Họ</th>
          <th>Tên</th>
          <th>Địa chỉ</th>
          <th>SĐT</th>
          <th>Thời gian</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
      {this.state.content.map(
            cate =>
        <tr key = {cate.id}>
          <td>{cate.id}</td>
          <td>{cate.user.email}</td>
          <td>{cate.user.firstname}</td>
          <td>{cate.user.lastname}</td>
          <td>{cate.user.address}</td>
          <td>0{cate.user.phone}</td>
          <td><Moment format="DD/MM/YYYY HH:mm:ss">{cate.orderDate}</Moment></td>
          <td><button type="button" class="btn btn-info" onClick={() =>this.getOrder(cate.id)}>Chi tiết</button>
          </td>
        </tr>)}
      </tbody>
    </table>
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
</div>
<FooterComponent/>

    </body>
    )
}
}
export default ListOrderComponent
