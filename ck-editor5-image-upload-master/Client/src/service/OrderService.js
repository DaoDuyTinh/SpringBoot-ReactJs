import axios from 'axios';

const ORDER_REST_API ="http://localhost:8080/api/order/";

class OrderService{

    getAllOrderUser(page,size){
        return axios.get("http://localhost:8080/api/order/order/?page="+page+"&size="+size);
    }
    getOrderByUserId(id){
        return axios.get("http://localhost:8080/api/order/orderbyuser/"+id);
    }
    getOrderDetailsbyOrderId(id){
        return axios.get("http://localhost:8080/api/order/orderdetailbyorder/"+id);
    }
    deleteOrder(id){
        return axios.delete(ORDER_REST_API+'order/'+id);
    }
    createOrder(orderdetails,iduser){
        return axios.post("http://localhost:8080/api/order/checkout_order/"+iduser,orderdetails);
    }
}
export default new OrderService();