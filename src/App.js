import React,{Component} from 'react';

//this.state - Immutable
//this.props - Mutable

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

class TestClass extends Component{
  styling={
    backgroundColor:'dodgerblue'
  }
  render(){
    return(
      <a href={this.props.link} style={this.styling}>{this.props.linkText}</a>
      // {/* <a href={this.props.link} style={{backgroundColor:'red'}}>{this.props.linkText}</a> */}


      )
  }
}


export default TestClass;































