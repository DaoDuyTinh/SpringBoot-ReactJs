import React from 'react';
import HeaderComponent from '../Admin/HeaderComponent';
import FooterComponent from '../Admin/FooterComponent';
import BodyComponent from '../Admin/BodyComponent';
import editor,{CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor  from '@ckeditor/ckeditor5-build-classic'
import SalientService from '../../service/SalientService';
import UploadService from "../../service/Upload.service";
var image =[];
class AddSalientComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productId:this.props.match.params.id,
            title:'',
            images:'',
            description:""
            
        }
        this.changNameHandler = this.changNameHandler.bind(this);
        this.saveCategory = this.saveCategory.bind(this);
    }
    saveCategory = (e) =>{
        e.preventDefault();
        let salient = {title: this.state.title, images: this.state.images, description:this.state.description};
        console.log('salient => '+JSON.stringify(salient));

        SalientService.createSalient(salient,this.state.productId).then(async (res) => {
            this.addProductImage(image);
            alert("Thêm tính năng thành công")
            this.props.history.goBack();
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
        this.setState({ images: file.name });
        image = imageData;
    }
    ckeditorstate = (event, editor) =>{
        const data = editor.getData();
        this.setState({description:data});
    }
    changNameHandler=(event)=>{
        this.setState({title:event.target.value});
    }
    cancel(){
        this.props.history.goBack();
    }
    render (){
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
                    <input type="text" className="form-control" placeholder="Tên thể loại" name="title" value={this.state.title} onChange={this.changNameHandler}/>
                </div>
                <div className="form-group">
                    <label >Hình ảnh</label>
                    <input
              type="file"
              className="form-control"
              placeholder=""
              onChange={this.changeProductImage}
            />
                </div>
                <div className="form-group">
                    <label >Mô tả</label>
                    <CKEditor
      editor ={ClassicEditor}
      data={this.state.description}
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
export default AddSalientComponent