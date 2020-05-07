import React,{Component} from 'react';


class Forms extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            allUsers:[]
        }
        this.formHandler=this.formHandler.bind(this);
    this.clickHandler=this.clickHandler.bind(this);
    }
    
    formHandler(ev){
console.log(ev.target.value , 'events' ,ev)
this.setState({
    username: ev.target.value
})    
}
  

clickHandler(ev){
 let currentUser= this.state.allUsers;
 currentUser.push(this.state.username)
 this.setState({
     allUsers: currentUser,
     username: ''
 })
 console.log(this.state.allUsers)
}

    render(){
        return(
<div>
    <h1>Hello Forms</h1>
    <input type="text" name="username" value={this.state.username} onChange={this.formHandler} />
 <button onClick={this.clickHandler}>Save users</button>
    <p>{this.state.username}</p>
</div>
        )
    }
}



export default Forms;