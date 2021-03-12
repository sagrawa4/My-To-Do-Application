import React, {Component} from 'react';

class TodoApp extends Component{
    
    render(){
        return (
            <div className="TodoApp">
               <LoginComponent/>
            </div>
        )
    }

}

//Controlled componenet
class LoginComponent extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            username: 'shruti',
            password: '',
            isSucessful: false,
            isLoginFailed: false
        }
        //this.handleUsernameChange=this.handleUsernameChange.bind(this);
        //this.handlePasswordChange=this.handlePasswordChange.bind(this);

        this.handleChange=this.handleChange.bind(this);
        this.loginClicked=this.loginClicked.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value});
    }

    //handleUsernameChange(event){
    //    this.setState({username : event.target.value});
    //}

    loginClicked(){
        if(this.state.username==='shruti' && this.state.password==='yes'){
            this.setState({isSucessful:true})
            this.setState({isLoginFailed:false})
        }
        else{
            this.setState({isLoginFailed:true})
            this.setState({isSucessful:false})
        }
    }

    render(){
        return(
            <div>
                <ShowInvalidCredentials isLoginFailed={this.state.isLoginFailed}/>
                <ShowLoginSucess isSucessful={this.state.isSucessful}/>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
           
        )
    }
}

function ShowInvalidCredentials(props){
    if(props.isLoginFailed){
        return <div> Invalid Credentials</div>
    }
    return null;
}

function ShowLoginSucess(props){
    if(props.isSucessful){
        return <div> Login Sucessful</div>
    }
    return null;
}

export default TodoApp;