import React, { Component } from 'react';
import MyComponent2 from './components/MyComponent2';
import MyComponentFunc from './components/MyComponentFunc';


class App extends Component {
  //component클래스의 render() 메서드를 재정의
  render() {
    return (
      <React.Fragment>
       <MyComponent2 name="react"/>
       <MyComponentFunc name="함수명">
         <div>함수형의 Child 엘리먼트</div>
       </MyComponentFunc>
      </React.Fragment>
    );
  }
}

export default App;