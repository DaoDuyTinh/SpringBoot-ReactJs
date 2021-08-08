import React, { Component } from "react";
import NumberFormat from "react-number-format";
import ProductService from "../../../service/ProductService";
import HomeHeaderComponent from "../HomeHeaderComponent";
import HomeFooterComponent from "../HomeFooterComponent";
import HomeProductDealsComponent from "../HomeProductDealsComponent";

export default class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);

    this.state = {
      product: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: this.props.match.params.name,
    };
  }
  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }
  componentDidMount() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
    ProductService.findByName(this.state.searchTitle).then((response) => {
      this.setState({
        product: response.data,
      });
    });
  }

  render() {
    const { product, currentTutorial, currentIndex } = this.state;

    return (
      <div>
        <HomeHeaderComponent />
        <div className="container" style={{ marginTop: "30px" }}>
        <div className="row">
          {product &&
            product.map((tutorial) => (
             
                <div className="col-md-3">
                  <div className="product-all mt-1">
                    <a href={"http://localhost:3000/product/" + tutorial.id}>
                      <img
                        src={"http://localhost:8080/images/" + tutorial.image}
                        className="image-product"
                        style={{ width: "150px", height: "130px" }}
                      />
                    </a>
                    <div className="product-name">
                      <a href={"http://localhost:3000/product/" + tutorial.id}>
                        {tutorial.name}
                      </a>
                    </div>

                    {tutorial.sale ? (
                      <div className="price-wrap">
                        <span class="price">
                          <NumberFormat
                            value={tutorial.priceNet}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </span>
                        <del className="price-old">
                          <NumberFormat
                            value={tutorial.price}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </del>
                      </div>
                    ) : (
                      <div className="price-wrap">
                        <span class="price">
                          <NumberFormat
                            value={tutorial.price}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </span>
                        <img
                          src={"http://localhost:8080/images/baohanh.jpg"}
                          className="image-product"
                          style={{
                            width: "40px",
                            height: "40px",
                            marginLeft: "5px",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
             
            ))}
            </div>
          <div></div>
        </div>
        <HomeProductDealsComponent />
        <HomeFooterComponent />
      </div>
    );
  }
}
