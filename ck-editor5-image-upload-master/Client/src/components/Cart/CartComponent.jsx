import React from "react";
import { form } from "react-validation/build/form";
import AuthService from "../../service/AuthService";
import NumberFormat from "react-number-format";
import HomeHeaderComponent from "../Home/HomeHeaderComponent";
import HomeFooterComponent from "../Home/HomeFooterComponent";
import {
  total,
  list,
  quantity,
  add,
  remove,
  onChange,
} from "cart-localstorage";
const tong = total();
class CartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: list(),
    };
  }
  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    this.setState({ currentUser: currentUser, userReady: true});
  }

  AddCart(id, name, price, image,category, e) {
    add({ id: id, name: name, price: price, image: image ,category: category});
    onChange();
  }
  DeleteAddCart(id) {
    quantity(id, -1);
  }
  RemoveAddCart(id) {
    remove(id);
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div>
          <HomeHeaderComponent/>
        <body >
      <div style={{marginTop:"20px"}}>
        <section className="section-content padding-y">
          <div className="">
            <div className="row">
              <main className="col-md-9">
                <div className="card">
                  <table className="table table-borderless table-shopping-cart">
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Sản phẩm</th>
                        <th scope="col" width={120}>
                          Đơn giá
                        </th>
                        <th scope="col" width={120}>
                          Số lượng
                        </th>
                        <th scope="col" width={120}>
                          Giá
                        </th>
                        <th scope="col" className="text-right" width={200}>
                          {" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.cart.map((item) => (
                        <tr>
                          <td>
                            <figure className="itemside">
                              <div className="aside" key={item.id}>
                               <a href={"http://localhost:3000/product/"+(item.id)}> <img src={"http://localhost:8080/images/"+item.image} className="img-sm" /></a>
                              </div>
                              <figcaption className="info">
                                <a href={"http://localhost:3000/product/"+(item.id)} className="title text-dark" style={{textDecoration:"none"}}>
                                  {item.title}
                                </a>
                                <p className="text-muted small">
                                  {item.category}
                                </p>
                              </figcaption>
                            </figure>
                          </td>
                          <td>
                            <div className="price-wrap">
                              <var className="price">
                                <NumberFormat
                                  value={item.price}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </var>
                            </div>{" "}
                            {/* price-wrap .// */}
                          </td>
                          <td className="quanty-css">
                         <div> <a
                           
                              href=""
                              onClick={(e)=>this.AddCart(item.id,item.name,item.price,item.image,item.category.name,e)}
                            >
                          <i class="fa fa-chevron-circle-up" aria-hidden="true"></i>
                            </a></div>
                          <div>{item.quantity}</div>
                         <div> <a
                              href=""
                              onClick={(e) => this.DeleteAddCart(item.id)}
                            >
                             <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
                            </a></div>
                          </td>
                          <td>
                            <div className="price-wrap">
                              <var className="price">
                                <NumberFormat
                                  value={(item.price)*(item.quantity)}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </var>
                            </div>{" "}
                            {/* price-wrap .// */}
                          </td>
                          <td className="text-right">
                            <a
                              href=""
                              className="btn btn-danger"
                              onClick={(e) => this.RemoveAddCart(item.id)}
                            >
                              {" "}
                              Xóa
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="card-body border-top">
                    {currentUser
                    ?<a href="/order" className="btn btn-primary float-md-right" onClick={this.Order}>
                    Thanh toán <i className="fa fa-chevron-right" />
                  </a>
                  :<a href="/login" className="btn btn-primary float-md-right">
                  {" "}
                  Thanh toán <i className="fa fa-chevron-right" />{" "}
                </a>}
                    
                    <a href="#" className="btn btn-light">
                      {" "}
                      <i className="fa fa-chevron-left" /> Tiếp tục mua{" "}
                    </a>
                  </div>
                </div>{" "}
                {/* card.// */}
                <div className="alert alert-success mt-3">
                  <p className="icontext">
                    <i className="icon text-success fa fa-truck" /> Giao hàng miễn phí trong vòng 1-2 tuần
                  </p>
                </div>
              </main>{" "}
              {/* col.// */}
              <aside className="col-md-3">
                <div className="card mb-3">
                  <div className="card-body">
                    <form>
                     
                    </form>
                  </div>{" "}
                  {/* card-body.// */}
                </div>{" "}
                {/* card .// */}
                <div className="card">
                  <div className="card-body">
                    <dl className="dlist-align">
                      <dt>Tổng tiền:</dt>
                      <dd className="text-right"> <strong><var className="price">
                                <NumberFormat
                                  value={tong}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </var></strong></dd>
                    </dl>
                    <dl className="dlist-align">
                      <dt>Giảm giá</dt>
                      <dd className="text-right">-0</dd>
                    </dl> 
                    <dl className="dlist-align">
                      <dt>Thành tiền:</dt>
                      <dd className="text-right  h5">
                        <strong><var className="price">
                                <NumberFormat
                                  value={tong}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </var></strong>
                      </dd>
                    </dl>
                    <hr />
                    <p className="text-center mb-3">
                      <img src="home/images/misc/payments.png" height={26} />
                    </p>
                  </div>{" "}
                  {/* card-body.// */}
                </div>{" "}
                {/* card .// */}
              </aside>{" "}
              {/* col.// */}
            </div>
          </div>{" "}
          {/* container .//  */}
        </section>
        {/* ========================= SECTION CONTENT END// ========================= */}
        {/* ========================= SECTION  ========================= */}
        <section className="section-name border-top padding-y">
          <div className="container">
            <h6>Chính sách thanh toán và hoàn tiền</h6>
            <p>
            1.1 Người Mua tại Shopee Mall có thể yêu cầu hoàn lại tiền và/hoặc trả hàng hóa đã mua tại Shopee Mall (“Sản phẩm tại Shopee Mall”) 
            bằng cách nhấn vào nút “Yêu cầu Trả hàng/Hoàn tiền” trên Shopee.vn hoặc ứng dụng di động Shopee để yêu cầu trả hàng/hoàn tiền vào 
            bất kỳ thời điểm nào trong vòng bảy (07) ngàylịch kể từ ngày Sản phẩm tại Shopee Mall được cung cấp lần đầu tiên cho Người Mua tại 
            Shopee Mall (“Thời gian Yêu cầu Trả hàng”). Thông thường, ngày Sản phẩm được cung cấp lần đầu tiên cho Người Mua tại Shopee Mall sẽ là ngày 
            Người Mua tại Shopee Mall nhận được hàng theo ghi nhận trạng thái “Đã giao hàng” (hoặc các trạng thái có tính chất tương tự) trên hệ thống của Shopee.
            </p>
            <p>
            1.2 Sau khi Người Mua yêu cầu trả hàng-hoàn tiền, trừ yêu cầu “Hoàn tiền ngay”, Người Mua tại Shopee Mall phải hoàn trả 
            Sản phẩm đến Trung tâm xử lý trả hàng của Shopee trong vòng sáu (6) ngày lịch kể từ ngày yêu cầu trả hàng/hoàn tiền. 
            Khi trả Sản phẩm đã mua tại Shopee Mall, Người Mua tại Shopee Mall phải đóng gói sản phẩm trong hoặc kèm theo bao bì gói bọc ban đầu, 
            dán kèm phiếu trả hàng được Shopee cung cấp cho Người Mua (“Phiếu Trả hàng”). Phiếu Trả hàng sẽ có trong bưu kiện Sản phẩm tại Shopee Mall 
            được giao đến cho Người Mua hoặc được cung cấp bởi Shopee thông qua Trang Web, SMS, email hoặc các phương tiện khác. Phiếu Trả hàng 
            cũng bao gồm địa chỉ mà Sản phẩm của Shopee Mall sẽ được gửi trả lại. Shopee có quyền từ chối bất kỳ Yêu cầu Trả hàng/Hoàn tiền 
            nào được hoàn thành sau Thời gian Yêu cầu Trả hàng, hoặc Sản phẩm mà Người mua yêu cầu hoàn trả không được gửi Trung tâm xử lý 
            trả hàng của Shopee trong vòng sáu (6) ngày lịch kể từ ngày yêu cầu trả hàng/hoàn tiền.
            </p>
          </div>
          {/* container // */}
        </section>
      </div>
      </body>
<HomeFooterComponent/>
</div>
    );
  }
}
export default CartComponent;
