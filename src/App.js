import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';

import TodoApp from './components/todo/TodoApp';
/*import FirstComponent  from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';

import Counter from './components/learning-examples/counter/Counter';*/

class App extends Component {
  render() {
    return (
      <div className="App">
       {/*<Counter/>*/}
       <TodoApp/>
      </div>
    );
  }
}

/*class LearningComponenet extends Component {
  render() {
    return (
      <div className="LearningComponenet">
        My hello world
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent/>
      </div>
    );
  }
}*/

export default App;