import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class TodoApp extends Component{
    
    render(){
        return (

            <div className="TodoApp">
                    <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/:name" component={Welcome} />
                        <Route component={ErrorComponent} />
                        </Switch>
                    </Router>
                
                
              {/* <LoginComponent/>
               <Welcome/>*/}
            </div>
        )
    }

}

class Welcome extends Component{
    render(){
        return <div>Welcome {this.props.match.params.name}</div>
    }
}

class ErrorComponent extends Component{
    render(){
        return <div>An error Occured! Please check</div>
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
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({isSucessful:true})
            //this.setState({isLoginFailed:false})
        }
        else{
            this.setState({isLoginFailed:true})
            this.setState({isSucessful:false})
        }
    }

    render(){
        return(
            <div>
                {/*<ShowInvalidCredentials isLoginFailed={this.state.isLoginFailed}/>*/}
                {/*<ShowLoginSucess isSucessful={this.state.isSucessful}/>*/}
                {this.state.isLoginFailed && <div>Invalid Credentials</div>}
                {this.state.isSucessful && <div> Login Sucessful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
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

export default TodoApp;