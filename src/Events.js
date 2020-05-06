import React,{Component} from 'react';


class MyEvents extends Component{
constructor(props){
super(props);

    this.state={
        counter: 0
    }
// this.incrementCounter=this.incrementCounter.bind(this);
}
// Click Increment
incrementCounter(param,ev){
    // console.log(this,'this');
    console.log('ev',ev)
    console.log('Param',param)
this.setState({
    counter: this.state.counter+1
})
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
<h1>Hello Events</h1>
           {/* <button onClick={this.incrementCounter.bind(this)}>+</button><br /> */}
<button onClick={this.incrementCounter.bind(this,'Hello')}>Button Hello</button>
           <span>{this.state.counter}</span>
       {/* <button onClick={this.incrementCounter}>+</button> */}
       <button onClick={this.incrementCounter.bind(this,'Events')}></button>
       </div>
        
    )
}
}

export default MyEvents;