import React from 'react';
import NewsService from '../../service/NewsService';
import editor,{CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor  from '@ckeditor/ckeditor5-build-classic'
import HeaderComponent from '../Admin/HeaderComponent';
import FooterComponent from '../Admin/FooterComponent';
import BodyComponent from '../Admin/BodyComponent';
import UploadService from '../../service/Upload.service';
var image =[];
class UpdateNewsComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            description:'',
            title:'',
            image:'',
            status:"",
            shortDescription:'',
            hot:""
            
        }
        this.saveCategory = this.saveCategory.bind(this);
        this.handlechangStatus = this.handlechangStatus.bind(this);
        this.handlechangHot = this.handlechangHot.bind(this);
    }
    componentDidMount(){
        NewsService.getNewsById(this.state.id).then((res) =>{
            let news = res.data;
            this.setState({title: news.title, image: news.image, status: news.status, shortDescription: news.shortDescription,
                description: news.description,hot:news.hot});
        });
    }
    saveCategory = (e) =>{
        e.preventDefault();
        let news = {title: this.state.title, image: this.state.image, description:this.state.description, status:this.state.status,
            shortDescription:this.state.shortDescription,hot:this.state.hot};
        NewsService.updateNews(news,this.state.id).then(async(res)=>{
            this.addProductImage(image);
            alert("cập nhật thành công")
            this.props.history.push('/admin-news');
        })
    }
    addProductImage = async (productId) => {
        await UploadService.addImage(productId);
      };
      changeProductImage = (e) => {
        image = [];
        let file = e.target.files[0];
        const imageData = new FormData();
        imageData.append('imageFile', file);
        this.setState({ image: file.name });
        image = imageData;
    }
    handlechangStatus(){
        if(this.state.status===false)
        this.setState({status:true})
        else
        this.setState({status:false})
    }
    handlechangHot(){
        if(this.state.hot===false)
        this.setState({hot:true})
        else
        this.setState({hot:false})
    }
    handlechang = (event)=>
    {
        const target = event.target;
        const {name, value  }= target;
        this.setState   ({
            [name]:value
        })
    }
    ckeditorstate = (event, editor) =>{
        const data = editor.getData();
        this.setState({description:data});
        console.log("STATE", {data})
    }
    handleCkeditorState = (event,editor)=>
    {
        const data = editor.getData();
        this.setState({description:data})
        // console.log(data);
    }
    cancel(){
        this.props.history.push('/admin-category');
    }
    render (){
        
        const{status}= this.state;
        console.log("STATE_", this.state)
        return (
            <body id="page-top">
          <div id="wrapper">
         <HeaderComponent/>
         <div id="content-wrapper" className="d-flex flex-column">
         <BodyComponent/>
            <div className="container">
                <h1>Thêm thể loại</h1>            
            <form>
                <div className="form-group">
                    <label >Tiêu đề</label>
                    <input type="text" className="form-control" placeholder="Tên thể loại" name="title" value={this.state.title} onChange={this.handlechang}/>
                </div>
                <div className="form-group">
                    <label >Hình ảnh</label>
                    <input type="file" className="form-control" placeholder="Hình ảnh" onChange={this.changeProductImage}/>
                    <img src={"http://localhost:8080/images/"+this.state.image} style={{width:"80px",height:"60px", marginLeft:"10px"}}/>
                </div>
                <div className="form-group">
                    <label >Mô tả ngắn</label>
                    <input type="text" className="form-control" placeholder="Tên thể loại" name="shortDescription" value={this.state.shortDescription} onChange={this.handlechang}/>
                </div>
                <div className="form-group">
                    <label >Tin tức</label>
                   
                    {/* <textarea type="text" className="form-control" placeholder="" name="idCategory" value={this.state.description} onChange={this.changIdCategoryHandler}/> */}
                    <CKEditor
      editor ={ClassicEditor}
       onInit = { editor =>{
           //// Here the editor is ready to be used
       }}
       data={this.state.description}
       onChange ={this.ckeditorstate}
       config = {
        {
           // plugins: [ Essentials ],
          ckfinder: {
              // The URL that the images are uploaded to.
              uploadUrl: '/upload', 
  
              // Enable the XMLHttpRequest.withCredentials property.
              withCredentials: true,
  
              // Headers sent along with the XMLHttpRequest to the upload server.
              headers: {
                  'X-CSRF-TOKEN': 'CSFR-Token',
                   Authorization: 'Bearer <JSON Web Token>'
              }
        } }

     }
       
     />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" name="status"  checked={this.state.status} onChange={this.handlechangStatus}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Trạng thái</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" name="hot"  checked={this.state.hot} onChange={this.handlechangHot}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Nổi bật</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.saveCategory}>Lưu</button>
                <button type="button" class="btn btn-dark" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Thoát</button>
            </form>
            </div>
            </div>
</div>
<FooterComponent/>

    </body>
        )
    }
}
export default UpdateNewsComponent;