import axios from 'axios';

class TodoDataService{
    executeTodoDataService(name){
        return axios.get(`http://localhost:8080/users/${name}/todos`);
        //console.log('execute service')
    }

    executeOneTodoDataService(name,id){
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
        //console.log('execute service')
    }

    deleteTodoDataService(name,id){
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }
}

export default new TodoDataService();