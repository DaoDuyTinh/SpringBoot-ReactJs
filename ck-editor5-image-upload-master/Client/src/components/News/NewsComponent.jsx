import React from "react";
import NewsService from "../../service/NewsService";

class NewsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      news:[]
    };
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  componentDidMount() {
    NewsService.getHomeNews(this.getRandomInt(2),4)
      .then(response => response.data)
      .then((data) => {
        this.setState({content: data.content})
    });
    NewsService.getHotNews(this.getRandomInt(4),1).then((res) => res.data)
    .then((data) => {
      this.setState({
        news: data.content})
  })
  }
  render() {
    return (
      <div style={{marginLeft:'35px',marginRight:'35px'}}>
         <section className="padding-bottom-sm">
          <header className="section-heading heading-line">
            <h4 className="title-section text-uppercase" style={{color:"#ae0d0d"}}>Tin tức</h4>
          </header>
          <div className="row">
              {this.state.news.map(ne=>
              <div className="col-lg-5 " >
              <div className="card bordernew" style={{ width: "40rem",height:"446px",marginLeft:"5px", marginTop:"0px"}}>
              
                <img
                  className="card-img-top"
                  style={{height:"350px", paddingTop:"0px"}}
                  src={"http://localhost:8080/images/"+ne.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                <a href={"http://localhost:3000/news-" + ne.id} style={{textDecoration:"none"}}> <h5 className="card-title e" style={{textDecoration:"none"}}>{ne.title}</h5> </a>
                </div>
               
              </div>
            </div>)}
            <div className="col-lg-3">
            <ul class="list-group" style={{width:"310px"}}>               
                    {this.state.content.map( tutorial =>
              
                     <li class="list-group-item" style={{height:"111.5px"}}>
                     <li class="row">
                     <div className="col-md-4 ">
                       <a href={"http://localhost:3000/news-" + tutorial.id}>
                       <img
                  className="card-img-top"
                  src={"http://localhost:8080/images/"+tutorial.image}
                  style={{width:"90px",height:"80px"}}
                  alt="Card image cap"
                />
                  </a>
             </div>
             <div className="col-md-8">
                   <a href={"http://localhost:3000/news-" + tutorial.id} style={{textDecoration:"none"}}><p className="c" >{tutorial.shortDescription}</p> </a>
                    </div>
                    </li>
                    </li>
                  
                      )}
              </ul>
            </div>
            {this.state.news.map(ne=>
              <div className="col-lg-4" >
              <div className="card bordernew" style={{ width: "33.5rem",height:"446px", marginTop:"0px",marginLeft:"-47px"}}>
              <img
                  className="card-img-top"
                  src={"http://localhost:8080/images/gif.gif"}
                  style={{width:"500px",height:"360px"}}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-text h">“My Yamaha Motor” được tạo ra dành cho tất cả các khách hàng đang sở hữu các dòng xe máy Yamaha. Ứng dụng thông minh này sẽ cung cấp cho khách hàng rất nhiều các chức năng tiện ích cực kì hữu dụng</h5>
                </div>
              </div>
              
            </div>)}
            </div>
            </section>
          </div>
    );
  }
}
export default NewsComponent;
