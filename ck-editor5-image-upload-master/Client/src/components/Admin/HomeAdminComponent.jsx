import React from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import AuthService from "../../service/AuthService";
import BodyHomeComponent from "./BodyHomeComponent";
class HomeAdminComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    } 
    componentDidMount() {
      const currentUser = AuthService.getCurrentUser();
      this.setState({ currentUser: currentUser, userReady: true});
  }
    render() {
      return (
        <body id="page-top">
          <div id="wrapper">
        <HeaderComponent/>
            <BodyHomeComponent/>
            
      </div>
      <FooterComponent/>
    </body>
    
      )}
  }
  export default HomeAdminComponent;
  