import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'

import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponent';
import ListTodosComponent from "./ListTodoComponent";
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import WelcomeComponent from './WelcomeComponent';
import LogoutComponent from './LogoutComponent';
import ErrorComponent from './ErrorComponent';

class TodoApp extends Component{
    
    render(){
        return (

            <div className="TodoApp">
                    <Router>
                        <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute  path="/logout" component={LogoutComponent} />
                            <AuthenticatedRoute  path="/todo" component={ListTodosComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent/>
                        </>
                    </Router>
                   
                
              {/* <LoginComponent/>
               <Welcome/>*/}
            </div>
        )
    }

}

export default TodoApp;