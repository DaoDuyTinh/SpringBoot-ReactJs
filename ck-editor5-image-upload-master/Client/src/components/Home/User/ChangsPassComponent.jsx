import React from "react";
import AuthService from "../../../service/AuthService";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UserService from "../../../service/UserService";
import HomeFooterComponent from '../HomeFooterComponent';
import HomeHeaderComponent from '../HomeHeaderComponent';
const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          Bắt buộc!
        </div>
      );
    }
  };  
  const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
        Mật khẩu phải từ 6 đến 40 kí tự!
        </div>
      );
    }
  };
  const vnPass = value => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
        Mật khẩu phải từ 6 đến 40 kí tự!
        </div>
      );
    }
  };
  
class ChangPassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      userReady: false,
      id:'',
      loading: false,
      message: "",
      password:'',
      newpassword:'',
      user:[]
    };
    this.updateUser = this.updateUser.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeNewPass = this.onChangeNewPass.bind(this);
  }
  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    this.setState({ currentUser: currentUser, userReady: true});
    UserService.getUserById(currentUser.id).then((response) => {
      let user = response.data;
      this.setState({id:user.id, user:user});
  });
}
  onChangeNewPass(e){
    this.setState({
      newpassword: e.target.value
    });
}
  onChangePassword(e){
    this.setState({
      password: e.target.value
    });
}
updateUser=(e)=> {
  e.preventDefault(); 
      console.log('user => '+ JSON.stringify(this.state.user));
      this.setState({
        message: "",
        loading: true
      });
  
      this.form.validateAll();
  
      if (this.checkBtn.context._errors.length === 0) {
        UserService.updatePassWord(this.state.id,this.state.newpassword).then(
          (res) => {
            alert("Đổi mật khẩu thành công")
            this.props.history.push('/profile');
            window.location.reload();
          },
          error => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            this.setState({
              loading: false,
              message: resMessage
            });
          }
        );
      } else {
        this.setState({
          loading: false
        });
      } 
}
cancel(){
  this.props.history.push('/profile');
}
  render() {
    const vpasswordconfig = value => {
        if (value !== this.state.newpassword) {
          return (
            <div className="alert alert-danger" role="alert">
              Mật khẩu chưa đúng!
            </div>
          );
        }
      };
    return (
      <div>
      <HomeHeaderComponent/>
    <body >
    <div className="container" style={{marginTop:"50px"}}>
    <div className="row">
    <aside className="col-md-3">
        <nav className="list-group">   
          <a className="list-group-item " href="http://localhost:3000/profile"style={{color:"#ae0d0d",textDecoration:"none"}}> Thông tin </a>
          <a className="list-group-item " href="http://localhost:3000/myorder"style={{color:"#ae0d0d",textDecoration:"none"}}>Đơn hàng của tôi</a>
          <a className="list-group-item active" href="http://localhost:3000/changepass"style={{backgroundColor:"#ae0d0d",color:"white",textDecoration:"none"}}> Thay đổi mật khẩu </a>
        </nav>
      </aside> {/* col.// */}
      <main className="col-md-9">
        <section className="section-content padding-y" style={{marginTop:"-30px", width:"70%"}}>
        {/* ============================ COMPONENT REGISTER   ================================= */}
        <div className="card mx-auto">
          <article className="card-body">
            <header className="mb-4"><h4 className="card-title">Đổi mật khẩu</h4></header>
      
              <Form
                onSubmit={this.updateUser}
                ref={c => {
                  this.form = c;
                }}
              >
                {!this.state.successful && (
                  <div>
                    
                    <div className="form-group">
                      <label htmlFor="Mật khẩu mới">Mật khẩu mới </label>
                      <Input
                        type="password"
                        className="form-control"
                        name="newpass"
                        value={this.state.newpass}
                        onChange={this.onChangeNewPass}
                        validations={[required, vnPass]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Nhập lại mật khẩu">Xác nhận mật khẩu</label>
                      <Input
                        type="password"
                        className="form-control"
                        name="passwordconfig"
                        onChange={this.onChangePasswordConfig}
                        validations={[required, vpasswordconfig]}
                      />
                    </div>
      
                    <div className="form-group">
                      <button className="btn btn-primary btn-block">Lưu mật khẩu</button>
                      <button className="btn btn-light btn-block" onClick={this.cancel.bind(this)}>Trở về</button>
                    </div>
                  </div>
                )}
      
                {this.state.message && (
                  <div className="form-group">
                    <div
                      className={
                        this.state.successful
                          ? "alert alert-success"
                          : "alert alert-danger"
                      }
                      role="alert"
                    >
                      {this.state.message}
                    </div>
                  </div>
                )}
                <CheckButton
                  style={{ display: "none" }}
                  ref={c => {
                    this.checkBtn = c;
                  }}
                />
              </Form>
              </article>{/* card-body.// */}
        </div> {/* card .// */}      
        <br /><br />
        {/* ============================ COMPONENT REGISTER  END.// ================================= */}
      </section>
      </main>
      </div>
      </div>
      </body>
      <HomeFooterComponent/>
    </div>
    
    )}
}
export default ChangPassComponent;
