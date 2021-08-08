import React from 'react';
import HeaderComponent from '../Admin/HeaderComponent';
import FooterComponent from '../Admin/FooterComponent';
import BodyComponent from '../Admin/BodyComponent';
import UserService from '../../service/UserService';
import { confirmAlert } from 'react-confirm-alert';
class ListUserComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentPage: 1,
            size: 10,
            disabled1:'',
            disabled2:'',
            user:[],
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.findAll = this.findAll.bind(this);
        this.handlechange = this.handlechange.bind(this);
      }
      changcurrentPage(currentPage){
        let condition = Math.ceil(this.state.totalElements/this.state.size);
        if(currentPage === 1)
        this.setState({disabled1:"disabled"});
        else
        this.setState({disabled1:" "});
      if(currentPage === condition)
        this.setState({disabled2:"disabled"});
        else
        this.setState({disabled2:" "});
      }
      previousPage(){
        if(this.state.currentPage>1)
          this.state.currentPage-=1;
          this.findAll(this.state.currentPage);    
          this.changcurrentPage(this.state.currentPage);    
      }
      nextPage (){
        let condition = Math.ceil(this.state.totalElements/this.state.size);
        if(this.state.currentPage<condition)
          this.state.currentPage+=1;
          this.findAll(this.state.currentPage);
          this.changcurrentPage(this.state.currentPage);    
      }
      findAll(currentPage){
        currentPage-=1;
        UserService.getUser(currentPage,this.state.size)
        .then(response => response.data)
        .then((data) => {
          this.setState({user: data.content,
            totalPages:data.totalPages,
            totalElements: data.totalElements,
            currentPage:data.number+1});
          });
      }
      componentDidMount(){
        this.changcurrentPage(this.state.currentPage);    
        this.findAll(this.state.currentPage);
      }
       handlechange= async(event)=>{
        await this.setState({size: parseInt(event.target.value)})
        await this.findAll(this.state.currentPage);
    }
      addUser(){
        this.props.history.push('/admin-add-user');
      }
      editUser(id){
        this.props.history.push('/admin-update-user'+id);
      }
      deleteUser(id){
        UserService.deleteUser(id).then((res)=>{
          this.setState({user: this.state.user.filter( pro => pro.id !== id)});
        })
      }delete(id){
        confirmAlert({
          message: 'Bạn muốn xóa tài khoản này.',
          buttons: [
            {
              label: 'OK',
              onClick: () => this.deleteUser(id),
              
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
    render (){
        return (<body id="page-top">
        <div id="wrapper">
       <HeaderComponent/>
       <div id="content-wrapper" className="d-flex flex-column">
       <BodyComponent/>
            <div className="container-fluid">
  <h1 className="h3 mb-2 text-gray-800">Danh sách tài khoản</h1>
  <div className="card shadow mb-4">
    <div className="card-header py-3">
      <button type="button" class="btn btn-success" onClick={this.addUser}>Thêm tài khoản</button>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
          <thead>
            <tr>
            <th>ID</th>
              <th>Tài khoản</th>
              <th>Email</th>
              <th>Họ</th>
              <th>Tên</th>
              <th>Địa chỉ</th>
              <th>SĐT</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
          {this.state.user.map(
                cate =>
            <tr key = {cate.id}>
              <td>{cate.id}</td>
              <td>{cate.username}</td>
              <td>{cate.email}</td>
              <td>{cate.firstname}</td>
              <td>{cate.lastname}</td>
              <td>{cate.address}</td>
              <td>{cate.phone}</td>
              <td><button type="button" class="btn btn-info" onClick={() =>this.editUser(cate.id)}>Chỉnh sửa</button>
              <button type="button" class="btn btn-danger" onClick={() =>this.delete(cate.id)} style={{marginLeft: "2px"}}>Xóa</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>
</div>
<FooterComponent/>

    </body>

        )
    }
}
export default ListUserComponent
