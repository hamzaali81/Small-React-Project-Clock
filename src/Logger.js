import React,{Component} from 'react';

class Logger extends Component{
    constructor(props){
        super(props);
        console.log('constructor running')
    }
    
    componentWillMount(){
        console.log('component will mount')
    }
    componentDidMount(){
    console.log('componenet did mount')
    }
    componentWillReceiveProps(nextprops){
console.log('Next Props',nextprops)
    }

shouldComponentUpdate(newprops,newState){
    console.log('Should component update');
    console.log('New props', newprops);
    console.log('New State', newState)
     return true;  //one boolean return
}
componentWillUpdate(nextprops,nextState){
    console.log('component will update');
    console.log('Next props', nextprops);
    console.log('Next State', nextState);    
}

componentDidUpdate(oldProps,oldState){
    console.log('component Did update');
    console.log('Old props', oldProps);
    console.log('old state', oldState);   
}

    render(){
        console.log('render method')
        return (
        <h1>{this.props.time}</h1>
        )
    }
}

export default Logger;