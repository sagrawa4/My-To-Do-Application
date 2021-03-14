import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component{
    constructor(props){
        super(props)
        this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this);
        this.state={
            welcomeMessage: "",
        }
        this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this)
    }
    render(){
        return (
            <>
            <h1>Welcome!</h1>
            <div className="container"> 
            Welcome {this.props.match.params.name}.
            You can manage your todo <Link to="/todos">here</Link>. 
            </div>
            <div className="container"> 
            Click here to get customized welcome message.
            <button onClick={this.retrieveWelcomeMessage} 
            className="btn btn-success">Get Welcome Message </button>
            </div>

            <div className="container"> 
            {this.state.welcomeMessage}
            </div>
            </>    
        )
 }

    retrieveWelcomeMessage(){
        HelloWorldService.executeHelloWorldBeanService()
        .then(response =>this.handleSuccessfulResponse(response))
        //.catch()
    }

    handleSuccessfulResponse(response){
this.setState({welcomeMessage:response.data.message })
   }
}

export default WelcomeComponent;
