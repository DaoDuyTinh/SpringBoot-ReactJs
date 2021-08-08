import React from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "./../../../service/AuthService";
import HomeFooterComponent from '../HomeFooterComponent';
import HomeHeaderComponent from '../HomeHeaderComponent';
const user = JSON.parse(localStorage.getItem("user")); 
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Bắt buộc!
      </div>
    );
  }
};

class ConfigPassword extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: user.username,
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
         
            this.props.history.push("/changepass");
            
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
            message: "Nhập mật khẩu không chính xác"
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
          <header className="mb-4"><h4 className="card-title">Xác nhận mật khẩu</h4></header>

          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >

            <div className="form-group">
              <label htmlFor="password">Nhập mật khẩu cũ</label>
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
                <span>Tiếp tục</span>
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
  <br /><br />
  {/* ============================ COMPONENT REGISTER  END.// ================================= */}
</section>
</body>
      <HomeFooterComponent/>
    </div>
    );
  }
}

export default ConfigPassword