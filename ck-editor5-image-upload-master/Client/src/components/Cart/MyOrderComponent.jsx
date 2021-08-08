import React from "react";
import AuthService from "../../service/AuthService";
import NumberFormat from "react-number-format";
import OrderService from "../../service/OrderService";
import HomeProductDealsComponent from "./../Home/HomeProductDealsComponent"
import HomeHeaderComponent from "../Home/HomeHeaderComponent";
import HomeFooterComponent from "../Home/HomeFooterComponent";
import { confirmAlert } from 'react-confirm-alert';
import Moment from 'react-moment';
import 'moment-timezone';
const tong = 0;
class MyOrderComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          id:0,
        order:[],
        orderdetail:[],
        currentUser:'',
        ord:[]
      };
      this.changeorderdetails = this.changeorderdetails.bind(this);
      this.deleteOrder = this.deleteOrder.bind(this);
      this.delete = this.delete.bind(this);
      this.onClose = this.onClose.bind(this);
    }
    componentDidMount() {
      const currentUser = AuthService.getCurrentUser();
      this.setState({ currentUser: currentUser, userReady: true});
    OrderService.getOrderByUserId(currentUser.id).then((response) => {
        this.setState({order:response.data});
    });
    }
    changeorderdetails(change){
    OrderService.getOrderDetailsbyOrderId(change).then((response) => {
        this.setState({orderdetail:response.data});
    });
    }
    deleteOrder(id){
      OrderService.deleteOrder(id).then((response) => {
        window.location.reload();
    });
    }  
    delete(id){
      confirmAlert({
        message: 'Bạn muốn hủy đơn hàng này.',
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
    render() {
        const{orderdetail}= this.state
      return (
        <div>
          <HomeHeaderComponent/>
        <body >
        <div style={{marginTop:"20px"}}>
        <div className="container"style={{width:"100%",paddingTop:"30px"}}>
            <div className="row" >
            <aside className="col-md-3">
        <nav className="list-group">   
          <a className="list-group-item " href="http://localhost:3000/profile"style={{color:"#ae0d0d",textDecoration:"none"}}> Thông tin </a>
          <a className="list-group-item active" href="http://localhost:3000/myorder"style={{backgroundColor:"#ae0d0d",color:"white",textDecoration:"none"}}>Đơn hàng của tôi</a>
          <a className="list-group-item " href="http://localhost:3000/config"style={{color:"#ae0d0d",textDecoration:"none"}}> Thay đổi mật khẩu </a>
        </nav>
      </aside> {/* col.// */}
      <main className="col-md-9">
        <table class="table table-striped">
        <thead>
    <tr>
      <th scope="col">Id Order</th>
      <th scope="col">Chi tiết</th>
      <th scope="col">Thời gian</th>
    </tr>
  </thead>
  <tbody>
      {this.state.order.map(
          or =><tr>
          <td>{or.id}</td>
          <td><button className="btn btn-primary" onClick={() =>this.changeorderdetails(or.id)} style={{backgroundColor:"#ae0d0d",color:"white"}}>Xem chi tiết</button></td>
          <td><Moment format="DD/MM/YYYY HH:mm:ss">{or.orderDate}</Moment></td>
        </tr>
      )}
    
  </tbody>
</table>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Sản phẩm</th>
      <th scope="col">Giá</th>
      <th scope="col">Số lượng</th>
      <th scope="col">Tổng</th>
    </tr>
  </thead>
  <tbody>
      {orderdetail
      ?(this.state.orderdetail.map(
        orde =><tr>
          <td>{orde.id_orderdetail}</td>
        <td><a href={"product/"+(orde.id)}></a><img src={"http://localhost:8080/images/"+orde.image} style={{width:"80px",height:"60px"}}/></td>
        <td><NumberFormat value={orde.price} displayType={'text'} thousandSeparator={true} /></td>
        <td>{orde.quantity}</td>
        <td><NumberFormat value={orde.quantity*orde.price} displayType={'text'} thousandSeparator={true} /></td>
      </tr>
      
      ))
      :(<td>chọn chi tiết Đơn hàng</td>)
    }
    <tr>
    <td></td>
    <td></td>
    <td></td>
    {/* <td>Tổng tiền: <b><NumberFormat value={tong} displayType={'text'} thousandSeparator={true} /> VND</b></td> */}
    </tr>  
  </tbody>
</table>
</main>
</div>

    </div>
    <HomeProductDealsComponent/>
    </div>
    </body>
<HomeFooterComponent/>
</div>
      )}
  }
  export default MyOrderComponent;
  