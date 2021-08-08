import React from 'react';
import HomeBannerBotComponent from './HomeBannerBotComponent';
import HomeBannerComponent from './HomeBannerComponent';
import HomeProductComponent from './HomeProductComponent';
import HomeProductBotComponent from './HomeProductBotComponent';
import HomeProductSaleComponent from './HomeProductDealsComponent';
import NewsComponent from '../News/NewsComponent';
import HomeHeaderComponent from './HomeHeaderComponent';
import HomeFooterComponent from './HomeFooterComponent';
import CommingSoonComponent from './CommingSoonComponent';
import HomeHotProductComponent from './HomeHotProductComponent';
import HomeAccessSaleComponent from './HomeAccessSaleComponent';
class HomeHomeComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
        
        }
    }
    render (){
        return (
            
            <div style={{marginTop:"20px"}}>
           <HomeBannerComponent/>
           <HomeProductComponent/>
           <HomeProductBotComponent/>
           <CommingSoonComponent/>      
           <HomeProductSaleComponent/>
           <HomeBannerBotComponent/>
           <HomeHotProductComponent/>
           <HomeAccessSaleComponent/>   
           <NewsComponent/>
           </div>
        )
    }
}
export default HomeHomeComponent