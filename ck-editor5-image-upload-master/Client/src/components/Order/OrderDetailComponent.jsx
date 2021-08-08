import React from 'react';
import OrderService from '../../service/OrderService';
import NumberFormat from "react-number-format";
import HeaderComponent from '../Admin/HeaderComponent';
import FooterComponent from '../Admin/FooterComponent';
import BodyComponent from '../Admin/BodyComponent';
class OrderDetailComponent extends React.Component{
  constructor(props){
    super(props)
    this.state={
            id: this.props.match.params.id,
            orderdetail:[]
    }
    this.addNews = this.addNews.bind(this);
    this.getOrder= this.getOrder.bind(this);
}
componentDidMount(){
    OrderService.getOrderDetailsbyOrderId(this.state.id).then((res) =>{
        this.setState({orderdetail: res.data});
    });
}
addNews(){
  this.props.history.push('/admin-add-news');
}
getOrder(id){
  this.props.history.push('/admin-get-orderdetail/'+id);
}
deleteCategory(id){
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
          <th>Sản phẩm</th>
          <th>Thương hiệu</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>Tổng tiền</th>
        </tr>
      </thead>
      <tbody>
      {this.state.orderdetail.map(
            cate =>
        <tr key = {cate.id}>
          <td>{cate.id_orderdetail}</td>
          <td><img src={"http://localhost:8080/images/"+(cate.image)} style={{width:"80px",height:"60px"}}/></td>
          <td>{cate.category}</td>
          <td><NumberFormat
            value={(cate.price)}
            displayType={"text"}
            thousandSeparator={true}/></td>
          <td>{cate.quantity}</td>
          <td><NumberFormat
            value={(cate.price)*(cate.quantity)}
            displayType={"text"}
         thousandSeparator={true}/></td>
        </tr>)}
      </tbody>
    </table>
  </div>
</div>
</div>
</div>
</div>
</div>
<FooterComponent/>

    </body>
    )
}
}
export default OrderDetailComponent;
