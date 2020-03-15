import React, { Component } from "react";
// import Component from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CharCard from "./components/CharCard";
import characters from "./futurama.json";
import CardWrapper from "./components/CardWrapper";

class App extends Component {

  // function App() {
  state = {
    characters,
    score: 0,
    highscore: 0,
    clickedArray: [],
    message: ""
  }


  render() {
    return (
      <>
        <Header />

        <CardWrapper>
          {characters.map(img => (

            <CharCard
              id={img.id}
              key={img.id}
              imglink={img.imglink}
            />

          ))}
        </CardWrapper>
        <Footer />
      </>
    )
  }



}

export default App;
