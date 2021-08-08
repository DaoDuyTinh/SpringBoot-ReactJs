import React from 'react';
import {BrowserRouter as Router, Route, Switch,BrowserRouter} from 'react-router-dom';
import HomeHeaderComponent from './HomeHeaderComponent';
import HomeFooterComponent from './HomeFooterComponent';
import ProFileComponent from './User/ProFileComponent';
import HomeProductBotComponent from './HomeProductBotComponent';
import HomeProductComponent from './HomeProductComponent';
import ChangPassComponent from './User/ChangsPassComponent';
import ProductDetailComponent from './Product/ProductDetailComponent';
import LoginComponent from './User/LoginComponent';
import RegistrationComponent from './User/RegistrationComponent';
import CartComponent from '../Cart/CartComponent';
import OrderComponent from '../Cart/OrderComponent';
import NewsDetailComponent from '../News/NewsDetailComponent';
import MyOrderComponent from '../Cart/MyOrderComponent';
import HomeHomeComponent from './HomeHomeComponent';
class HomeComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
        
        }
    }
    render (){
        return (
            
            
            <BrowserRouter>
                   <HomeHeaderComponent/>
        <body >
             <Switch>
                <Route path ="/" exact component = {HomeHomeComponent}></Route>
                {/* <Route path ="/product/:id" exact component = {ProductDetailComponent}></Route>
                <Route path ="/login" exact render = {LoginComponent}></Route>
                <Route path ="/registration"  exact component = {RegistrationComponent}></Route>
                <Route path ="/cart"  exact component ={CartComponent} ></Route>
                <Route path ="/order"  exact component ={OrderComponent} ></Route>
                <Route path ="/news/:id"  exact component ={NewsDetailComponent} ></Route>
                <Route path ="/profile"  exact component ={ProFileComponent} ></Route>
                <Route path ="/changepass"  exact component ={ChangPassComponent} ></Route>
                <Route path ="/myorder"  exact component ={MyOrderComponent} ></Route> */}
                </Switch>
     
        </body>
        <HomeFooterComponent/>
      </BrowserRouter>
           
        )
    }
}
export default HomeComponent