import axios from 'axios';

const SALIENT_REST_API ="http://localhost:8080/salient";

class SalientService{

    getAllNews(){
        return axios.get(SALIENT_REST_API);
    }
    getSalientById(id){
        return axios.get(SALIENT_REST_API+'/'+id);
    }
    getSalientbyProduct(id){
        return axios.get("http://localhost:8080/salientbypro/"+id);
    }
    deleteSalient(id){
        return axios.delete(SALIENT_REST_API+'/'+id);
    }
    updateSalient(salient,id,idpro){
        return axios.put(SALIENT_REST_API+'/'+id+'/'+idpro,salient);
    }
    createSalient(salient,id){
        return axios.post(SALIENT_REST_API+"/"+id,salient);
    }
}
export default new SalientService();