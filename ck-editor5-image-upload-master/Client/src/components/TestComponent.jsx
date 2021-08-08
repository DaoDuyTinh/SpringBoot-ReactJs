import React, { Component } from "react";
import axios from 'axios';
import HomeHeaderComponent from "./Home/HomeHeaderComponent";
import HomeFooterComponent from "./Home/HomeFooterComponent";
export default class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }
  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] })
  }
  
  uploadHandler = ( ) => {
    console.log(this.state.selectedFile)
    const formData = new FormData()
  formData.append(
    'myFile',this.state.selectedFile
  );  
  axios.post("https://api.cloudinary.com/v1_1/dtshop/images", formData)
  .then(res=>{
    console.log(res)
  })
  }
  render() {

    return (
      <div>
        <HomeHeaderComponent />
        <body>
          <div className="row"style={{marginTop:"30px"}}>
          <div className="container" style={{border:"2px outset #e4cdcd",marginTop:"30px",marginBottom:"30px"}}>
          <span><span><a href="http://localhost:3000/">Trang chủ</a> » <span><a href="http://localhost:3000/service/">Dịch Vụ</a> » <span class="breadcrumb_last" aria-current="page">Bảo hành sản phẩm</span></span></span></span>
      <div className="warranty__title"><h2>Chính sách bảo hành</h2></div>
      <div className="warranty__title-sub"><p>Tất cả các loại xe gắn máy Yamaha mới do Yamaha Motor Việt Nam sản xuất, được mua từ các Đại lý do Yamaha ủy nhiệm đều được đăng ký bảo hành và cấp sổ bảo hành để hưởng dịch vụ bảo hành (điều chỉnh hay thay thế miễn phí bất kỳ chi tiết nào bị hư hỏng do lỗi của nhà sản xuất – không bao gồm những điều ngoài phạm vi bảo hành nêu ở mục dưới đây) trong thời gian quy định. Thời hạn bảo hành là ba (3) năm hay 30.000km đầu tiên, tùy theo điều kiện nào đến trước (*)</p></div>
      <div className="warranty__part"><div className="hidentxt" style={{display: 'block'}}><h4>(*) ĐIỀU KIỆN CHI TIẾT CỦA CHÍNH SÁCH BẢO HÀNH 3 NĂM (30.000KM):</h4><p>– Nếu khách hàng sử dụng đầy đủ &amp; đúng thời gian quy định trên mỗi phiếu của 03 phiếu miễn phí đầu tiên (phiếu số 1 đến số 3) tại đại lý do Yamaha ủy nhiệm sẽ được gia hạn thêm 01 năm hoặc 10.000km bảo hành, tổng thời gian bảo hành là 2 năm hoặc 20.000km, tùy theo điều kiện nào đến trước.<br />
       – Nếu khách hàng sử dụng đầy đủ &amp; đúng 03 phiếu bảo dưỡng miễn phí đầu tiên, tiếp tục sử dụng đủ &amp; đúng 03 phiếu của năm thứ 2 (phiếu số 4 đến số 6) tại đại lý do Yamaha ủy nhiệm sẽ được gia hạn thêm 1 năm hoặc 10.000km bảo hành nữa, tổng thời gian bảo hành là 03 năm hoặc 30.000km, tùy theo điều kiện nào đến trước.<br /> Tham khảo thêm hình minh họa dưới đây:</p>
      <p><picture><source data-srcset="https://yamaha-motor.com.vn/wp/wp-content/webp-express/webp-images/doc-root/wp/wp-content/themes/yamaha/assets/img/service-subpage/step.jpg.webp" type="image/webp" srcSet="https://yamaha-motor.com.vn/wp/wp-content/webp-express/webp-images/doc-root/wp/wp-content/themes/yamaha/assets/img/service-subpage/step.jpg.webp" /><noscript>&lt;img class="alignnone  responsive webpexpress-processed" src="https://yamaha-motor.com.vn/wp/wp-content/themes/yamaha/assets/img/service-subpage/step.jpg" alt="" width="955" height="299"&gt;</noscript>
      <img className="alignnone  responsive webpexpress-processed lazyloaded" src="https://yamaha-motor.com.vn/wp/wp-content/themes/yamaha/assets/img/service-subpage/step.jpg" data-src="https://yamaha-motor.com.vn/wp/wp-content/themes/yamaha/assets/img/service-subpage/step.jpg" alt="" width={955} height={299} /></picture></p><h4> * QUYỀN LỢI VÀ TRÁCH NHIỆM CỦA KHÁCH HÀNG</h4><p>– Để đảm bảo quyền lợi được hưởng chế độ Bảo hành của nhà sản xuất, Yamaha Motor Việt Nam khuyến cáo, khách hàng nên lựa chọn mua xe tại đại lý ủy quyền của Yamaha trên toàn quốc. Đại lý ủy quyền của Yamaha phải bàn giao số bảo hành và đăng ký bảo hành cho xe trước khi giao xe mới cho khách hàng.<br /> – Trong suốt giai đoạn được hưởng dịch vụ bảo hành, khách hàng có quyền mang xe đến bất kỳ đại lý ủy nhiệm nào của YAMAHA để sử dụng dịch vụ này (Nội dung của dịch vụ như nêu ở phần trên).<br /> 
      – Nếu có những nghi vấn về sự hỏng hóc cần bảo hành, khách hàng phải mang xe đến đại lý ủy nhiệm của YAMAHA trong vòng 03 ngày kể từ khi phát hiện ra hiện tượng hư hỏng.<br /> – Khách hàng phải bảo dưỡng và sử dụng xe đúng cách, phải tuân thủ theo những hướng dẫn và những lời khuyên nêu trong “Sách hướng dẫn sử dụng xe”.<br /> – Khách hàng vẫn có quyền sử dụng phiếu bảo dưỡng miễn phí đến hết năm thứ 3 cho dù thời hạn bảo hành của xe đã hết hiệu lực.<br /> * CHÍNH SÁCH BẢO HÀNH ĐẶC BIỆT</p><p>Quý khách hàng thân mến!<br /> Nhằm quảng bá và khẳng định chất lượng vượt trội của bộ chi tiết xilanh và piston DiASil, nhờ ứng dụng bí quyết công nghệ độc đáo của Yamaha đó là:<br /> Công nghệ đúc hợp kim nhôm silicon “DiASil” và công nghệ piston nhôm dập nóng. Công ty TNHH Yamaha Motor Việt Nam xin trân trọng thông báo đến Quý khách hàng về chính sách bảo hành đặc biệt đối với bộ xilanh và piston DiASil như sau:<br /> 
      1. Thời hạn bảo hành đối với bộ xilanh và piston DiASil là sáu mươi (60) tháng/(5 năm) hoặc 50.000 km, tùy theo điều kiện nào đến trước.<br /> 2. Chỉ bộ xilanh và piston DiASil được bảo hành theo thời hạn trên khi nguyên nhân chính của hư hỏng trực tiếp do xilanh và piston gây ra .<br /> 3. Bộ xilanh và piston DiASil sẽ không được bảo hành theo thời hạn trên nếu:<br /> – Nguyên nhân chính của hư hỏng bộ xilanh và piston DiASil là do chi tiết khác gây ra, kể cả do xéc măng (bạc), ví dụ như: lọc gió bẩn hay hư hỏng, hệ thống làm mát bị hư hỏng, hệ thống bôi trơn bị hư hỏng, dùng sai loại bugi, do xupap gây ra, …<br /> – Lỗi do việc sử dụng xe không đúng mục đích thiết kế, không đúng hướng dẫn sử dụng,ví dụ: đi vào chỗ nước ngập sâu và nước lọt vào động cơ,dùng xăng hay dầu nhớt bị pha chế phụ gia không phù hợp,<br /> – Lỗi do việc bảo trì, bảo dưỡng không đúng, ví dụ: lâu không thay nhớt, thiếu nhớt, …<br />
       – Do chế tác, sửa đổi hoặc lắp ráp các phụ tùng liên quan không chính hiệu Yamaha.<br />
       – Do lưu kho hay vận chuyển không đúng.<br /> 
       – Do thiên tai, hỏa hoạn hay tai nạn<br /> 
       4. Chính sách bảo hành đặc biệt này cũng áp dụng cho tất cả các xe Exciter và Nouvo 135 đã bán trước đây. Thời hạn bảo hành còn lại đối với bộ xilanh pistion của những xe đã bán là hiệu số của 60 tháng trừ đi số tháng chiếc xe đã sử dụng tính từ thời điểm xe được bán.<br /> 
       Rất mong nhận được sự hài lòng và tin tưởng của Quý khách hàng với sản phẩm và dịch vụ của Yamaha.</p><br></br>
       </div><p className="btnmore active" data-target=".hidentxt" data-toggle="collapse" /></div>
       </div>
       </div>
       </body>
        <HomeFooterComponent />
      </div>
    );
  }
}
