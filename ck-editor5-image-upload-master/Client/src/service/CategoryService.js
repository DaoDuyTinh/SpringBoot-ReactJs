import axios from 'axios';

const CATEGORY_REST_API ="http://localhost:8080/category";

class CategoryService{

    getCategory(){
        return axios.get(CATEGORY_REST_API);
    }
    createCategory(category){
        return axios.post(CATEGORY_REST_API,category);
    }
    getCategoryById(id){
        return axios.get(CATEGORY_REST_API+'/'+id);
    }
    deleteCategory(id){
        return axios.delete(CATEGORY_REST_API+'/'+id);
    }
    updateCategory(category,id){
        return axios.put(CATEGORY_REST_API+'/'+id,category);
    }
}
export default new CategoryService();