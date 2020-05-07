import React,{Component} from 'react';


class Forms extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            allUsers:[],
            radioGroup:{
                MEANSTACK: false,
                MERNSTACK: true
            }
        }
        this.formHandler=this.formHandler.bind(this);
    this.clickHandler=this.clickHandler.bind(this);
this.radioHandler=this.radioHandler.bind(this);    
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
     username: '',
    // radioGroup:{
    //     MEANSTACK: false,
    //     MERNSTACK: true
    // }

 })
 console.log(this.state.allUsers)
}

radioHandler(ev){
    console.log(ev.target.value)
    let radioGroup=this.state.radioGroup;
    for(var key in radioGroup){
        radioGroup[key]=false

    }
radioGroup[ev.target.value]=ev.target.checked;

this.setState({
    radioGroup: radioGroup
})
}





    render(){
        return(
<div>
    <h1>Hello Forms</h1>
    <input type="text" name="username" value={this.state.username} onChange={this.formHandler} />
 <button onClick={this.clickHandler}>Save users</button>
    <p>{this.state.username}</p>
<br/>
Developer Category
<br/>
<label>
    Mean stack<input type="radio" name="deveCategory" value="Meanstack" checked={this.state.radioGroup['MEANSTACK']} onChange={this.radioHandler}/>
</label>
<br/>
<label>
    Mern Stack <input type="radio" name="deveCategory" value="Mernstack" checked={this.state.radioGroup['MERNSTACK']} onChange={this.radioHandler}/>
</label>

</div>
        )
    }
}



export default Forms;