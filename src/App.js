import React from "react";
// import Component from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CharCard from "./components/CharCard";
import characters from "./futurama.json";

// class App extends Component {

function App() {



  // render () {
    return (
    <>
      <Header />
      {characters.map(img => (

      
      <CharCard 
        id={Image.id}
        // key={Image.id}
        imglink={img.imglink}
        />
        ))}
      <Footer />
      </>
    )
  }



// }

export default App;
