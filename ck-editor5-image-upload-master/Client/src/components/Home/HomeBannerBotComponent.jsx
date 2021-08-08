import React from 'react';
import BannerService from '../../service/BannerService';
import NewsService from '../../service/NewsService';
class HomeBannerBotComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
          banner:[],
            
        }
    }
    componentDidMount(){
      BannerService.getBannerbottom().then((response) => {
        this.setState({banner: response.data})
    });
        
    }
    render (){
        return (
            <div style={{marginLeft:'30px',marginRight:'30px'}}>
            <section className="padding-bottom">
            <header className="section-heading heading-line">
            <h4 className="title-section text-uppercase" style={{color:"#ae0d0d"}}>Bản tin</h4>
          </header>
                <div className="row" style={{marginLeft:'0px', marginRight:'0px'}}>
                    {this.state.banner.map(
                        ban =>
                    <aside className="col-md-6 titleall">
                    <div className="card card-banner-lg bg-dark" style={{width:'700px',height:'320px'}}>
                      <img src={"http://localhost:8080/images/"+ban.image} className="card-img opacity" />
                      <div className="card-img-overlay text-white">
                        <h2 className="card-title">{ban.title}</h2>
                        <p className="card-text" style={{maxWidth: '80%'}}></p>
                        <a href={"news/"+(ban.id)} className="btn btn-light">Khám phá</a>
                      </div>
                    </div>
                  </aside>
                    )}
                </div>
              </section>
              </div>
        )
    }
}
export default HomeBannerBotComponent