import React, { Component } from 'react';
import Card from './Card';
import GuessCount from './GuessCount';
import HallOfFame from './HallOfFame';
import {FAKE_HOF} from './HallOfFame';
import './App.css';

class App extends Component {

  state = [
      "😀", "🎉", "💖", "🎩", "🐶" ,
      "😀", "🎉", "💖", "🎩", "🐶" ,
      "😀", "🎉", "💖", "🎩", "🐶" ,
      "😀", "🎉", "💖", "🎩", "🐶" ,
      "😀", "🎉", "💖", "🎩", "🐶" ,
      "😀", "🎉", "💖", "🎩", "🐶" ,
  ];

  handleCardClick(card) {
    console.log( card, 'clicked') ;
  }

  render() {
    const won = new Date().getSeconds() % 2 === 0 ;
    const cards = this.state;
      return (
        <div className="memory">
            <GuessCount guesses={0} />
            { cards.map( ( card, index) => (
                  <Card
                    key={index}
                    card={card}
                    feedback="visible"
                    onClick={this.handleCardClick}
                  />
              ) )
            }

            { won && <HallOfFame entries={ FAKE_HOF } /> }
        </div>
      )
  }

}

export default App;
