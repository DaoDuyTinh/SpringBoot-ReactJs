  import React from "react";
  import AuthService from "../../../service/AuthService";
  import {
    total,
    list,
    quantity,
    add,
    remove,
    onChange,
  } from "cart-localstorage";
  import HomeFooterComponent from '../HomeFooterComponent';
  import HomeHeaderComponent from '../HomeHeaderComponent';
  import UserService from "../../../service/UserService";
  class ProFileComponent extends React.Component {
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
        password:''
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
        console.log('user => '+ JSON.stringify(user));
        UserService.updateUser(user,this.state.id).then(
        response => {
          this.props.history.push('/profile');
        });
  }
  cancel(){
    this.props.history.push('/');
  }

    render() {
      const { currentUser } = this.state;
      return (
        <div>
        <HomeHeaderComponent/>
      <body >
        <section className="section-content padding-y"style={{marginTop:"20px"}}>
    <div className="container">
      <div className="row">
        <aside className="col-md-3">
          <nav className="list-group">   
            <a className="list-group-item " href="http://localhost:3000/profile" style={{backgroundColor:"#ae0d0d",color:"white",textDecoration:"none"}}> Thông tin </a>
            <a className="list-group-item " href="http://localhost:3000/myorder"style={{color:"#ae0d0d",textDecoration:"none"}}>Đơn hàng của tôi</a>
            <a className="list-group-item " href="http://localhost:3000/config"style={{color:"#ae0d0d",textDecoration:"none"}}> Thay đổi mật khẩu </a>
          </nav>
        </aside> {/* col.// */}
        <main className="col-md-9">
          <div className="card">
            <div className="card-body">
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
                      <label>Mật khẩu</label><br></br>
                      <a href="changepass" style={{marginLeft:"20px"}}>Thay đổi mật khẩu</a>
                    </div> {/* form-group end.// */}
                    <div className="form-group col-md-6">
                      <label>Số điện thoại</label>
                      <input type="number" className="form-control"  name="phone" value={this.state.phone} onChange={this.onChangePhone} />
                    </div> {/* form-group end.// */}
                  </div> {/* form-row.// */}
                  <button className="btn btn-primary" onClick={this.updateUser}>Lưu</button>	
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
  </body>
        <HomeFooterComponent/>
      </div>
      
      )}
  }
  export default ProFileComponent;
