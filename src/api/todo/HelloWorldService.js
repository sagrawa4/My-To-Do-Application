
import axios from 'axios';
class HelloWorldService{
    executeHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world');
        //console.log('execute service')
    }
    ///hello-world-bean
    executeHelloWorldBeanService(){
        return axios.get('http://localhost:8080/hello-world-bean');
        //console.log('execute service')
    }

}

export default new HelloWorldService()