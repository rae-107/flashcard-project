const Turn = require("./Turn")

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
    this.turn;
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }
  takeTurn(guess) {
    this.turn = new Turn(guess, this.deck.cards[this.turns])
    this.turns++
    if(!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.turn.card.id)
      return this.turn.giveFeedback()
    }
    return this.turn.giveFeedback()
  }
  calculatePercentage() {
    let correctPercentage = 100 - this.incorrectGuesses.length / this.turns * 100
    return +correctPercentage.toFixed(0)
  }
  endRound() {
    console.log(`** Round over! ** You answered <${this.calculatePercentage()}>% of the questions correctly!`)
    return `** Round over! ** You answered <${this.calculatePercentage()}>% of the questions correctly!`
  }
}


module.exports = Round