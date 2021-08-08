import axios from 'axios';

const SEND_REST_API ="http://localhost:8080/send/";

class OrderService{

    getAll(page,size){
        return axios.get("http://localhost:8080/send?page="+page+"&size="+size);
    }
    getReportById(id){
        return axios.get("http://localhost:8080/send/"+id);
    }
    getOrderDetailsbyOrderId(id){
        return axios.get("http://localhost:8080/api/order/orderdetailbyorder/"+id);
    }
    delete(id){
        return axios.delete("http://localhost:8080/send/"+id);
    }
    createReport(sendemail){
        return axios.post(SEND_REST_API,sendemail);
    }
    repReport(sendemail){
        return axios.put(SEND_REST_API,sendemail);
    }
}
export default new OrderService();