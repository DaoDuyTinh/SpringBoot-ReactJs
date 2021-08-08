import React from 'react';
import NewsService from '../../service/NewsService';
import SendEmailService from '../../service/SendEmailService';
import HomeHeaderComponent from "../Home/HomeHeaderComponent";
import HomeFooterComponent from "../Home/HomeFooterComponent";
class SendEmailComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            description:'',
            title:'',
            email:'',
            news:[]
            
        }
        this.saveCategory = this.saveCategory.bind(this);
    }
    componentDidMount(){
        NewsService.getHotNews(0,4).then((res) => res.data)
    .then((data) => {
      this.setState({
        news: data.content})
  })
      }
    saveCategory = (e) =>{
        e.preventDefault();
        let sendemail = {title: this.state.title, email: this.state.email, description:this.state.description};
        console.log('send => '+JSON.stringify(sendemail));
        SendEmailService.createReport(sendemail).then(res=>{
            alert("Phản hồi thành công");
            this.props.history.push('/');
        })
    }
    handlechang = (event)=>
    {
        const target = event.target;
        const {name, value  }= target;
        this.setState   ({
            [name]:value
        })
    }
    cancel(){
        this.props.history.push('/');
    }
    render (){  
        console.log("STATE_", this.state)
        var i=0;
        return (
            <div>
        <HomeHeaderComponent />
        <body >
        <div className="container" style={{height:"500px",marginBottom:"50px"}}>
            <div className="row"style={{marginTop:"50px",backgroundColor:"#dee2e6",border:"1px solid gray"}}>
            <div className="col-lg-8" style={{width:"500px",border:"1px solid #e4cdcd", height:"500px"}}>
                <h2 className="warranty__title">Liên hệ</h2>            
            <form>
            <div className="form-group">
                    <h5>Email của bạn</h5>
                    <input type="text" className="form-control" placeholder="dtshop@gmail.com" name="email" value={this.state.email} onChange={this.handlechang}/>
                </div>
                <div className="form-group">
                    <h5 >Tiêu đề</h5>
                    <input type="text" className="form-control" placeholder="Tiêu đề" name="title" value={this.state.title} onChange={this.handlechang}/>
                </div>
                <div className="form-group">
                    <h5 >Nội dung</h5>
                    <textarea type="text" className="form-control" placeholder="Phản hồi" name="description" value={this.state.description} onChange={this.handlechang} rows={6.5} cols={4}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.saveCategory}>Gửi</button>
                <button type="button" class="btn btn-dark" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Thoát</button>
            </form>
            </div>
            <div className="col-lg-3" style={{marginTop:"-35px"}}>
            <div className="col-md-3 border-listnew" style={{marginLeft:"5px"}}>
              <ul class="list-group" style={{width:"310px"}}>
                <li class="list-group-item active btn btn-danger"><h4>Tin tức nổi bật</h4></li>
               
                    {this.state.news.map( tutorial =>
                     <li class="list-group-item">
                     <li class="row">
                     <div className="col-md-3 ">
                       <a href={"http://localhost:3000/news/" + tutorial.id}>
                      <img src={"http://localhost:8080/images/"+tutorial.image} style={{width:"70px",height:"60px"}}/>
                  </a>
             </div>
             <div className="col-md-9">
             <a href={"http://localhost:3000/news/" + tutorial.id} style={{textDecoration:"none"}}><h6>{tutorial.title}</h6></a>
                    </div>
                    </li>
                    </li>

                      )}
              </ul>
              </div>    
            </div>
            </div>
            </div>
            </body>
        <HomeFooterComponent />
      </div>
        )
    }
}
export default SendEmailComponent;