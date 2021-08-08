import React from 'react';
import BannerService from '../../service/BannerService';
class HomeBannerComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            banner:[],
            logo:''
            
        }
    }
    componentDidMount(){
      BannerService.getBannerById(1).then((res) =>{
        let z = res.data;
        this.setState({logo: z.image})
      });
        BannerService.getBannertop().then((response) => {
            this.setState({banner: response.data})
        });
        
    }
    render (){
        return (
            <section className="section-intro padding-y">
              {/* ==============  COMPONENT SLIDER  BOOTSTRAP ============  */}
              <div id="carousel1_indicator" className="slider-home-banner carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel1_indicator" data-slide-to={0}/>
                  <li data-target="#carousel1_indicator" data-slide-to={1}/>
                  <li data-target="#carousel1_indicator" data-slide-to={2}/>
                  <li data-target="#carousel1_indicator" data-slide-to={3}/>
                </ol>
                <div className="carousel-inner"> 
          
                   <div className="carousel-item active">
                    <img src={"http://localhost:8080/images/"+this.state.logo} alt="First slide" style={{ height: "450px",marginLeft: '20px',marginRight: '20px', width :'1480px'}}/>
                  </div>
                    {this.state.banner.map(
                        ban =>
                  <div className="carousel-item ">
                    <img src={"http://localhost:8080/images/"+ban.image} alt="Second slide" style={{ height: "450px",marginLeft: '20px',marginRight: '20px', width :'1480px'}}/>
                  </div>
                   )}
                </div>
                <a className="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div> 
              {/* ============ COMPONENT SLIDER BOOTSTRAP end.// ===========  .// */}	
          </section>
        )
    }
}
export default HomeBannerComponent