import axios from 'axios';

const PRODUCT_REST_API ="http://localhost:8080/product";

class ProductService{

    getProduct(page,size){
        return axios.get("http://localhost:8080/product/?page="+page+"&size="+size);
    }
    getProductAll(){
        return axios.get("http://localhost:8080/productall");
    }
    getProductbyCate(id,page,size){
        return axios.get("http://localhost:8080/productbycategory/"+id+"?page="+page+"&size="+size);
    }
    getProductSale(page,size){
        return axios.get("http://localhost:8080/productsale/?page="+page+"&size="+size);
    }
    getProductSoon(page,size){
        return axios.get("http://localhost:8080/productsoon/?page="+page+"&size="+size);
    }
    getProductTop(page, size ){
        return axios.get("http://localhost:8080/producttop/?page="+page+"&size="+size); 
    }
    getProductBot(page, size){
        return axios.get("http://localhost:8080/productbot/?page="+page+"&size="+size);
    }
    getProductRelated(id){
        return axios.get("http://localhost:8080/productcate/"+id);
    }
    createProduct(id,product){
        return axios.post(PRODUCT_REST_API+'/'+id,product);
    }
    getProductById(id){
        return axios.get(PRODUCT_REST_API+'/'+id);
    }
    deleteProduct(id){
        return axios.delete(PRODUCT_REST_API+'/'+id);
    }
    updateProduct(product,id,idcate){
        return axios.put(PRODUCT_REST_API+'/'+id+"/"+idcate,product);
    }
    updatenews(news,id){
        return axios.put("http://localhost:8080/productnews/"+id,news);
    }
    updateprolated(productrelated,id){
        return axios.put("http://localhost:8080/productrelated/"+id,productrelated);
    }
    updateimages(productimages,id){
        return axios.put("http://localhost:8080/productimage/"+id,productimages);
    }
    findByName(name) {
        return axios.get(PRODUCT_REST_API+'/'+`search?name=${name}`);
    }
    setNews(id,news)
    {
             return axios.post("http://localhost:8080/listnews/"+id,news);
    }
    setProductRelated(id,productrelated)
    {
             return axios.post("http://localhost:8080/listprorelated/"+id,productrelated);
    }
    getAccessSale(page,size){
        return axios.get("http://localhost:8080/accesssale/?page="+page+"&size="+size);
    }
    getAccess(page,size){
        return axios.get("http://localhost:8080/access/?page="+page+"&size="+size);
    }
    getAllAccess(page,size){
        return axios.get("http://localhost:8080/accessall/?page="+page+"&size="+size);
    }
}
export default new ProductService();