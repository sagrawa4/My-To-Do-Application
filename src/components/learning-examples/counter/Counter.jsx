import { render } from '@testing-library/react';
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
        this.decrement=this.decrement.bind(this);
        this.reset=this.reset.bind(this);
    }


    render() {
        return (
          <div className="Counter">
           <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
           <CounterButton by={5} incrementMethod={this.increment}  decrementMethod={this.decrement}/>
           <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
            <span className="count">{this.state.counter}</span>
            <div>
            <button className="reset" onClick={this.reset}>Reset</button>
            </div>
            
           
            
          </div>
        );
      }

      reset(){
          this.setState(
              () =>{
                  return {counter: 0};
              });
      }
      increment(by){

        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by};            
        });
   }

   decrement(by){
    this.setState(
        (prevState) => {
           return {counter: prevState.counter - by};
        });
    }
}
 class CounterButton extends Component {

    //Define initial state in constructor
     constructor(){
         super();
    
         

         //can be skipped if the increment method is set as arrow function
         //this.increment=this.increment.bind(this);
         //this.decrement=this.decrement.bind(this);
     }
     render() {
        return (
            <div
                className="CounterButton">
                <button onClick={() => this.props.incrementMethod(this.props.by)} >+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)} > -{this.props.by}</button>
                {/*<span className="count">{this.state.counter}</span>*/}
            </div>
        );
     }

     //Dont update state directly, use setState
     /*increment(){
         this.setState(
             (prevState) => {
                return {counter:prevState.counter + this.props.by}
             });
        this.props.incrementMethod(this.props.by);
    }

    decrement(){
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - this.props.by}
            });
            this.props.decrementMethod(this.props.by);
    }*/

 }

 

export default Counter;