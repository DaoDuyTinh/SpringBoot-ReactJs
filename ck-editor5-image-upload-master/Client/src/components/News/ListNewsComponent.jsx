import React from 'react';
import CategoryService from '../../service/CategoryService';
import NewsService from '../../service/NewsService';
import { confirmAlert } from 'react-confirm-alert';
import HeaderComponent from '../Admin/HeaderComponent';
import FooterComponent from '../Admin/FooterComponent';
import BodyComponent from '../Admin/BodyComponent';
class ListNewsComponent extends React.Component{
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
        this.addNews = this.addNews.bind(this);
        this.editNews= this.editNews.bind(this);
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
      NewsService.getAdminNews(currentPage,this.state.size)
      .then(response => response.data)
      .then((data) => {
        this.setState({content: data.content,
          totalPages:data.totalPages,
          totalElements: data.totalElements,
          currentPage:data.number+1});
        });
    }
    handlechange= async(event)=>{
      await this.setState({size: parseInt(event.target.value)})
      await this.findAll(this.state.currentPage);
  }
    componentDidMount(){
      this.changcurrentPage(this.state.currentPage);    
      this.findAll(this.state.currentPage);
    }
    addNews(){
      this.props.history.push('/admin-add-news');
    }
    editNews(id){
      this.props.history.push('/admin-update-news-'+id);
    }
    deleteNews(id){
      NewsService.deleteNews(id).then((res)=>{
        this.setState({content: this.state.content.filter( cate => cate.id !== id)});
      })

    }
    delete(id){
      confirmAlert({
        message: 'Bạn muốn xóa sản phẩm này.',
        buttons: [
          {
            label: 'OK',
            onClick: () => this.deleteNews(id),
            
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
        return (
          <body id="page-top">
          <div id="wrapper">
         <HeaderComponent/>
         <div id="content-wrapper" className="d-flex flex-column">
         <BodyComponent/>
         
            <div className="container-fluid">
  <h1 className="h3 mb-2 text-gray-800">Danh sách tin tức</h1>
  <div className="card shadow mb-4">
    <div className="card-header py-3">
      <button type="button" class="btn btn-success" onClick={this.addNews}>Thêm tin tức</button>
    </div>
    <label>Hiển thị
    <select name="dataTable_length" onChange={this.handlechange} aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm" style={{width:"60px"}} >
    <option value="10" selected >10</option>
    <option value="25">25</option>
    <option value="50" >50</option>
    <option value="100">100</option>
    </select></label>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
          <thead>
            <tr>
                <th>ID</th>
              <th>Tiêu đề</th>
              <th>Hình ảnh</th>
              <th>Nổi bật</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
          {this.state.content.map(
                cate =>
            <tr key = {cate.id}>
              <td>{cate.id}</td>
              <td style={{width:"400px"}}>{cate.title}</td>
              <td><img src={"http://localhost:8080/images/"+(cate.image)} style={{width:"120px",height:"90px"}}/></td>
              <td><input type="checkbox" defaultChecked={cate.hot} disabled/></td>
              <td><input type="checkbox" defaultChecked={cate.status} disabled/></td>
              <td><button type="button" class="btn btn-info" onClick={() =>this.editNews(cate.id)}>Chỉnh sửa</button>
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
export default ListNewsComponent
