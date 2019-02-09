import React, { Component } from "react";
import MemoryCard from "./MemoryCard.js";
import "./App.css";

function generateDeck() {
  var symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
  var deck = [];
  for (var i = 0; i < 16; i++) {
    deck.push({
      isFlipped: false,
      symbol: symbols[i % 8],
    });
  }
  shuffle(deck);
  return deck;
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
    };

    this.pickCard = function pickCard(cardIndex) {
      if (this.state.deck[cardIndex].isFlipped) {
        return;
      }
      var cardToFlip = { ...this.state.deck[cardIndex] }
      cardToFlip.isFlipped = true;

      var newPickedCards = this.state.pickedCards.concat(cardIndex);
      var newDeck = ((this.state.deck.map((card, index) => {
        if (cardIndex == index) {
          return cardToFlip;
        }
        return card;
      });
    }
    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards,
    });
  }


  render() {
    var cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={card.symbol}
        isFlipped={card.isFlipped}
        key={index} 
        pickCard={this.pickCard.bind(this, index)}/>
    });

    return (
      <div className="App">
        <header className="App-header">
          <a className="App-link">Memory Game</a>
          <p className="subtitle">Match Cards to Win</p>
        </header>
        <div>
          {cardsJSX.slice(0, 4)}
        </div>
        <div>
          {cardsJSX.slice(4, 8)}
        </div>
        <div>
          {cardsJSX.slice(8, 12)}
        </div>
        <div>
          {cardsJSX.slice(12, 16)}
        </div>
      </div>
    );
  }
}

export default App;
