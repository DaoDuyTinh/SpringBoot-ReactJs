import './App.css';
import ListCategoryComponent from './components/Category/ListCategoryComponent';
import HeaderComponent from './components/Admin/HeaderComponent';
import FooterComponent from './components/Admin/FooterComponent';
import BodyComponent from './components/Admin/BodyComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddCategoryComponent from './components/Category/AddCategoryComponent';
import UpdateCategoryComponent from './components/Category/UpdateCategoryComponent';
import ListProductComponent from './components/Product/ListProductComponent';
import AddProductComponent from './components/Product/AddProductComponent';
import UpdateProductComponent from './components/Product/UpdateProductComponent';
import HomeComponent from './components/Home/HomeComponent';
import ProductDetailComponent from './components/Home/Product/ProductDetailComponent';
import LoginComponent from './components/Home/User/LoginComponent';
import RegistrationComponent from './components/Home/User/RegistrationComponent';
import CartComponent from './components/Cart/CartComponent';
import OrderComponent from './components/Cart/OrderComponent';
import NewsDetailComponent from './components/News/NewsDetailComponent';
import TestComponent from './components/TestComponent';
import ProFileComponent from './components/Home/User/ProFileComponent';
import ChangPassComponent from './components/Home/User/ChangsPassComponent';
import MyOrderComponent from './components/Cart/MyOrderComponent';
import HomeAdminComponent from './components/Admin/HomeAdminComponent';
import ReactSelectExample from './components/ReactSelectExmaple';
import AddNewsComponent from './components/News/AddNewsComponent';
import ListNewsComponent from './components/News/ListNewsComponent';
import UpdateNewsComponent from './components/News/UpdateNewsComponent';
import ListOrderComponent from './components/Order/ListOrderComponent';
import OrderDetailComponent from './components/Order/OrderDetailComponent';
import SearchComponent from './components/Home/Product/SearchComponent';
import AddBannerComponent from './components/Banner/AddBannerComponent';
import ListBannerComponent from './components/Banner/ListBannerComponent';
import UpdateBannerComponent from './components/Banner/UpdateBannerComponent';
import ProductByCategoryComponent from './components/Home/Product/ProductByCategoryComponent';
import ListUserComponent from './components/User/ListUserComponent';
import AddUserComponent from './components/User/AddUserComponent';
import UpdateUserComponent from './components/User/UpdateUserComponent';
import UploadFiles from './components/upload-files.component';
import AllNewsComponent from './components/News/AllNewsComponent';
import SendEmailComponent from './components/Home/SendEmailComponent';
import ListReportComponent from './components/Admin/ListReportComponent';
import RepReportComponent from './components/Admin/RepReportComponent';
import Contact from './components/contact';
import ServiceComponent from './components/Home/ServiceComponent';
import CustomerCareComponent from './components/Home/CustomerCareComponent';
import FreeComponent from './components/Home/FreeComponent';
import ListSalientComponent from './components/Salient/ListSalientComponent';
import AddSalientComponent from './components/Salient/AddSalientComponent';
import UpdateSalientComponent from './components/Salient/UpdateSalientComponent';
import AccessComponent from './components/Home/AccessComponent';
import ConfigPassword from './components/Home/User/ConfigPassword';
function App() {

  return (
    
          <Router>
                <Switch>
                <Route path ="/" exact component = {HomeComponent}></Route>
                <Route path ="/product/:id" component = {ProductDetailComponent}></Route>
                <Route path ="/category/:id" component = {ProductByCategoryComponent}></Route>
                <Route path ="/login" component = {LoginComponent}></Route>
                <Route path ="/registration" component = {RegistrationComponent}></Route>
                <Route path ="/cart" component ={CartComponent} ></Route>
                <Route path ="/order" component ={OrderComponent} ></Route>
                <Route path ="/contact" component ={SendEmailComponent} ></Route>
                <Route path ="/accessall" component ={AccessComponent} ></Route>
                <Route path ="/news-:id" component ={NewsDetailComponent} ></Route>
                <Route path ="/news" component ={AllNewsComponent} ></Route>
                <Route path ="/test" component ={TestComponent} ></Route>
                <Route path ="/care" component ={CustomerCareComponent} ></Route>
                <Route path ="/free" component ={FreeComponent} ></Route>
                <Route path ="/service" component ={ServiceComponent} ></Route>
                <Route path ="/profile" component ={ProFileComponent} ></Route>
                <Route path ="/changepass" component ={ChangPassComponent} ></Route>
                <Route path ="/config" component ={ConfigPassword} ></Route>
                <Route path ="/myorder" component ={MyOrderComponent} ></Route>
                <Route path ="/admin" component ={HomeAdminComponent} ></Route>
                <Route path ="/admin-category" component = {ListCategoryComponent}></Route>
                <Route path ="/admin-add-category" component = {AddCategoryComponent}></Route>
                <Route path ="/admin-update-category/:id" component = {UpdateCategoryComponent}></Route>
                <Route path ="/admin-product" component = {ListProductComponent}></Route>
                <Route path ="/admin-add-product" component = {AddProductComponent}></Route>
                <Route path ="/admin-update-product/:id" component = {UpdateProductComponent}></Route>
                <Route path ="/admin-add-news" component = {AddNewsComponent}></Route>
                <Route path ="/admin-news" component = {ListNewsComponent}></Route>
                <Route path ="/admin-update-news-:id" component = {UpdateNewsComponent}></Route>
                <Route path ="/admin-order" component = {ListOrderComponent}></Route>
                <Route path ="/admin-get-orderdetail/:id" component = {OrderDetailComponent}></Route>
                <Route path ="/admin-banner" component = {ListBannerComponent}></Route>
                <Route path ="/admin-add-banner" component = {AddBannerComponent}></Route>
                <Route path ="/admin-update-banner/:id" component = {UpdateBannerComponent}></Route>
                <Route path ="/admin-user" component = {ListUserComponent}></Route>
                <Route path ="/admin-add-user" component = {AddUserComponent}></Route>
                <Route path ="/admin-update-user/:id" component = {UpdateUserComponent}></Route>
                <Route path ="/admin-report" component = {ListReportComponent}></Route>
                <Route path ="/admin-repreport/:id" component = {RepReportComponent}></Route>
                <Route path ="/admin-salient/:id" component = {ListSalientComponent}></Route>
                <Route path ="/admin-add-salient/:id" component = {AddSalientComponent}></Route>
                <Route path ="/admin-update-salient/:idpro/:id" component = {UpdateSalientComponent}></Route>
                <Route path ="/react" component = {ReactSelectExample}></Route>
                <Route path ="/search/:name" component = {SearchComponent}></Route>
                <Route path ="/upload" component = {UploadFiles}></Route>
                </Switch>
                </Router>
  );
}

export default App;
