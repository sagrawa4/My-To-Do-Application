import React, {Component} from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticationService from './AuthenticationService.js';


class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : [],
            message : null,
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.refreshTodo= this.refreshTodo.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
    }

    refreshTodo(){
        let username = AuthenticationService.getUserLoggedInName();
        TodoDataService.executeTodoDataService(username)
        .then(
            response => { 
            //console.log(response);
            this.setState({todos: response.data})
        })
    }
    componentDidMount(){
        this.refreshTodo();
    }

    deleteTodoClicked(id){
        
        let username = AuthenticationService.getUserLoggedInName();
        TodoDataService.deleteTodoDataService(username,id)
        .then(
            response => {
                this.setState({message: `Delete of todo ${id} Successful`});
                this.refreshTodo();
            })
           
    }

    updateTodoClicked(id){
        console.log('update' +id);
        this.props.history.push(`/todo/${id}`)
    }

    render(){
        return (
            <div>
                <h1>Todo List</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>} 
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                        <th>User</th> 
                           <th>Description</th> 
                            <th>TargetDate</th>
                            <th>isCompleted</th> 
                            <th>Update</th>
                            <th>Delete</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.username}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>{todo.completed.toString()}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className= "btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
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