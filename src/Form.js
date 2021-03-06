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
            },
            checkboxGroup:{
                     mongodb: false,
                     express:true
            },
            selectedValue: 'Node'
        }
        this.formHandler=this.formHandler.bind(this);
    this.clickHandler=this.clickHandler.bind(this);
this.radioHandler=this.radioHandler.bind(this);
this.checkboxHandler=this.checkboxHandler.bind(this);
this.selectHandler=this.selectHandler.bind(this);    
this.emailHandler=this.emailHandler.bind(this);
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

checkboxHandler(ev){
console.log(ev.target.value)
let checkboxGroup=this.state.checkboxGroup;
checkboxGroup[ev.target.value]=ev.target.checked;
this.setState({
    checkboxGroup: checkboxGroup
})


}

selectHandler(ev){
this.setState({
    selectedValue: ev.target.value
})
}

emailHandler(ev){
    console.log(this.refs.subscriberEmail.value)
}

    render(){
        return(
<div>
    <h1>Hello Forms</h1>
    <input type="text" name="username" value={this.state.username} onChange={this.formHandler} />
 <button onClick={this.clickHandler}>Save users</button>
    <p>{this.state.username}</p>
<br/>
<label>
    Email: <input type="email" ref='subscriberEmail'/>
</label>
<button onClick={this.emailHandler}>Subscription</button>

<br/>
Developer Category
<br/>
<label>
    Mean stack<input type="radio" name="deveCategory" value="Meanstack" checked={this.state.radioGroup['Meanstack']} onChange={this.radioHandler}/>
</label>
<br/>
<label>
    Mern Stack <input type="radio" name="deveCategory" value="Mernstack" checked={this.state.radioGroup['Mernstack']} onChange={this.radioHandler}/>
</label>

Technologies Category
<br/>
<label>
    Mongodb<input type="checkbox" name="tech" value="mongodb" checked={this.state.checkboxGroup['mongodb']} onChange={this.checkboxHandler}/>
</label>
<br/>
<label>
    Express <input type="checkbox" name="tech" value="express" checked={this.state.checkboxGroup['express']} onChange={this.checkboxHandler}/>
</label>

<select value="this.state.selectedValue" onChange={this.selectHandler}>
<option value="ruby">Ruby</option>
<option value="python">Python</option>
<option value="rust">Rust</option>
</select>

</div>
        )
    }
}



export default Forms;