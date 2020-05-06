import React from 'react';
function DigitalClock(props){
    console.log(props.time);
return <div>{props.time}</div>
}

export default DigitalClock;

// import React,{Component} from 'react';
// //Two types of Componenet
// //Stateful 
// //Stateless

// class Clock extends Component{
// constructor(props){
//     super(props)
//     this.state={
//         currentTime: new Date().toLocaleTimeString()
//     }
//     this.updateTime();
// }

// updateTime(){
//     setInterval(()=>{
//         // this.state.currentTime
//         this.setState({
//             currentTime: new Date().toLocaleTimeString()

//         })
//     },1000)
// }


//     render(){
//         return(
//             <h1>{this.state.currentTime}</h1>
//         )
//     }
// }

// export default Clock;