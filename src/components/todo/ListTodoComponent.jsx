import React, {Component} from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticationService from './AuthenticationService.js';


class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : [
                //{id : 1, description: "Course 1", isCompleted: false, targetDate: new Date()},
                //{id : 2, description: "Course 2", isCompleted: false, targetDate: new Date()},
                //{id : 3, description: "Course 3", isCompleted: false, targetDate: new Date()},
                //{id : 4, description: "Course 4", isCompleted: false, targetDate: new Date()},
            ]
        }
    }

    componentDidMount(){
        let username = AuthenticationService.getUserLoggedInName();
        TodoDataService.executeTodoDataService(username)
        .then(
            response => { 
            //console.log(response);
            this.setState({todos: response.data})
        })
    }

    render(){
        return (
            <div>
                <h1>Todo List</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                           <th>Description</th> 
                            <th>isCompleted</th> 
                            <th>TargetDate</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.isCompleted}</td>
                                        <td>{todo.targetDate}</td>
                                    </tr>
                            )
                        }   
                    </tbody>
                </table>
            </div>
            </div>
            
        ) 
    }
}

export default ListTodosComponent;