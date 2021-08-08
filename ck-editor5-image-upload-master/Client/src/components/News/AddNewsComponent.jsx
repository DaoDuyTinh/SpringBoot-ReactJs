import React from 'react';
import axios from 'axios';
import NewsService from '../../service/NewsService';
import editor,{CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor  from '@ckeditor/ckeditor5-build-classic'
import HeaderComponent from '../Admin/HeaderComponent';
import FooterComponent from '../Admin/FooterComponent';
import BodyComponent from '../Admin/BodyComponent';
import UploadService from '../../service/Upload.service';
var image =[];
class AddNewsComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            description:'',
            title:'',
            image:'',
            status:false,
            shortDescription:'',
            hot:false,
            
        }
        this.saveCategory = this.saveCategory.bind(this);
        this.handlechangStatus = this.handlechangStatus.bind(this);
        this.changeProductImage = this.changeProductImage.bind(this);
        this.handlechangHot = this.handlechangHot.bind(this);
    }
    saveCategory = (e) =>{
        e.preventDefault();
        let news = {title: this.state.title, image: this.state.image, description:this.state.description, status:this.state.status,
            shortDescription:this.state.shortDescription,hot:this.state.hot};
        NewsService.createNews(news).then(async(res)=>{
            this.addProductImage(image);
            alert("Thêm tin tức thành công")
            this.props.history.push("/admin-news");
        })
    }
    addProductImage = async (productId) => {
        await UploadService.addImage(productId);
      };
    handlechang = (event)=>
    {
        const target = event.target;
        const {name, value  }= target;
        this.setState   ({
            [name]:value
        })
    }
    changeProductImage = (e) => {
        image = [];
        let file = e.target.files[0];
        const imageData = new FormData();
        imageData.append('imageFile', file);
        this.setState({ image: file.name });
        image = imageData;
    }
    ckeditorstate = (event, editor) =>{
        const data = editor.getData();
        this.setState({description:data});
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
    cancel(){
        this.props.history.push('/admin-category');
    }
    render (){
        console.log("STATE_", this.state)
        return (
            <body id="page-top">
          <div id="wrapper">
         <HeaderComponent/>
         <div id="content-wrapper" className="d-flex flex-column">
         <BodyComponent/>
            <div className="container" style={{width:"80%", height:"80%",borderStyle:"solid gray"}}>
                <h1>Thêm tin tức</h1>            
            <form>
                <div className="form-group">
                    <label >Tiêu đề</label>
                    <input type="text" className="form-control" placeholder="Tên thể loại" name="title" value={this.state.title} onChange={this.handlechang}/>
                </div>
                <div className="form-group">
                    <label >Hình ảnh</label>
                    <input type="file" className="form-control" placeholder="Hình ảnh" onChange={this.changeProductImage}/>
                </div>
                <div className="form-group">
                    <label >Mô tả ngắn</label>
                    <input type="text" className="form-control" placeholder="Tên thể loại" name="shortDescription" value={this.state.shortDescription} onChange={this.handlechang}/>
                </div>
                <div className="form-group">
                    <label >Tin tức</label>
                    <CKEditor
      editor ={ClassicEditor}
       onInit = { editor =>{
           //// Here the editor is ready to be used
       }}
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
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" name="status" value={this.state.status} onChange={this.handlechangStatus}/>
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
export default AddNewsComponent;