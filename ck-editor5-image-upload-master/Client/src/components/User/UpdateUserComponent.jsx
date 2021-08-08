import React from 'react';
import UserService from '../../service/UserService';
import HeaderComponent from '../Admin/HeaderComponent';
import FooterComponent from '../Admin/FooterComponent';
import BodyComponent from '../Admin/BodyComponent';
class UpdateUserComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
              username:'',
              firstname:'',
              lastname:'',
              email:'',
              address:'',
              phone:'', 
              password:''
            
        }
        this.saveUser = this.saveUser.bind(this);
        this.handlechang = this.handlechang.bind(this);
    
    }
    componentDidMount(){
       UserService.getUserById(this.state.id).then(res=>{
           let user = res.data;
           this.setState({username: user.username, firstname: user.firstname, lastname:user.lastname, address: user.address,phone: user.phone,
            password: user.password, email:user.email})
       })
    };
    saveUser = (e) =>{
        e.preventDefault();
        let user = {username: this.state.username, firstname: this.state.firstname, lastname:this.state.lastname, address: this.state.address,phone: this.state.phone,
            password: this.state.password, email:this.state.email};
            UserService.updateUser(user,this.state.id).then(response => {
                alert("Cập nhật thành công");
            this.props.history.push('/admin-user');
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
        this.props.history.push('admin-user');
    }
    render (){
        console.log("STATE_", this.state)
        return (
            <body id="page-top">
          <div id="wrapper">
         <HeaderComponent/>
         <div id="content-wrapper" className="d-flex flex-column">
         <BodyComponent/>
            <div className="container">
                <h1>Thêm tài khoản </h1>            
            <form>
                <div className="form-group">
                    <label >Tên đăng nhập</label>
                    <input type="text" className="form-control" placeholder="" name="username" value={this.state.username} onChange={this.handlechang}/>
                </div>
                <div className="form-group">
                    <label >Họ</label>
                    <input type="text" className="form-control" placeholder="" name="firstname" value={this.state.firstname} onChange={this.handlechang}/>
                </div>
                <div className="form-group">
                    <label >Tên</label>
                    <input type="text" className="form-control" placeholder="" name="lastname" value={this.state.lastname} onChange={this.handlechang}/>
                </div>
                <div className="form-group">
                    <label >Email</label>
                    <input type="text" className="form-control" placeholder="" name="email" value={this.state.email} onChange={this.handlechang}/>
                </div>
                <div className="form-group">
                    <label >Địa chỉ</label>
                    <input type="text" className="form-control" placeholder="" name="address" value={this.state.address} onChange={this.handlechang}/>
                </div>
                <div className="form-group">
                    <label >Số điện thoại</label>
                    <input type="number" className="form-control" placeholder="" name="phone" value={this.state.phone} onChange={this.handlechang}/>
                </div>
                <div className="form-group">
                    <label >Mật khẩu</label>
                    <input type="number" className="form-control" placeholder="" name="password" value={this.state.password} onChange={this.handlechang}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.saveUser}>Lưu</button>
                <button type="button" class="btn btn-dark" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Thoát</button>
            </form>
            </div>
            </div>
</div>
<FooterComponent/>

    </body>
        )
    }
}
export default UpdateUserComponent