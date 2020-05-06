import React,{Component} from 'react';
import DigitalClock from './DigitalClock'
import AnalogClock from './AnalogClock'
//Two types of Componenet
//Stateful 
//Stateless

class Clock extends Component{
constructor(props){
    super(props)
    this.state={
        currentTime: new Date().toLocaleTimeString()
    }
    this.updateTime();
}

updateTime(){
    setInterval(()=>{
        // this.state.currentTime
        this.setState({
            currentTime: new Date().toLocaleTimeString()

        })
    },1000)
}


    render(){
        return(
            // <h1>{this.state.currentTime}</h1>
            <div>
     <DigitalClock time={this.state.currentTime}/>
        <AnalogClock time={this.state.currentTime}/>
            </div>
       
            )
    }
}

export default Clock;