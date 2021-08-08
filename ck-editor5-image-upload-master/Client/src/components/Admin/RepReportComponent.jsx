import React from 'react';
import SendEmailService from '../../service/SendEmailService';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import BodyComponent from "./BodyComponent";
class RepReportComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            description:'',
            title:'',
            email:'',
            repdescription:''            
        }
        this.saveCategory = this.saveCategory.bind(this);
    }
    saveCategory = (e) =>{
        e.preventDefault();
        let sendemail = {title: this.state.title, email: this.state.email, description:this.state.repdescription};
        console.log('send => '+JSON.stringify(sendemail));
        SendEmailService.repReport(sendemail).then(res=>{
            alert("Phản hồi thành công");
            this.props.history.push('/admin-report');
        })
    }
    componentDidMount(){
        SendEmailService.getReportById(this.state.id).then((res) =>{
            let sendemail = res.data;
            this.setState({email: sendemail.email, description:sendemail.description, title:sendemail.title});
        });
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
        this.props.history.push('/admin-repreport');
    }
    render (){
        console.log("STATE_", this.state)
        return (
            <body id="page-top">
            <div id="wrapper">
              <HeaderComponent />
              <div id="content-wrapper" className="d-flex flex-column">
                <BodyComponent />
            <div className="container" style={{width:"500px"}}>
                <h1>Phản hồi</h1>            
            <form>
            <div className="form-group">
                    <label >Email của bạn</label>
                    <input type="text" className="form-control" placeholder="" name="email" value={this.state.email} onChange={this.handlechang}/>
                </div>
                <div className="form-group">
                    <label >Tiêu đề</label>
                    <input type="text" className="form-control" placeholder="" name="title" value={this.state.title} onChange={this.handlechang}/>
                </div>
                <div className="form-group">
                    <label >Nội dung</label>
                    <textarea type="text" className="form-control" placeholder="Phản hồi" name="description" value={this.state.description} onChange={this.handlechang} disabled/>
                </div>
                <div className="form-group">
                    <label >Trả lời</label>
                    <textarea type="text" className="form-control" placeholder="Phản hồi" name="repdescription" value={this.state.repdescription} onChange={this.handlechang} rows={5} cols={5}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.saveCategory}>Gửi</button>
                <button type="button" class="btn btn-dark" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Thoát</button>
            </form>
            </div>
            </div>
        </div>
        <FooterComponent />
      </body>
        )
    }
}
export default RepReportComponent;