import React from 'react';
import CategoryService from '../../service/CategoryService';
import HeaderComponent from '../Admin/HeaderComponent';
import FooterComponent from '../Admin/FooterComponent';
import BodyComponent from '../Admin/BodyComponent';
import UploadService from "../../service/Upload.service";
var image =[];
class UpdateCategoryComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            name:'',
            image:'',
            
        }
        this.changNameHandler = this.changNameHandler.bind(this);
        this.changImageHandler = this.changImageHandler.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
    }
    componentDidMount(){
        CategoryService.getCategoryById(this.state.id).then((res) =>{
            let category = res.data;
            this.setState({name: category.name, image: category.image});
        });
    }
    updateCategory = (e) =>{
        e.preventDefault();
        let category = {name: this.state.name, image: this.state.image};
        console.log('category => '+ JSON.stringify(category));
        console.log('id => '+ JSON.stringify(this.state.id));

        CategoryService.updateCategory(category,this.state.id).then(async (res) => {
            this.addProductImage(image);
            alert("Cập nhật thành công")
            this.props.history.push('/admin-category');
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
    changNameHandler=(event)=>{
        this.setState({name:event.target.value});
    }
    changImageHandler=(event)=>{
        this.setState({image:event.target.value});
    }
    cancel(){
        this.props.history.push('/admin-category');
    }
    render (){
        return (
            <body id="page-top">
          <div id="wrapper">
         <HeaderComponent/>
         <div id="content-wrapper" className="d-flex flex-column">
         <BodyComponent/>
            <div className="container">
                <h1>Sửa thương hiệu</h1>            
            <form>
                <div className="form-group">
                    <label >Tên</label>
                    <input type="text" className="form-control" placeholder="Tên thể loại" name="name" value={this.state.name} onChange={this.changNameHandler}/>
                </div>
                <div className="form-group">
                    <label >Hình ảnh</label>
                    <input type="file" className="form-control" placeholder="Hình ảnh" onChange={this.changeProductImage}/>
                    <img src={"http://localhost:8080/images/"+this.state.image} style={{width:"50px",height:"50px"}}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.updateCategory}>Lưu</button>
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
export default UpdateCategoryComponent