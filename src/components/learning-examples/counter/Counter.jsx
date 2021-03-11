import React , { Component} from 'react';
import './Counter.css';


class Counter extends Component{

    constructor(){
        super();
        this.state = {
           counter:0
        }

        //can be skipped if the increment method is set as arrow function
        this.increment=this.increment.bind(this);
    }


    render() {
        return (
          <div className="Counter">
           <CounterButton by={+1} incrementMethod={this.increment} />
           <CounterButton by={+5} incrementMethod={this.increment} />
           <CounterButton by={+10} incrementMethod={this.increment} />
            <span className="count">{this.state.counter}</span>
          </div>
        );
      }

      increment(by){

        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by};            
        }
        );
   }
}
 class CounterButton extends Component {

    //Define initial state in constructor
     constructor(){
         super();
         this.state = {
            counter:0
         }

         //can be skipped if the increment method is set as arrow function
         this.increment=this.increment.bind(this);
     }
     render() {
        return (
            <div
                className="CounterButton">
                <button onClick={this.increment} >+{this.props.by}</button>
                {/*<span className="count">{this.state.counter}</span>*/}
            </div>
        );
     }

     //Dont update state directly, use setState
     increment(){
         this.setState(
             (prevState) => {
                return {counter:prevState.counter + this.props.by}
             });
        this.props.incrementMethod(this.props.by);
    }

 }

 

export default Counter;