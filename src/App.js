import React, { Component } from "react";
import CarCard from "./components/CarCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import cars from "./cars.json";
import "./style.css";



// var score = 0
// var imageClick = 0
// var topScore = 0
// var randomPick = 0
// var randomNumber = 0
// var message = "Click an Image to begin!"
var shuffleCar = " "
var shuffleNumber = 0
var carsShuffled = []
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cars
    
  };
  
  // gamestart() {
  //   for (var i = 0;  i < cars.length; i++) {

  //     shuffleCar = cars[Math.floor(Math.random() * cars.length)];
  //     carsShuffled.push(shuffleCar);
  //     console.log(shuffleCar, "shuffleTxt");
  //     shuffleNumber = cars.indexOf(shuffleCar);
  //     console.log(shuffleNumber, "shuffleNumber");
  //     console.log(carsShuffled, "carsShuffled");
      
  //   }
  //   carsShuffled =  this.state.cars;
  //   this.setState({ cars });
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {     
  //     cards: [],      
  //     cardsShuffled: false,
  //     location: ''
  //   };
    
  //   this.state.cards = cars;

  //   this.shuffleButtonClick = this.shuffleButtonClick.bind(this);
   
  // }


  
    
  

  removeCar = (id) => {
    let carsArray = [...this.state.cars];
    for (var i = 0;  i < carsArray.length; i++) {

          shuffleCar = carsArray[Math.floor(Math.random() * carsArray.length)];
          carsShuffled.push(shuffleCar);
          // console.log(shuffleCar, "shuffleTxt");
          shuffleNumber = carsShuffled.indexOf(shuffleCar);
          // console.log(shuffleNumber, "shuffleNumber");
          // console.log(carsShuffled, "carsShuffled");
          
        }
        
    // Filter this.state.friends for friends with an id not equal to the id being removed
     //const newCard state =
     console.log('=========',this.state.cars)
    // Set this.state.friends equal to the new friends array
    this.setState({ cars });
    console.log(cars);  
  };


  // shuffleCards = id => {    
  //   let cards = [...this.state.cards]
  //   let shuffledCards = [];
  //   while (cards.length) {
  //     const randomIndex = Math.floor(Math.random() * cards.length);
  //     shuffledCards.push(cards.splice(randomIndex, 1));
  //     console.log(shuffledCards, "shuffledcards");
  //   }
    
  //   this.setState({
  //     cards: shuffledCards,
  //     cardsShuffled: true
  //   })
    
  // }
  // randomClicks = (id) => {
  //   let cards = [...this.state.cards]
  //   randomNumber = cards[Math.floor(Math.random() * cards.length)];
  //   randomPick = cards.indexOf(randomNumber);
    
  // }
    
  // imageClickScore = () => {
    
  //   score = score + 1
     
  //   imageClick = 1 + 1
   
  //   if (12 - randomPick + imageClick <= 7) {           
  //       message = "You guessed incorrectly!";
  //       score = 0;         
        
  //       console.log(message);
  //   }
  //   else if (12 - randomPick - imageClick >= 5) {
  //       message = "You guessed correctly!";
  //       topScore = topScore + 1  
  //       console.log(message);
  //   }
  // };

  
  // shuffleButtonClick() {
  //   this.shuffleCards()
  //   this.imageClickScore()
  //   this.randomClicks()
  //   document.getElementById("top-scores").textContent = score;
  //   document.getElementById("top-scoress").textContent = topScore;
  //   document.getElementById("click-message").textContent = message;
  //   console.log(randomPick);
 
    
  // }  

  render() {  
    // if (!this.state.cardsShuffled) {
    //   this.shuffleCards();
    // }    
    
    return (
      
      <div className="container-background">
        <Navbar id="top-scores" /> 
        <Jumbotron />

        <Wrapper>
          
            {this.state.cars.map(car => (
             
              <CarCard
              removeCar={this.removeCar}
                id={car.id}
                key={car.id}
                name={car.name}
                image={car.image}            
              />
            ))}         
          
          
        </Wrapper>     

      </div>
      
    );
  }
}

export default App;