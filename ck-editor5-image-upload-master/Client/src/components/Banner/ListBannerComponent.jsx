import React from 'react';
import BannerService from '../../service/BannerService';
import HeaderComponent from '../Admin/HeaderComponent';
import FooterComponent from '../Admin/FooterComponent';
import BodyComponent from '../Admin/BodyComponent';
import { confirmAlert } from 'react-confirm-alert';
class ListBannerComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            content:[],
            currentPage: 1,
            size: 10,
            disabled1:'',
            disabled2:''
        }
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.findAll = this.findAll.bind(this);
        this.addBanner = this.addBanner.bind(this);
        this.editBanner= this.editBanner.bind(this);
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
     BannerService.getAllBanner(currentPage,this.state.size)
      .then(response => response.data)
      .then((data) => {
        this.setState({content: data.content,
          totalPages:data.totalPages,
          totalElements: data.totalElements,
          currentPage:data.number+1});
        });
    }
    handlechange=(event)=>{
        this.setState({size:event.target.value})
        this.findAll(this.state.currentPage);
    }
    componentDidMount(){
      this.changcurrentPage(this.state.currentPage);    
      this.findAll(this.state.currentPage);
    }
    addBanner(){
      this.props.history.push('/admin-add-banner');
    }
    editBanner(id){
      this.props.history.push('/admin-update-banner/'+id);
    }
    delete(id){
      confirmAlert({
        message: 'Bạn muốn xóa tài khoản này.',
        buttons: [
          {
            label: 'OK',
            onClick: () => this.deleteBanner(id),
            
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
    deleteBanner(id){
      BannerService.deleteBanner(id).then((res)=>{
        this.setState({content: this.state.content.filter( cate => cate.id !== id)});
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
  <h1 className="h3 mb-2 text-gray-800">Danh sách bản tin</h1>
  <div className="card shadow mb-4">
    <div className="card-header py-3">
      <button type="button" class="btn btn-success" onClick={this.addBanner}>Thêm bản tin</button>
    </div>
    <label>Hiển thị <select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm" style={{width:"60px"}}>
        <option value={10} selected onChange={this.handlechange}>10</option>
        <option value={25} onChange={this.handlechange}>25</option>
        <option value={50} onChange={this.handlechange}>50</option>
        <option value={100} onChange={this.handlechange}>100</option>
        </select> entries</label>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
          <thead>
            <tr>
                <th>ID</th>
              <th>Tiêu đề</th>
              <th>Hình ảnh</th>
              <th>Trạng thái</th>
              <th>Loại(Bìa chính)</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
          {this.state.content.map(
                cate =>
            <tr key = {cate.id}>
              <td>{cate.id}</td>
              <td>{cate.title}</td>
              <td><img src={"http://localhost:8080/images/"+cate.image} style={{width:"100px",height:"60px"}}/></td>
              <td><input type="checkbox" defaultChecked={cate.status} disabled/></td>
              <td><input type="checkbox" defaultChecked={cate.type} disabled/></td>
              <td><button type="button" class="btn btn-info" onClick={() =>this.editBanner(cate.id)}>Chỉnh sửa</button>
              <button type="button" class="btn btn-danger" onClick={() =>this.delete(cate.id)} style={{marginLeft: "2px"}}>Xóa</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <ul className="pagination"> 
  <li className={"page-item "+(this.state.disabled1)} ><button className="page-link" href="#" onClick={this.previousPage} >Trước</button></li>
  <li className="page-item active"><a className="page-link" href="#" value={this.state.currentPage} onChange={this.changcurrentPage}>{this.state.currentPage}</a></li>
  <li className={"page-item "+(this.state.disabled2)}> <button className="page-link" href="#"  onClick={this.nextPage}>Tiếp</button></li>
</ul>
</div>
</div>
</div>
<FooterComponent/>

    </body>
        )
    }
}
export default ListBannerComponent
