import axios from 'axios';

class TodoDataService{
    executeTodoDataService(name){
        return axios.get(`http://localhost:8080/users/${name}/todos`);
        //console.log('execute service')
    }
}

export default new TodoDataService();