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

  shuffleArray = (shufArr) => {
    for (let i = shufArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shufArr[i], shufArr[j]] = [shufArr[j], shufArr[i]];
  }
  return shufArr;
  };

  clickCard = id => {
    const shuffledArr = this.shuffleArray(characters);
    this.setState({ characters: shuffledArr });
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0, clickedArray: [], message: "Incorrect!! Game Over :( Click an image to start again."});
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]), score: this.state.score + 1, message: "Correct!! :)"
      });
    }

    // set highscore to score if score> highscore
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score });
    }
  };

  

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
