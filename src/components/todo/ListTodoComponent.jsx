import React, {Component} from 'react';


class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : [
                {id : 1, description: "Course 1", isCompleted: false, targetDate: new Date()},
                {id : 2, description: "Course 2", isCompleted: false, targetDate: new Date()},
                {id : 3, description: "Course 3", isCompleted: false, targetDate: new Date()},
                {id : 4, description: "Course 4", isCompleted: false, targetDate: new Date()},
            ]
        }
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
                                        <td>{todo.isCompleted.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
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