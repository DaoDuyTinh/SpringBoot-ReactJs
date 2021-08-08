import axios from 'axios';

const USER_REST_API ="http://localhost:8080/users";

class UserService{

    getUser(page,size){
        return axios.get("http://localhost:8080/users/?page="+page+"&size="+size);
    }
    createUser(user){
        return axios.post(USER_REST_API,user);
    }
    getUserById(id){
        return axios.get(USER_REST_API+'/'+id);
    }
    deleteUser(id){
        return axios.delete(USER_REST_API+'/'+id);
    }
    updateUser(user,id){
        return axios.put(USER_REST_API+'/'+id,user);
    }
    updatePassWord(id,npass){
        return axios.put("http://localhost:8080/updatepass"+'/'+id+'/'+npass);
    }
    getadmin(){
        return axios.get("http://localhost:8080/api/test/admin");
    }
}
export default new UserService();