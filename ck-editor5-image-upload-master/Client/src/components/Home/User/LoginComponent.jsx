import React from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "./../../../service/AuthService";
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

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
      admin:["ROLE_ADMIN"],
      user:["ROLE_USER"]
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });
    
    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          const user =JSON.parse(localStorage.getItem("user"));
          console.log(user.roles);
          if(user.roles.includes("ROLE_ADMIN"))
          {
            this.props.history.push("/admin");
            window.location.reload();
          }
         else
          {
            this.props.history.goBack();
        }
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
            message: "Nhập sai tài khoản hoặc mật khẩu"
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div>
      <HomeHeaderComponent/>
    <body >
      <section className="section-content padding-y"style={{marginTop:"40px"}}>
      {/* ============================ COMPONENT REGISTER   ================================= */}
      <div className="card mx-auto" style={{maxWidth: '520px', marginTop: '40px'}}>
        <article className="card-body">
          <header className="mb-4"><h4 className="card-title">Đăng nhập</h4></header>

          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Tài khoản</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
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
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Đăng nhập</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
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
  <p className="text-center mt-4">Bạn chưa có tài khoản? <a href="http://localhost:3000/registration">Đăng kí</a></p>
  <br /><br />
  {/* ============================ COMPONENT REGISTER  END.// ================================= */}
</section>
</body>
      <HomeFooterComponent/>
    </div>
    );
  }
}

export default LoginComponent