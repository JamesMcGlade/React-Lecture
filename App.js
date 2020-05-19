import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AboutMe from './Components/AboutMe'
import AboutDave from './Components/AboutDave'
import NavBar from './Components/NavBar'
import Pets from './Components/Pets'
import Movies from './Components/Movies'

// function App() { //functional component
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <p id = "paragraph">I am a paragraph tag, with an id of paragraph. I should be blue.</p>
//     </div>
//   );
// }

// const Student = (props) => {
//   return (
//     <div>
//       <p>Hello my name is {props.name} and I am {props.age} years old.</p>
//     </div>
//   )
// }


class App extends Component {
  render() {
    return (
      <div className='App' >
        {/* <h1>Hello World</h1> */}
        {/* <AboutMe />
        <AboutDave />
        <Pets name="Hermes" species="cat" favefood="tuna and chickpeas" />
        <Pets name="Alma" species="dog" favefood="anything laying on the floor" /> */}

        <Movies title="Hannah Montana: The Movie" year={2009} genre="Teenage Drama" trivia="Jacob likes this movie A LOT" />
        <Movies title="Captain Fantastic" year={2016} genre="Comedy, Drama" trivia="At a screening in San Francisco, Matt Ross revealed that over the course of filming, the group of children came to call Viggo Mortensen 'Summer Dad'." />
      </div>
    )
  }
}

export default App; // this line is crucial.
