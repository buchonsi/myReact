import React, { Component } from 'react';
import './MyComponent.css';

class MyComponent2 extends Component {
    // 이렇게도 쓸 수 있지만 this 쓰려면 constructor 써야해서 귀찮
    // constructor(props){
    //     super(props);
    //     this.handleDecrease=this.handleDecrease.bind(this);
    // }
    // handleDecrease(){
    //     this.setState({
    //         myNumber:this.state.myNumber -1
    //     }  
    //     )
    // }
    
    state = {
        //state(상태) 변수
        myNumber:0,
        message:'',
        username:'',
        isValid:false,
        messages:['Angular','React','Vue','Ember']
    }

    //event handler method 선언
    handleDecrease = () => {
        const {myNumber} = this.state;
        this.setState({
            myNumber:myNumber-1//this.state.myNumber -1
        });
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    handleKeyPress = (e) => {
        const { message, messages} = this.state;
        if(e.key === 'Enter'){
            //message field를 초기화, isvaild 값을 true로 변경, username input필드에 포커스 추가
            this.setState({
                isValid:true,
                messages:messages.concat(message),
                message: '',
            });
            this.myUsername.focus();
        }
    }

    handleDoubleClick = (index) => {
        this.setState({
            //조건과 맞으면 화면에서 안보임(없어지는 것처럼 보임)
            messages:this.state.messages.filter((msg,idx) => idx !== index)
        });
    }
   
    render() {
        const {name} = this.props;
        const {myNumber,message,username,isValid, messages} = this.state;
        const {handleDecrease, handleChange, handleKeyPress, handleDoubleClick} = this;
        const message_list = messages.map((msg,idx)=>
            (<li key={idx} onDoubleClick={() => handleDoubleClick(idx)}>{msg}</li>
        ));

        return (
            <div>
                <h3>hello {name} </h3>

                <h3>상태변수 myNumber = {myNumber}</h3>
                <button onClick= {() => this.setState({
                    myNumber: myNumber + 1
                })} >값증가</button>
                <button onClick = {handleDecrease}>값 감소</button>
                <br/>

                <h3>Message  = {message}</h3>
                Message : <input type="text" name="message" value={message} onChange={handleChange} 
                     onKeyPress={handleKeyPress}
                ></input><br/>
               
                <ul>
                    {message_list}
                </ul>

            
                <h3>username  = {username}</h3>
                Username : <input type="text" name="username" value={username} onChange={handleChange} 
                    className={isValid ? 'success' : 'failure'} 
                    ref={(ref) => this.myUsername =ref}
                ></input><br/>

                
            </div>
        );
    }
}

export default MyComponent2;
