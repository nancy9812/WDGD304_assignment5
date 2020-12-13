import React, { Component } from "react";

import Header from './components/Header';
import About from './components/About';
import Works from './components/Works';
import WorksSecond from './components/WorksSecond';
import WorksThird from './components/WorksThird';
import Footer from './components/Footer';

class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "./scripts.js";
    document.head.appendChild(script);
  }
  render() {
    return (
      <div className="App">
        <About></About>
        <Header></Header>
        <Works></Works>
        <WorksSecond></WorksSecond>
        <WorksThird></WorksThird>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;