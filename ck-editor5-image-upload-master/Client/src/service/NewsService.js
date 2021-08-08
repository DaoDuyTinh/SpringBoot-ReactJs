import axios from 'axios';

const NEWS_REST_API ="http://localhost:8080/news";

class NewsService{

    getHomeNews(page,size){
        return axios.get("http://localhost:8080/homenews/?page="+page+"&size="+size);
    }
    getAdminNews(page,size){
        return axios.get("http://localhost:8080/adminnews/?page="+page+"&size="+size);
    }
    getAllNews(){
        return axios.get(NEWS_REST_API);
    }
    getNewsById(id){
        return axios.get(NEWS_REST_API+'/'+id);
    }
    getNewsbyProduct(id){
        return axios.get("http://localhost:8080/productnews/"+id);
    }
    getSortNews(){
        return axios.get("http://localhost:8080/sortnews/");
    }
    getHotNews(page,size){
        return axios.get("http://localhost:8080/hotnews?page="+page+"&size="+size);
    }
    deleteNews(id){
        return axios.delete(NEWS_REST_API+'/'+id);
    }
    updateNews(news,id){
        return axios.put(NEWS_REST_API+'/'+id,news);
    }
    createNews(news){
        return axios.post(NEWS_REST_API,news);
    }
    review(id){
        return axios.put("http://localhost:8080/review/"+id);
    }
}
export default new NewsService();