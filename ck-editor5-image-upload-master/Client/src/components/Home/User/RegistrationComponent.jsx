import React from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../../../service/AuthService";
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

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Không phải là Email!
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
       Tên đăng nhập phải từ 3 đến 20 kí tự!
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



class RegistrationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordConfig = this.onChangePasswordConfig.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.state = {
      username: "",
      email: "",
      password: "",
      firstname:"",
      lastname:"",
      address:"",
      phone:"",
      successful: false,
      message: "",
      passwordconfig:""
    };
  }
  onChangePhone(e){
      this.setState({
        phone: e.target.value
      });
  }
  onChangePasswordConfig(e) {
    this.setState({
      passwordconfig: e.target.value
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
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.firstname,
        this.state.lastname,
        this.state.address,
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.phone
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    const vphone = value => {
      if (value === null) {
        return (
          <div className="alert alert-danger" role="alert">
           Cần nhập số điện thoại!
          </div>
        );
      }
    };
    const vpasswordconfig = value => {
      if (value !== this.state.password) {
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
      <section className="section-content padding-y" style={{marginTop: '20px'}}>
  {/* ============================ COMPONENT REGISTER   ================================= */}
  <div className="card mx-auto" style={{maxWidth: '520px', marginTop: '20px'}}>
    <article className="card-body">
      <header className="mb-4"><h4 className="card-title">Đăng kí</h4></header>

        <Form
          onSubmit={this.handleRegister}
          ref={c => {
            this.form = c;
          }}
        >
          {!this.state.successful && (
            <div>
               <div className="form-group">
                <label htmlFor="username">Họ</label>
                <Input
                  type="text"
                  className="form-control"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.onChangeFirstname}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Tên</label>
                <Input
                  type="text"
                  className="form-control"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.onChangeLastname}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Địa chỉ</label>
                <Input
                  type="text"
                  className="form-control"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChangeAddress}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Tên đăng nhập</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  validations={[required, email]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Số điện thoại</label>
                <Input
                  type="number"
                  className="form-control"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChangePhone}
                  validations={[required, vphone]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mật khẩu</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Xác nhận mật khẩu</label>
                <Input
                  type="password"
                  className="form-control"
                  name="passwordconfig"
                  onChange={this.onChangePasswordConfig}
                  validations={[required, vpasswordconfig]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Đăng kí</button>
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
  <p className="text-center mt-4">Bạn đã có tài khoản? <a href="http://localhost:3000/login" style={{textDecoration:"none"}}>Đăng nhập</a></p>
  <br /><br />
  {/* ============================ COMPONENT REGISTER  END.// ================================= */}
</section>
</body>
      <HomeFooterComponent/>
    </div>
  );
}
}
export default RegistrationComponent