import React from "react";
import Carousel from "react-elastic-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeHeaderComponent from "../Home/HomeHeaderComponent";
import HomeFooterComponent from "../Home/HomeFooterComponent";

class CustomerCareComponent extends React.Component {
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
  <article id="rwd-main-content">
    <div className="elementImg">
      <h1 className="rwd-headline1-type02"><span style={{textAlign:"center"}}>Dịch vụ One-to-One</span></h1>
      <p style={{textAlign:"center"}}>Với dịch vụ One-to-One chúng tôi đảm bảo rằng mọi khách hàng đều có được trải nghiệm Kando.</p>
      {/* / .rwd-main-content-group */}</div>
    {/* Contents Area */}    
    <div className="rwd-main-content-group full">
      <img className="sp-hide" src="/business/mc/customer-support/onetoone-service/img/key.jpg" alt="" />
      <img className="pc-hide" src="/business/mc/customer-support/onetoone-service/img/key_sp.jpg" alt="" />
      {/* / .rwd-block-keyvisual */}</div>
    <div className="rwd-main-content-group">
      <h2 className="rwd-section-headline rwd-small rwd-bold rwd-pc-center rwd-sp-center rwd-border-all"><span>3 yếu tố để hiện thực hóa Dịch vụ One-to-One</span></h2>
      <p className="rwd-text rwd-pc-center">Để hiện thực hóa Dịch vụ One-to-One, Yamaha tập trung vào việc đào tạo các kỹ thuật viên tại đại lý, những người gần gũi nhất với khách hàng.</p>
      <div className="elementImg" style={{marginLeft:"250px"}}>
        <img src="http://localhost:8080/images/pict_004.png" alt="" style={{verticalAlign:"center"}}/><br />
        <p style={{textAlign:"center",marginLeft:"-150px"}}>Đảm bảo trải nghiệm Kando* cho tất cả khách hàng.</p>
      </div>
      <div className="row">
        <div className="col-lg-3 elementImg"style={{marginLeft:"50px"}}>
          <figure>
            <img src="http://localhost:8080/images/pict_005.jpg" alt="" style={{width:"300px",height:"300px",margin:"10px 30px 10px 10px"}}/>
            <p style={{textAlign:"center"}}>Kỹ năng bảo dưỡng</p>
          </figure>
          <dl>
            <dt>Những kỹ năng bảo dưỡng có được qua quá trình rèn luyện được vận dụng theo cách phù hợp nhất với phong cách lái xe của bạn.</dt><br></br>
            <dd>Các kỹ thuật viên đạt chứng chỉ YTA (Hệ thống đào tạo kỹ thuật viên Yamaha) làm việc tại các đại lý Yamaha đều là những nhân viên chuyên nghiệp, hiểu rõ về xe Yamaha hơn bất kỳ ai. Họ thực hiện công việc bảo dưỡng tốt nhất cho xe của bạn, với những kỹ năng mang tầm quốc tế đã trau dồi tại YTA đồng thời cung cấp các dịch vụ đáp ứng mọi nhu cầu của bạn.</dd>
          </dl>
          {/* / .rwd-grid-item */}</div>
        <div className="col-lg-3 elementImg"style={{marginLeft:"50px"}}>
          <figure>
            <img src="http://localhost:8080/images/pict_006.jpg" alt="" style={{width:"300px",height:"300px",  margin:"10px 30px 10px 10px"}}/>
            <p style={{textAlign:"center"}}>Kiến thức về sản phẩm</p>
          </figure>
          <dl>
            <dt>Kiến thức chuyên sâu có thể trả lời cho mọi câu hỏi của khách hàng về xe của họ.</dt><br></br><br></br>
            <dd>Các kỹ thuật viên đạt chứng chỉ YTA cũng là những người hiểu rõ nhất các sản phẩm của Yamha. Vận dụng những kiến thức chuyên sâu về sản phẩm cùng kinh nghiệm làm việc phong phú, họ có thể đưa ra những giải thích chi tiết và dễ hiểu cho mọi thắc mắc về các sản phẩm của Yamaha.</dd>
          </dl>
          {/* / .rwd-grid-item */}</div>
        <div className="col-lg-3 elementImg" style={{marginLeft:"50px"}}>
          <figure>
            <img src="http://localhost:8080/images/pict_007.jpg" alt="" style={{width:"300px",height:"300px",margin:"10px 10px 10px 10px"}}/>
            <p style={{textAlign:"center"}}>Sự hỗ trợ đáng tin cậy</p>
          </figure>
          <dl>
            <dt>Sự hỗ trợ đáng tin cậy cho chiếc xe của bạn, không chỉ trong trường hợp xảy ra sự cố.</dt><br></br><br></br>
            <dd>Các kỹ thuật viên đạt chứng chỉ YTA là những người trực tiếp phục vụ khách hàng, luôn sẵn sàng để hỗ trợ cho chiếc xe của bạn. Họ không chỉ mang lại sự tin tưởng trong trường hợp xe của bạn gặp sự cố mà còn cung cấp những dịch vụ bảo dưỡng cần thiết và đưa ra những cảnh báo sớm nhằm giữ cho xe luôn ở trong trạng thái tốt nhất.</dd>
          </dl>
          {/* / .rwd-grid-item */}</div>
        {/* / .rwd-grid-cardlist01 */}</div>
     </div>
    {/* /Contents Area */}
    {/* / #rwd-main-content */}</article>

    </div>
    </div>
    </body>
        <HomeFooterComponent />
      </div>    
    );
  }
}

export default CustomerCareComponent;