import React, {Component} from 'react';

import AuthenticationService from "./AuthenticationService.js";

//Controlled componenet
class LoginComponent extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            username: 'shruti',
            password: '',
            isSucessful: false,
            isLoginFailed: false,
            showSucessMessage: false
        }
        //this.handleUsernameChange=this.handleUsernameChange.bind(this);
        //this.handlePasswordChange=this.handlePasswordChange.bind(this);

        this.handleChange=this.handleChange.bind(this);
        this.loginClicked=this.loginClicked.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value});
    }

    //handleUsernameChange(event){
    //    this.setState({username : event.target.value});
    //}

    loginClicked(){
        if(this.state.username==='shruti' && this.state.password==='yes'){
            AuthenticationService.registerSucessfulLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({isSucessful:true})
            //this.setState({isLoginFailed:false})
        }
        else{
            this.setState({showSucessMessage:false})
            this.setState({isLoginFailed:true})
        }
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                {/*<ShowInvalidCredentials isLoginFailed={this.state.isLoginFailed}/>*/}
                {/*<ShowLoginSucess isSucessful={this.state.isSucessful}/>*/}
                {this.state.isLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.isSucessful && <div> Login Sucessful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
            </div>
            
           
        )
    }
}

/*function ShowInvalidCredentials(props){
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
}*/

export default LoginComponent;