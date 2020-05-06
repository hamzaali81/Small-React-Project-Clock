import React,{Component} from 'react';
import Counter from './Counter'

class MyEvents extends Component{
constructor(props){
super(props);

    this.state={
        counter: 0
    }
    this.incrementCounter=this.incrementCounter.bind(this);
    this.decrementCounter=this.decrementCounter.bind(this);
// this.incrementCounter=this.incrementCounter.bind(this);
}
// Click Increment
// incrementCounter(param,ev){
//     // console.log(this,'this');
//     // console.log('ev',ev)
//     // console.log('Param',param)
// this.setState({
//     counter: this.state.counter+1
// })
// }  


incrementCounter(){
// console.log('increment');
// this.setState({
    // counter: this.state.counter+1
    if(this.state.counter < 11){
 this.setState({counter: this.state.counter+1})
    }
    else{
console.log('already reached maximum count') 
    }
// })
}

 decrementCounter(){
// console.log('decrement');
// this.setState({
    if(this.state.counter === 0){
console.log('decrement count reached')
    }
    else{
        this.setState({counter: this.state.counter+ 1})

    }
    // counter: this.state.counter - 1

// })
}

//     clickHandler(){
//     console.log('click pressed')
// }



    render(){
    return(
        
       <div>
           {/* <button onClick={function(){
               console.log('first button')
           }}>Click me</button> */}
           {/* <button onClick={this.clickHandler}>Click me</button> */}
{/* <h1>Hello Events</h1>
           {/* <button onClick={this.incrementCounter.bind(this)}>+</button><br /> */}
{/* <button onClick={this.incrementCounter.bind(this,'Hello')}>Button Hello</button> */}
           {/* <span>{this.state.counter}</span> */}
       {/* <button onClick={this.incrementCounter}>+</button> */}
       {/* <button onClick={this.incrementCounter.bind(this,'Events')}></button> */} 


<Counter counter={this.state.counter} increment={this.incrementCounter} decrement={this.decrementCounter} />

       </div>
        
    )
}
}

export default MyEvents;