import React from 'react';
class FooterComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render (){
        return (
            // <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer>
        )
}
}export default FooterComponent