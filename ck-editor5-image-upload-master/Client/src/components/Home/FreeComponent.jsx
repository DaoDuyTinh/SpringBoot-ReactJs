import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeHeaderComponent from "../Home/HomeHeaderComponent";
import HomeFooterComponent from "../Home/HomeFooterComponent";

class FreeComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        content: []
    } 
  }
  render() {
    return (
      <div>
      <HomeHeaderComponent />
      <body >
      <div className="row" style={{marginLeft:"40px", width:"1509px",marginTop:"20px", marginBottom:"50px"}}>
      <div className="container"style={{border:"2px outset #e4cdcd",marginTop:"30px",marginBottom:"30px"}}>
      <h1>LỊCH BẢO DƯỠNG MIỄN PHÍ</h1>
<p>Trong sổ bảo hành cấp cho khách hàng có chín (09) phiếu bảo dưỡng định kì để sử dụng dịch vụ này.</p>

<img style={{width:"110px" ,height:"110px",marginLeft:"500px"}} src="https://yamaha-motor.com.vn/wp/wp-content/uploads/2019/07/1111.png" data-src="https://yamaha-motor.com.vn/wp/wp-content/uploads/2019/07/1111.png" alt=""></img>

<p>Phiếu bảo dưỡng miễn phí được chia làm ba loại với thời hạn sử dụng và nội dung khác nhau.<br></br>

Loại <b>“Phiếu bảo dưỡng cấp độ 1”</b> có một (01) phiếu;<br></br>

Loại <b>“Phiếu bảo dưỡng cấp độ 2”</b> có năm (05) phiếu;<br></br>

Loại <b>“Phiếu bảo dưỡng cấp độ 3”</b> có ba (03) phiếu.<br></br>

– Phiếu số 1: Sử dụng trong vòng 4 tháng đầu tiên.<br></br>
– Phiếu số 2: Sử dụng từ tháng thứ năm đến tháng thứ mười<br></br>
– Phiếu số 3: Sử dụng từ tháng thứ mười một đến tháng thứ mười bốn.<br></br>
– Phiếu số 4: Sử dụng từ tháng thứ mười lăm đến tháng thứ mười tám.<br></br>
– Phiếu số 5: Sử dụng từ tháng thứ mười chín đến tháng thứ hai mươi hai.<br></br>
– Phiếu số 6: Sử dụng từ tháng thứ hai mươi ba đến tháng thứ hai mươi sáu.<br></br>
– Phiếu số 7: Sử dụng từ tháng thứ hai bảy đến tháng thứ ba mươi.<br></br>
– Phiếu số 8: Sử dụng từ tháng thứ ba mươi mốt đến tháng thứ ba mươi tư.<br></br>
– Phiếu số 9: Sử dụng từ tháng thứ ba lăm đến tháng thứ ba tám.<br></br>
</p>
<img  style={{marginLeft:"55px"}}src="https://yamaha-motor.com.vn/wp/wp-content/uploads/2020/01/Screen-Shot-2020-01-06-at-8.21.06-AM.png" data-src="https://yamaha-motor.com.vn/wp/wp-content/uploads/2020/01/Screen-Shot-2020-01-06-at-8.21.06-AM.png" alt="" width="988" height="306" data-srcset="https://yamaha-motor.com.vn/wp/wp-content/uploads/2020/01/Screen-Shot-2020-01-06-at-8.21.06-AM.png 988w, https://yamaha-motor.com.vn/wp/wp-content/uploads/2020/01/Screen-Shot-2020-01-06-at-8.21.06-AM-150x46.png 150w, https://yamaha-motor.com.vn/wp/wp-content/uploads/2020/01/Screen-Shot-2020-01-06-at-8.21.06-AM-300x93.png 300w, https://yamaha-motor.com.vn/wp/wp-content/uploads/2020/01/Screen-Shot-2020-01-06-at-8.21.06-AM-768x238.png 768w" data-sizes="(max-width: 988px) 100vw, 988px" sizes="(max-width: 988px) 100vw, 988px" srcset="https://yamaha-motor.com.vn/wp/wp-content/uploads/2020/01/Screen-Shot-2020-01-06-at-8.21.06-AM.png 988w, https://yamaha-motor.com.vn/wp/wp-content/uploads/2020/01/Screen-Shot-2020-01-06-at-8.21.06-AM-150x46.png 150w, https://yamaha-motor.com.vn/wp/wp-content/uploads/2020/01/Screen-Shot-2020-01-06-at-8.21.06-AM-300x93.png 300w, https://yamaha-motor.com.vn/wp/wp-content/uploads/2020/01/Screen-Shot-2020-01-06-at-8.21.06-AM-768x238.png 768w"></img>
    </div>
    </div>
    </body>
        <HomeFooterComponent />
      </div>    
    );
  }
}

export default FreeComponent;