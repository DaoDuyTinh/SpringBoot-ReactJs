import React from 'react';
import AuthService from '../../service/AuthService';
class HeaderComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentUser:'',
            userReady:''
        }
    }
    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        this.setState({ currentUser: currentUser, userReady: true});
    }
    render (){
        const {currentUser}= this.state
        return (
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/admin" style={{backgroundColor:"white"}}>
                <img className="logo" src="http://localhost:8080/images/logo2.jpg" style={{height:"60px", width:"300px"}}/>
            </a>
            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Trang quản trị</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTables" aria-expanded="true" aria-controls="collapseTables">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Bảng</span></a>
                    <div id="collapseTables" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item" href="http://localhost:3000/admin-category">Thương hiệu</a>
                        <a class="collapse-item" href="http://localhost:3000/admin-news">Tin tức</a>
                        <a class="collapse-item" href="http://localhost:3000/admin-product">Sản phẩm</a>
                        <a class="collapse-item" href="http://localhost:3000/admin-user">Tài khoản</a>
                        <a class="collapse-item" href="http://localhost:3000/admin-order">Đơn hàng</a>
                        <a class="collapse-item" href="http://localhost:3000/admin-banner">Bản tin</a>
                        <a class="collapse-item" href="http://localhost:3000/admin-report">Phản hồi</a>
                    </div>
                </div>
            </li>
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
        )
    }
}
export default HeaderComponent