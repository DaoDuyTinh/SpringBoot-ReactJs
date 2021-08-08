import React from 'react';
class HomeFooterComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render (){
        return (
  <footer className="section-footer border-top">
  <div className="container">
    <section className="footer-top padding-y">
      <div className="row">
        <aside className="col-md-4">
          <article className="mr-3">
          <a href="http://localhost:3000"><img className="logo-footer" src="http://localhost:8080/images/logo2.jpg" style={{height:"150px",width:"200px"}}/></a>
            <p className="mt-3"></p>
            <div>
              <a className="btn btn-icon btn-light" title="Facebook" target="_blank" href="#"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-icon btn-light" title="Instagram" target="_blank" href="#"><i className="fab fa-instagram" /></a>
              <a className="btn btn-icon btn-light" title="Youtube" target="_blank" href="#"><i className="fab fa-youtube" /></a>
              <a className="btn btn-icon btn-light" title="Twitter" target="_blank" href="#"><i className="fab fa-twitter" /></a>
            </div>
          </article>
        </aside>
        <aside className="col-sm-3 col-md-2">
          <h6 className="title">Chúng tôi</h6>
          <ul className="list-unstyled">
            <li> <a href="#">Về chúng tôi</a></li>
            <li> <a href="#">Dịch vụ</a></li>
            <li> <a href="#">Quy tắt và điều khoản</a></li>
            <li> <a href="#">Bài viết</a></li>
          </ul>
        </aside>
        <aside className="col-sm-3 col-md-2">
          <h6 className="title">Dịch vụ</h6>
          <ul className="list-unstyled">
            <li> <a href="#">Trung tâm hổ trợ</a></li>
            <li> <a href="#">Hoàn trả</a></li>
            <li> <a href="#">Điều khoản và chính sách</a></li>
            <li> <a href="#">Mở hướng trao đổi</a></li>
          </ul>
        </aside>
        <aside className="col-sm-3  col-md-2">
          <h6 className="title">Cho người dùng</h6>
          <ul className="list-unstyled">
            <li> <a href="#"> Đăng nhập </a></li>
            <li> <a href="#"> Đăng kí tài khoản </a></li>
            <li> <a href="#"> Cài đặt tài khoản </a></li>
            <li> <a href="#"> Đơn hàng của tôi </a></li>
            <li> <a href="#"> Danh sách yêu thích của tôi </a></li>
          </ul>
        </aside>
        <aside className="col-sm-2  col-md-2">
          <h6 className="title">Ứng dụng của chúng tôi</h6>
          <a href="#" className="d-block mb-2"><img src="http://localhost:3000/home/images/misc/appstore.png" height={40} /></a>
          <a href="#" className="d-block mb-2"><img src="http://localhost:3000/home/images/misc/playmarket.png" height={40} /></a>
        </aside>
      </div> {/* row.// */}
    </section>	{/* footer-top.// */}
    <section className="footer-copyright border-top">
      <p className="float-left text-muted"> © 2021 Mọi quyền lợi được công ty bảo lưu </p>
      <p target="_blank" className="float-right text-muted">
        <a href="#">Riêng tư &amp; Cookies</a> &nbsp;   &nbsp; 
        <a href="#">Khả năng tiếp cận</a>
      </p>
    </section>
  </div>{/* //container */}
</footer>          
        )
    }
}
export default HomeFooterComponent