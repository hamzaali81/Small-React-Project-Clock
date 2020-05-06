import React,{Component} from 'react';


class MyEvents extends Component{
constructor(props){
super(props);

    this.state={
        counter: 0
    }
this.incrementCounter=this.incrementCounter.bind(this);
}
// Click Increment
incrementCounter(){
    // console.log(this,'this');
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

           <span>{this.state.counter}</span>
       <button onClick={this.incrementCounter}>+</button>
       </div>
        
    )
}
}

export default MyEvents;