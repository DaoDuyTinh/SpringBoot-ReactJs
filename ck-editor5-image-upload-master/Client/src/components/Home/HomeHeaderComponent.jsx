import React from 'react';
import AuthService from "../../service/AuthService";
import DataContext from './../Context';
import { total, list, quantity, add, remove, onChange } from 'cart-localstorage'
import NumberFormat from 'react-number-format';
import { Redirect } from "react-router-dom";
const tong = total();
var tongsp = list().length;
const user=JSON.parse(localStorage.getItem("user"));
class HomeHeaderComponent extends React.Component{
  static contextType = DataContext;
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      userReady: false,
      currentUser: {username:""},
      name:''
    };
    this.logOut= this.logOut.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    this.setState({ currentUser: currentUser, userReady: true});
  }
  logOut() {
    AuthService.logout();
  }
  onSearch(e) {
    const value = e.target.value;
    var lowerCaseName = value.toLowerCase();
    this.setState({
      name: lowerCaseName,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ redirect: true });
  }
  render() {
    const { currentUser } = this.state;
    const { redirect, name } = this.state;
    if (redirect) {
      return <Redirect to={`/search/${name}`} />;
    }
        return (
  <header className="section-header">
    <section className="header-main">
      <div style={{marginLeft:'40px',marginRight:'40px'}}> 
        <div className="row align-items-center">
          <div className="col-md-3 col-lg-3 col-12">
            <a href="http://localhost:3000" className="brand-wrap">
              <img className="logo" src="http://localhost:8080/images/logo2.jpg" style={{height:"150px",width:"150px", marginLeft:"100px"}}/>
            </a> {/* brand-wrap.// */}
          </div>
          <div className="col-md-4 col-lg-5 col-12">
          <form
            action="#"
            className="search-header"
            onSubmit={this.handleSubmit}
          >
              <div className="input-group w-100">
            <input
              type="search"
              required="required"
              className="form-control"
              onChange={this.onSearch}
              placeholder="Tìm kiếm sản phẩm..."
            />

            <div className="input-group-append">
            <a
              href={`/search/${name}`}
              className="btn btn-primary"
              type="submit "
              
              value="Submit"
            >
               <i className="fa fa-search" />
            </a>
            </div>
            </div>
          </form>
          </div> {/* col.// */}
          <div className="col-md-5 col-lg-4 col-sm-12 col-12 text-md-right">
            <div className="mt-3 mt-md-0"> 
              
                  {currentUser
                    ? (<a href={"http://localhost:3000/profile"} className="btn btn-outline-primary"><span>{currentUser.username}</span></a>)
                    : (<a href={"http://localhost:3000/login"} className="btn btn-outline-primary">Đăng nhập</a>)
                } 
              {currentUser
                    ? <a href='http://localhost:3000' className='btn btn-primary' onClick={this.logOut}>Đăng xuất</a>
                    : <a href='http://localhost:3000/registration' className='btn btn-primary'>Đăng kí</a>
                }
              <a href={"http://localhost:3000/cart"} className="btn btn-light"> <i class="fa fa-shopping-cart" aria-hidden="true"></i><span className="ml-2 badge badge-warning">
                <NumberFormat value={tongsp} displayType={"text"} thousandSeparator={true}/></span>
              </a>  
              <button className="btn float-right btn-light d-md-none" type="button" data-toggle="collapse" data-target="#main_nav8" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars" />
              </button>
            </div>
          </div> {/* col.// */}
        </div> {/* row.// */}
      </div> {/* container.// */}
    </section> {/* header-main .// */}
    <div style={{backgroundColor:"#920d0d",marginBottom:'-20px',height:"52px"}}>
        <div className="nav-item" style={{marginLeft:"125px"}}>

            <nav className="nav-menu mobile-menu" style={{display:"flex",}}>
              <ul>
                <li className="active" >
                  <a href="/"style={{fontSize:"14px",fontWeight:"bold",textDecoration:"none"}}><i class="fa fa-home fa-6" aria-hidden="true"></i> Trang chủ</a>
                </li>
                <li>
                  <a href="#"style={{fontSize:"14px",fontWeight:"bold",textDecoration:"none"}}><i class="fa fa-motorcycle" aria-hidden="true"></i> Thương hiệu</a>
                  <ul className="dropdown">
                    <li>
                      <a href="http://localhost:3000/category/1"style={{fontSize:"14px",fontWeight:"bold",textDecoration:"none"}}> Yamaha</a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/category/2"style={{fontSize:"14px",fontWeight:"bold",textDecoration:"none"}}> Honda</a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/category/3"style={{fontSize:"14px",fontWeight:"bold",textDecoration:"none"}}> Suzuki</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="http://localhost:3000/contact"style={{fontSize:"14px",fontWeight:"bold",textDecoration:"none"}}><i class="fa fa-commenting" aria-hidden="true"></i> Liên hệ</a>
                </li>
                <li>
                  <a href="http://localhost:3000/news"style={{fontSize:"14px",fontWeight:"bold",textDecoration:"none"}}><i class="fa fa-newspaper-o" aria-hidden="true"></i> Tin tức</a>
                </li>
                
                <li>
                  <a href="http://localhost:3000/service"style={{fontSize:"14px",fontWeight:"bold",textDecoration:"none"}}><i class="fa fa-wrench" aria-hidden="true"></i> Dịch vụ</a>
                </li>
                <li>
                  <a href="http://localhost:3000/accessall"style={{fontSize:"14px",fontWeight:"bold",textDecoration:"none"}}><i class="fa fa-cogs" aria-hidden="true"></i> Phụ kiện</a>
                </li>
                <li>
                  <a href="#"style={{fontSize:"14px",fontWeight:"bold",textDecoration:"none"}}><i class="fa fa-tasks" aria-hidden="true"></i> Lựa chọn</a>
                  <ul className="dropdown">
                  <li>
                      <a href="http://localhost:3000/myorder"style={{fontSize:"14px",fontWeight:"bold",textDecoration:"none"}}> Đơn hàng</a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/profile"style={{fontSize:"14px",fontWeight:"bold",textDecoration:"none"}}> Thông tin tài khoản</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div id="mobile-menu-wrap" />
          </div>
        </div>
  </header>       
        )
    }
}
export default HomeHeaderComponent