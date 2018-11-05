import React, { Component } from 'react'

import './App.css'

import Header from "./components/Header/Header"
import Stage1 from "./components/Stage1/Stage1"
import Stage2 from "./components/Stage2/Stage2"
import Stage3 from "./components/Stage3/Stage3"
import Stage4 from "./components/Stage4/Stage4"
import Stage5 from "./components/Stage5/Stage5"
import Stage6 from "./components/Stage6/Stage6"
import Footer from "./components/Footer/Footer"



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Stage1 />
          <Stage2 />
          <Stage3 />
          <Stage4 />
          <Stage5 />
          <Stage6 />
        <Footer />
      </div>
    );
  }
}

export default App;