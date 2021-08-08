import React from "react";
import AuthService from "../../service/AuthService";
import { form } from "react-validation/build/form";
import NumberFormat from "react-number-format";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import {
  total,
  list,
  quantity,
  add,
  remove,
  onChange,
} from "cart-localstorage";
import UserService from "../../service/UserService";
import OrderService from "../../service/OrderService";
import HomeHeaderComponent from "../Home/HomeHeaderComponent";
import HomeFooterComponent from "../Home/HomeFooterComponent";
const tong = total();
class OrderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: list(),
      redirect: null,
      userReady: false,
      id:'',
      username:'',
      firstname:'',
      lastname:'',
      email:'',
      address:'',
      phone:'',
      password:'',
    };
    this.updateUser = this.updateUser.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
  }
  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    this.setState({ currentUser: currentUser, userReady: true});
    UserService.getUserById(currentUser.id).then((response) => {
      let user = response.data;
      this.setState({id:user.id,username:user.username,firstname:user.firstname,lastname:user.lastname,email:user.email,address:user.address,phone:user.phone,password:user.password});
      console.log(JSON.stringify(this.state.cart));
  });
  }
  onChangePhone(e){
    this.setState({
      phone: e.target.value
    });
}
onChangeAddress(e) {
  this.setState({
    address: e.target.value
  });
}
onChangeFirstname(e) {
  this.setState({
    firstname: e.target.value
  });
}
onChangeLastname(e) {
  this.setState({
    lastname: e.target.value
  });
}

onChangeEmail(e) {
  this.setState({
    email: e.target.value
  });
}

updateUser=(e)=> {
  e.preventDefault();
      let user = {username:this.state.username,firstname: this.state.firstname, lastname: this.state.lastname, address:this.state.address,phone:this.state.phone,email:this.state.email,password:this.state.password};
      console.log('cart => '+ JSON.stringify(this.state.cart));
      UserService.updateUser(user,this.state.id);
      OrderService.createOrder(this.state.cart,this.state.id).then((res) => {
        alert("Thanh toán thành công");
        localStorage.removeItem("__cart");
        this.props.history.push('/');
        window.location.reload();
      });
      
}
cancel(){
  this.props.history.push('/cart');
}

  render() {
    const { currentUser } = this.state;
    return (
      <div>
          <HomeHeaderComponent/>
        <body >
      <div className="container"style={{marginTop:"20px"}}>
        <section className="section-content padding-y" style={{marginLeft:"-110px", width:"90%",marginRight: "-200px",float:"left"}}>
          <div className="">
            <div className="row">
              <main className="col-md-9">
                <div className="card">
                  <table className="table table-borderless table-shopping-cart">
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Sản phẩm</th>
                        <th scope="col" width={120}>
                          Đơn giá
                        </th>
                        <th scope="col" width={120}>
                          Số lượng
                        </th>
                        <th scope="col" width={120}>
                          Tổng
                        </th>
                        <th scope="col" className="text-right" width={200}>
                          {" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.cart.map((item) => (
                        <tr>
                          <td>
                            <figure className="itemside">
                              <div className="aside" key={item.id}>
                              <a href={"http://localhost:3000/product/"+(item.id)}> <img src={"http://localhost:8080/images/"+item.image} className="img-sm" /></a>
                              </div>
                              <figcaption className="info">
                                <a href={"http://localhost:3000/product/"+(item.id)} className="title text-dark" style={{textDecoration:"none"}}>
                                  {item.title}
                                </a>
                                <p className="text-muted small">
                                  {item.category}
                                </p>
                              </figcaption>
                            </figure>
                          </td>
                          <td>
                            <div className="price-wrap">
                              <var className="price">
                                <NumberFormat
                                  value={item.price}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </var>
                            </div>{" "}
                            {/* price-wrap .// */}
                          </td>
                          <td className="quanty-css">
                         <div> <a
                           
                              href=""
                              onClick={(e)=>this.AddCart(item.id,item.name,item.price,item.image,item.category.name,e)}
                            >
                          <i class="fa fa-chevron-circle-up" aria-hidden="true"></i>
                            </a></div>
                          <div>{item.quantity}</div>
                         <div> <a
                            
                              href=""
                              onClick={(e) => this.DeleteAddCart(item.id)}
                            >
                             <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
                            </a></div>
                          </td>
                          
                          <td>
                            <div className="price-wrap">
                              <var className="price">
                                <NumberFormat
                                  value={(item.price)*(item.quantity)}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </var>
                            </div>{" "}
                            {/* price-wrap .// */}
                          </td>
                          <td className="text-right">
                            <a
                              href=""
                              className="btn btn-danger"
                              onClick={(e) => this.RemoveAddCart(item.id)}
                            >
                              {" "}
                              Xóa
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>{" "}
                {/* card.// */}
                <div className="alert alert-success mt-3">
                  <p className="icontext">
                    <i className="icon text-success fa fa-truck" /> Thành tiền : <b><NumberFormat
                                  value={tong}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                /></b>
                  </p>
                </div>
              </main>{" "}
              {/* col.// */}
              {/* col.// */}
            </div>
          </div>{" "}
          {/* container .//  */}
        </section>
        {/* ========================= SECTION CONTENT END// ========================= */}
        {/* ========================= SECTION  ========================= */}
     
      <section className="section-content padding-y"style={{marginLeft:"500px", width:"85%"}}>
  <div className="container">
    <div className="row">
      <main className="col-md-9">
        <div className="card">
          <div className="card-body">
          <h5>Thông tin khách hàng</h5>
            <form className="row">
              <div className="col-md-9">
                <div className="form-row">
                  <div className="col form-group">
                    <label>Họ</label>
                    <input type="text" className="form-control" name="firstname" value={this.state.firstname} onChange={this.onChangeFirstname}/>
                  </div> {/* form-group end.// */}
                  <div className="col form-group">
                    <label>Tên</label>
                    <input type="text" className="form-control" name="lastname"value={this.state.lastname} onChange={this.onChangeLastname}/>
                  </div> {/* form-group end.// */}
                </div> {/* form-row.// */}
                <div className="form-row">
                <div className="col form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email"value={this.state.email} onChange={this.onChangeEmail} />
                  </div> {/* form-group end.// */}
                  <div className="form-group col-md-6">
                    <label>Địa chỉ</label>
                    <input type="text" className="form-control" name="address"value={this.state.address} onChange={this.onChangeAddress}/>
                  </div> {/* form-group end.// */}
                </div> {/* form-row.// */}
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Số điện thoại</label>
                    <input type="number" className="form-control"  name="phone" value={this.state.phone} onChange={this.onChangePhone} />
                  </div> {/* form-group end.// */}
                </div> {/* form-row.// */}
                <button className="btn btn-primary" onClick={this.updateUser}>Tiếp tục</button>	
                <button className="btn btn-light" onClick={this.cancel.bind(this)}>Trở về</button>	
                <br /><br /><br /><br /><br /><br />
              </div> {/* col.// */}
            </form>
          </div> {/* card-body.// */}
        </div> {/* card .// */}
      </main> {/* col.// */}
    </div>
  </div> {/* container .//  */}
</section>

</div>
</body>
<HomeFooterComponent/>
</div>
    )}
}
export default OrderComponent;
