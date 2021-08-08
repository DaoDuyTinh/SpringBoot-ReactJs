import axios from 'axios';

const BANNERRTOP_REST_API ="http://localhost:8080/bannertop";
const BANNERBOT_REST_API ="http://localhost:8080/bannerbot";
const BANNER_REST_API ="http://localhost:8080/banner";
class ProductService{

    getBannertop(){
        return axios.get(BANNERRTOP_REST_API);
    }
    getBannerbottom(){
        return axios.get(BANNERBOT_REST_API);
    }
    createBanner(banner){
        return axios.post(BANNER_REST_API,banner);
    }
    getBannerById(id){
        return axios.get(BANNER_REST_API+'/'+id);
    }
    deleteBanner(id){
        return axios.delete(BANNER_REST_API+'/'+id);
    }
    updateBanner(banner,id){
        return axios.put(BANNER_REST_API+'/'+id,banner);
    }
    getAllBanner(page,size){
        return axios.get("http://localhost:8080/banner/?page="+page+"&size="+size); 
    }
}
export default new ProductService();