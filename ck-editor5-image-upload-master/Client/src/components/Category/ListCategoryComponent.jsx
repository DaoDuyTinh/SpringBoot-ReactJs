import React from 'react';
import CategoryService from '../../service/CategoryService';
import HeaderComponent from '../Admin/HeaderComponent';
import FooterComponent from '../Admin/FooterComponent';
import BodyComponent from '../Admin/BodyComponent';
import { confirmAlert } from 'react-confirm-alert';
class ListCategoryComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            category:[],
        }
        this.addCategory = this.addCategory.bind(this);
        this.editCategory = this.editCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
    }
    getCategoryby(idcate){
      CategoryService.getCategoryById(idcate).then((response) =>{
        this.setState({name: response.data});
      })
    }
    componentDidMount(){
        CategoryService.getCategory().then((response) => {
            this.setState({category: response.data})
        });
    }
    addCategory(){
      this.props.history.push('/admin-add-category');
    }
    editCategory(id){
      this.props.history.push('/admin-update-category/'+id);
    }
    delete(id){
      confirmAlert({
        message: 'Bạn muốn xóa tài khoản này.',
        buttons: [
          {
            label: 'OK',
            onClick: () => this.deleteCategory(id),
            
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
    deleteCategory(id){
      CategoryService.deleteCategory(id).then((res)=>{
        this.setState({category: this.state.category.filter( cate => cate.id !== id)});
      })

    }
    render (){
        return (
        <body id="page-top">
        <div id="wrapper">
       <HeaderComponent/>
       <div id="content-wrapper" className="d-flex flex-column">
       <BodyComponent/>
            <div className="container-fluid">
  <h1 className="h3 mb-2 text-gray-800">Danh sách thương hiệu</h1>
  <div className="card shadow mb-4">
    <div className="card-header py-3">
      <button type="button" class="btn btn-success" onClick={this.addCategory}>Thêm thương hiệu</button>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
          <thead>
            <tr>
            <th>ID</th>
              <th>Tên</th>
              <th>Logo</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
          {this.state.category.map(
                cate =>
            <tr key = {cate.id}>
              <td>{cate.id}</td>
              <td>{cate.name}</td>
              <td><img src={"http://localhost:8080/images/"+cate.image} style={{width:"80px",height:"60px"}}/></td>
              <td><button type="button" class="btn btn-info" onClick={() =>this.editCategory(cate.id)}>Chỉnh sửa</button>
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
export default ListCategoryComponent
