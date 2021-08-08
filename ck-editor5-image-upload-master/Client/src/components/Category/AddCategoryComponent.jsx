import React from "react";
import CategoryService from "../../service/CategoryService";
import HeaderComponent from "../Admin/HeaderComponent";
import FooterComponent from "../Admin/FooterComponent";
import BodyComponent from "../Admin/BodyComponent";
import UploadService from "../../service/Upload.service";
var image =[];
class AddCategoryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
    };
    this.changNameHandler = this.changNameHandler.bind(this);
    this.changeProductImage = this.changeProductImage.bind(this);
    this.changIdCategoryHandler = this.changIdCategoryHandler.bind(this);
    this.saveCategory = this.saveCategory.bind(this);
  }
  saveCategory = (e) => {
    e.preventDefault();
    let category = { name: this.state.name, image: this.state.image };
    console.log("category => " + JSON.stringify(category));
    CategoryService.createCategory(category).then(async (res) => {
      this.addProductImage(image);
      this.props.history.push("/admin-category");
    });
  };
  addProductImage = async (productId) => {
    await UploadService.addImage(productId);
  };
  changNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  changeProductImage = (e) => {
    image = [];
    let file = e.target.files[0];
    const imageData = new FormData();
    imageData.append('imageFile', file);
    this.setState({ image: file.name });
    image = imageData;
}
  changIdCategoryHandler = (event) => {
    this.setState({ idCategory: event.target.value });
  };
  cancel() {
    this.props.history.push("/admin-category");
  }
  render() {
    return (
      <body id="page-top">
        <div id="wrapper">
          <HeaderComponent />
          <div id="content-wrapper" className="d-flex flex-column">
            <BodyComponent />
            <div className="container">
              <h1>Thêm thương hiệu</h1>
              <form>
                <div className="form-group">
                  <label>Tên thương hiệu</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên thể loại"
                    name="name"
                    value={this.state.name}
                    onChange={this.changNameHandler}
                  />
                </div>
                <div className="form-group">
                                            <label> Hình ảnh: </label>
                                            <input
                                                name="image"
                                                type="file"
                                                className="form-control"
                                                accept="image/*"
                                                onChange={this.changeProductImage}
                                            />
                                        </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.saveCategory}
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
        <FooterComponent />
      </body>
    );
  }
}
export default AddCategoryComponent;
