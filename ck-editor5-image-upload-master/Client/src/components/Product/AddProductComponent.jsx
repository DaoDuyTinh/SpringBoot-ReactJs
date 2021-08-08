import React from "react";
import CategoryService from "../../service/CategoryService";
import ProductService from "../../service/ProductService";
import NewsService from "../../service/NewsService";
import HeaderComponent from '../Admin/HeaderComponent';
import FooterComponent from '../Admin/FooterComponent';
import BodyComponent from '../Admin/BodyComponent';
import editor,{CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor  from '@ckeditor/ckeditor5-build-classic'
import { Multiselect } from "multiselect-react-dropdown";
import UploadService from "../../service/Upload.service";
var image =[];
var arraynew = [];
var arrayrelated = [];
var arrayimages=[];
var seletedImage = [];
class AddCategoryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      name: " ",
      color: " ",
      image: " ",
      price: " ",
      priceNet: " ",
      size: " ",
      weight: " ",
      horsePower: " ",
      massFraction: " ",
      frontBrake: " ",
      rearBrake: " ",
      productNumber: " ",
      status: false,
      type: false,
      sale: false,
      percent: " ",
      petrol: " ",
      categoryId: 1,
      soon:false,
      access:false,
      install:" ",
      description:" ",
      selectedImage:" ",
      IdproductNews:" ",
      imageDatas:[]
    };
    this.saveProduct = this.saveProduct.bind(this);
    this.handlechangStatus = this.handlechangStatus.bind(this);
    this.handlechangSale = this.handlechangSale.bind(this);
    this.handlechangType = this.handlechangType.bind(this);
    this.handlechangSoon = this.handlechangSoon.bind(this);
    this.handlechangaccess = this.handlechangaccess.bind(this);
  }
  saveProduct = (e) => {
    e.preventDefault();
    let product = {
      name: this.state.name,
      color: this.state.color,
      price: this.state.price,
      size: this.state.size,
      weight: this.state.weight,
      horsePower: this.state.horsePower,
      massFraction: this.state.massFraction,
      frontBrake: this.state.frontBrake,
      rearBrake: this.state.rearBrake,
      priceNet: this.state.priceNet,
      status: this.state.status,
      type: this.state.type,
      sale: this.state.sale,
      productNumber: this.state.productNumber,
      percent: this.state.percent,
      petrol: this.state.petrol,
      soon:this.state.soon,
      install:this.state.install,
      access:this.state.access,
      description:this.state.description,
      image: this.state.image
    };
    ProductService.createProduct(this.state.categoryId, product).then(async (res) => {
      for (const f of this.state.imageDatas) {
        this.addProductImage(f);
    }
      this.addProductImage(image);
      let ProductNew = res.data;
      this.setState({IdproductNews:ProductNew.id})
      console.log("id =>"+ this.state.IdproductNews)
      await ProductService.updatenews(arraynew, this.state.IdproductNews).then((res) => {
        
      });
      await ProductService.updateimages(seletedImage, this.state.IdproductNews).then((res) => {
        alert("Lưu sản phẩm thành công")
      });
      await ProductService.updateprolated(arrayrelated, this.state.IdproductNews).then((res) => {
        this.props.history.push("/admin-product");
      });
    });
    
  };
  ckeditorstate = (event, editor) =>{
    const data = editor.getData();
    this.setState({description:data});
}
  componentDidMount() {
    ProductService.getProductAll().then((response) => {
      this.setState({ product: response.data });
    });
    CategoryService.getCategory().then((response) => {
      this.setState({ category: response.data });
    });
    NewsService.getAllNews().then((res) => {
      this.setState({ news: res.data });
      console.log("product => " + JSON.stringify(this.state.productre));
    });
    console.log("cate => " +this.state.categoryId)
  }
  
  addProductImage = async (productId) => {
    await UploadService.addImage(productId);
  };
  changeImageHandler = (event) => {
 
    let files = event.target.files;
  
    let imageArrays = [];
    seletedImage = [];
    for (const f of files) {
      const imageData = new FormData();
      imageData.append('imageFile', f);
      imageArrays.push(imageData);
      seletedImage.push({
        name:f.name});
    }
    this.setState({imageDatas:imageArrays});
  };
changeProductImage = (e) => {
    image = [];
    let file = e.target.files[0];
    const imageData = new FormData();
    imageData.append('imageFile', file);
    this.setState({ image: file.name });
    image = imageData;
}
  handlechangStatus() {
    if (this.state.status === false) this.setState({ status: true });
    else this.setState({ status: false });
  }
  handlechangSale() {
    if (this.state.sale === false) this.setState({ sale: true });
    else this.setState({ sale: false });
  }
  handlechangType() {
    if (this.state.type === false) this.setState({ type: true });
    else this.setState({ type: false });
  }
  handlechangaccess() {
    if (this.state.access === false) this.setState({ access: true });
    else this.setState({ access: false });
  }
  handlechangSoon() {
    if (this.state.soon === false) this.setState({ soon: true });
    else this.setState({ soon: false });
  }
  onSelectNew = (selectedValueNew) => {
    arraynew = [];
    if (selectedValueNew) {
      selectedValueNew.forEach((se) => {
        arraynew.push({
          id: se.id,
          status: true,
          title: `${se.title}`,
          image: `${se.image}`,
          description: `${se.description}`,
          shortDescription: `${se.shortDescription}`,
          hot: `${se.hot}`,
          reviews: `${se.reviews}`,
        });
      });
    }
    console.log("arraynews");
  };
  onRemoveNew = (selectedValueNew) => {
    arraynew = [];
    if (selectedValueNew) {
      selectedValueNew.forEach((se) => {
        arraynew.push({
          id: se.id,
          status: true,
          title: `${se.title}`,
          image: `${se.image}`,
          description: `${se.description}`,
          shortDescription: `${se.shortDescription}`,
          hot: `${se.hot}`,
          reviews: `${se.reviews}`,
        });
      });
    }
    console.log(arraynew);
  };
  onSelectPro = (selectedValueProduct) => {
    arrayrelated = [];
    if (selectedValueProduct) {
      selectedValueProduct.forEach((se) => {
        arrayrelated.push({
          product_id: se.id,
          name: `${se.name}`,
        });
      });
    }
  };
  onRemovePro = (selectedValueProduct) => {
    arrayrelated = [];
    if (selectedValueProduct) {
      selectedValueProduct.forEach((se) => {
        arrayrelated.push({
          product_id: se.id,
          name: `${se.name}`,
        });
      });
      console.log(arrayrelated);
    }
  };
  handlechang = (event) => {
    const target = event.target;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  cancel() {
    this.props.history.push("/admin-product");
  }
  render() {
    
    let listimagereview;
          if (seletedImage) {
            listimagereview = arrayimages.map(ar=><img
            src={"http://localhost:8080/images/" + ar}
            style={{ width: "80px", height: "60px" }}
          />
            )};
    return (
      <body id="page-top">
          <div id="wrapper">
         <HeaderComponent/>
         <div id="content-wrapper" className="d-flex flex-column">
         <BodyComponent/>
      <div className="container">
        <h1>Thêm sản phẩm mới</h1>
        <form>
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên sản phẩm"
              name="name"
              value={this.state.name}
              onChange={this.handlechang}
            />
          </div>
          <div className="form-group">
            <label>Màu sắc</label>
            <input
              type="color"
              id="color"
              name="color"
              value={this.state.color}
              onChange={this.handlechang}
              style={{ marginLeft: "10px" }}
            />
          </div>
          <div className="form-group">
            <label>Chọn tin tức liên quan</label>
            <Multiselect
              options={this.state.news} // Options to display in the dropdown
              selectedValues={this.state.selectedValueNew} // Preselected value to persist in dropdown
              onSelect={this.onSelectNew} // Function will trigger on select event
              onRemove={this.onRemoveNew} // Function will trigger on remove event
              displayValue="title" // Property name to display in the dropdown options
              selectionLimit="3"
            />
          </div>
          <div className="form-group">
            <label>Chọn sản phẩm liên quan</label>
            <Multiselect
              options={this.state.product} // Options to display in the dropdown
              selectedValues={this.state.selectedValueProduct} // Preselected value to persist in dropdown
              onSelect={this.onSelectPro} // Function will trigger on select event
              onRemove={this.onRemovePro} // Function will trigger on remove event
              displayValue="name" // Property name to display in the dropdown options
              selectionLimit="6"
            />
          </div>
          <div className="form-group">
            <label>Hình ảnh liên quan</label>
            <input
              type="file"
              className="form-control"
              placeholder=""
              onChange={this.changeImageHandler}
              multiple
            />
            {listimagereview}
          </div>
          <div className="form-group">
            <label>Giá</label>
            <input
              type="number"
              className="form-control"
              placeholder=""
              name="price"
              value={this.state.price}
              onChange={this.handlechang}
            />
          </div>
          <div className="form-group">
            <label>Hình ảnh</label>
            <input
              type="file"
              className="form-control"
              placeholder=""
              onChange={this.changeProductImage}
            />  
          </div>
          <div className="form-group">
            <label>Mô tả sản phẩm</label>
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
          <div className="form-group">
            <label>Kích thước</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="size"
              value={this.state.size}
              onChange={this.handlechang}
            />
          </div>
          <div className="form-group">
            <label>Cân nặng</label>
            <input
              type="number"
              className="form-control"
              placeholder=""
              name="weight"
              value={this.state.weight}
              onChange={this.handlechang}
            />
          </div>
          <div className="form-group">
            <label>Mã lực</label>
            <input
              type="number"
              className="form-control"
              placeholder=""
              name="horsePower"
              value={this.state.horsePower}
              onChange={this.handlechang}
            />
          </div>
          <div className="form-group">
            <label>Phân khối</label>
            <input
              type="number"
              className="form-control"
              placeholder=""
              name="massFraction"
              value={this.state.massFraction}
              onChange={this.handlechang}
            />
          </div>
          <div className="form-group">
            <label>Phanh trước</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="frontBrake"
              value={this.state.frontBrake}
              onChange={this.handlechang}
            />
          </div>
          <div className="form-group">
            <label>Phanh sau</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="rearBrake"
              value={this.state.rearBrake}
              onChange={this.handlechang}
            />
          </div>
          <div className="form-group">
            <label>Dung tích bình xăng</label>
            <input
              type="number"
              className="form-control"
              placeholder=""
              name="petrol"
              value={this.state.petrol}
              onChange={this.handlechang}
            />
          </div>
          <div className="form-group">
            <label>Số Lượng sản phẩm</label>
            <input
              type="number"
              className="form-control"
              placeholder=""
              name="productNumber"
              value={this.state.productNumber}
              onChange={this.handlechang}
            />
          </div>
          <div className="form-group">
            <label>Thương hiệu</label>
            <select
              className="form-control"
              name="categoryId"
              value={this.state.categoryId}
              onChange={this.handlechang}
            >
              {this.state.category.map((cate) => (
                <option value={cate.id}>{cate.name}</option>
              ))}
            </select>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="status"
              value={this.state.status}
              checked={this.state.status}
              onChange={this.handlechangStatus}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Trạng thái
            </label>
          </div>
         
            <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="soon"
              value={this.state.soon}
              onChange={this.handlechangSoon}
            />
             <label className="form-check-label" htmlFor="exampleCheck1">
              Sắp ra mắt
            </label>
            </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="type"
              value={this.state.type}
              checked={this.state.type}
              onChange={this.handlechangType}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Loại xe(Xe máy)
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="access"
              value={this.state.access}
              onChange={this.handlechangaccess}
            />
             <label className="form-check-label" htmlFor="exampleCheck1">
              Phụ kiện
            </label>
            </div>
            <div className="form-group">
            <label>Giá kèm phụ kiện</label>
            <input
              type="number"
              className="form-control"
              placeholder=""
              name="install"
              value={this.state.install}
              onChange={this.handlechang}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="sale"
              value={this.state.sale}
              checked={this.state.sale}
              onChange={this.handlechangSale}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Giảm giá
            </label>
          </div>
          <div className="form-group">
            <label>Khuyến mãi (%)</label>
            <input
              type="number"
              className="form-control"
              placeholder="% khuyến mãi"
              name="percent"
              value={this.state.percent}
              onChange={this.handlechang}
            />
          </div>
          <div className="form-group">
            <label>Giá khuyến mãi</label>
            <input
              type="number"
              className="form-control"
              placeholder="Giá khuyến mãi"
              name="priceNet"
              value={this.state.priceNet}
              onChange={this.handlechang}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.saveProduct}
          >
            Lưu
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.cancel.bind(this)}
            style={{ marginLeft: "10px" }}
          >
            Thoát
          </button>
        </form>
      </div>
      </div>
</div>
<FooterComponent/>

    </body>
    );
  }
}
export default AddCategoryComponent;
