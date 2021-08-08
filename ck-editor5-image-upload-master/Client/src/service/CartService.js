import axios from 'axios';
const CART_REST_API ="http://localhost:8080/api/addtocart/addtocart";
class CartService{

    addCart(object){
        return axios.post(CART_REST_API,object);
    }
}
export default new CartService();