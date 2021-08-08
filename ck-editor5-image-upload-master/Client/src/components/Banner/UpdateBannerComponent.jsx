import React from 'react';
import BannerService from '../../service/BannerService';
import NewsService from '../../service/NewsService';
import HeaderComponent from '../Admin/HeaderComponent';
import FooterComponent from '../Admin/FooterComponent';
import BodyComponent from '../Admin/BodyComponent';
import UploadService from "../../service/Upload.service";
var image =[];
var array=[];
class UpdateBannerComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            selectedOption: {},
            idNews:'',
            title:'',
            image:'',
            status:false,
            type:false,
            news:[]
            
        }
        this.saveBanner = this.saveBanner.bind(this);
        this.handlechang = this.handlechang.bind(this);
        this.handlechangStatus = this.handlechangStatus.bind(this);
        this.handlechangType = this.handlechangType.bind(this);
    }
    componentDidMount(){
        BannerService.getBannerById(this.state.id).then((res) =>{
            let banner = res.data;
            this.setState({title: banner.title, image: banner.image,idNews:banner.idNews,status:banner.status,type:banner.type});
        });
        NewsService.getAllNews().then((res)=>
        this.setState({news:res.data}))
    }
    saveBanner = (e) =>{
        e.preventDefault();
        let banner = {title: this.state.title, image: this.state.image,idNews:this.state.idNews,status:this.state.status,type:this.state.type};
        BannerService.updateBanner(banner,this.state.id).then(async (res) => {
            this.addProductImage(image)
            alert("Cập nhật thành công")
            this.props.history.push('/admin-banner');
        });
        console.log('banner => '+JSON.stringify(banner));
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
    handlechangType(){
        if(this.state.type===false)
        this.setState({type:true})
        else
        this.setState({type:false})
    }
    onSelect= (selectedValue) =>{
        array = [];
      if(selectedValue)
      {
        selectedValue.forEach((se)=>
        {array.push({
          id: se.id,
          status: true,
          title: `${se.title}`,
          image: `${se.image}`
        });
      });
    }
      console.log(array);
    }
    handlechangStatus(){
        if(this.state.status===false)
        this.setState({status:true})
        else
        this.setState({status:false})
    }
    handlechang = (event)=>
    {
        const target = event.target;
        const {name, value  }= target;
        this.setState   ({
            [name]:value
        })
    }
    handlechangStatus(){
        if(this.state.status===false)
        this.setState({status:true})
        else
        this.setState({status:false})
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
            <div className="container">
                <h1>Cập nhật bản tin</h1>            
            <form>
                <div className="form-group">
                    <label >Tiêu đề</label>
                    <input type="text" className="form-control" placeholder="Tên thể loại" name="title" value={this.state.title} onChange={this.handlechang}/>
                </div>
                <div className="form-group">
                    <label >Hình ảnh</label>
                    <input type="file" className="form-control" placeholder="Hình ảnh" onChange={this.changeProductImage}/>
                    <img src={"http://localhost:8080/images/"+this.state.image} style={{width:"50px",height:"50px"}}/>
                </div>
                <div className="form-group">
                    <label >Tin tức</label>
                    <select className="form-control"  name="idNews" value={this.state.idNews} onChange={this.handlechang}>
                        {this.state.news.map(
                            cate =>(
                            <option value ={cate.id}>{cate.title}</option> 
                        ))}
                    </select>
                    </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" name="type" checked={this.state.type} onChange={this.handlechangType}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Bìa chính</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" name="status" checked={this.state.status} onChange={this.handlechangStatus}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Trạng thái</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.saveBanner}>Lưu</button>
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
export default UpdateBannerComponent;