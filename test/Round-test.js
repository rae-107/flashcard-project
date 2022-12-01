const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Turn = require('../src/Turn')
const data = require('../src/data')

describe('Round', () => {

  let round, deck, card, card1, card2

  beforeEach(() => {
    card = new Card(data.prototypeData[0].id, data.prototypeData[0].question ,data.prototypeData[0].answers, data.prototypeData[0].correctAnswer)
    card1 = new Card(data.prototypeData[1].id, data.prototypeData[1].question ,data.prototypeData[1].answers, data.prototypeData[1].correctAnswer)
    card2 = new Card(data.prototypeData[2].id, data.prototypeData[2].question ,data.prototypeData[2].answers, data.prototypeData[2].correctAnswer)
    deck = new Deck([card, card1, card2])
    round = new Round(deck)
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round)
  })

  it('should start with a deck of cards', () => {
    expect(round.deck).to.equal(deck)
  })

  it('should start with 0 turns as default', () => {
    expect(round.turns).to.equal(0)
  })

  it('should be able to keep track of cards that were guessed incorrectly', () => {
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should keep track of the current card', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card)
  })

  it('should be able to update turns count after guess is made', () => {
    round.takeTurn()

    expect(round.turns).to.equal(1)
  })

  it('should instatiate new turn instance after every guess', () => {
    const turn = new Turn('object', card)

    round.takeTurn(turn.guess)

    expect(round.turn).to.be.an.instanceof(Turn)
  })

  it('should evaluate guess', () => {
    const round1 = new Round(deck)
    const turn = new Turn('object', card)
    const turn1 = new Turn('avocado', card1)

    round.takeTurn(turn.guess)
    round1.takeTurn(turn1.guess)

    expect(turn.evaluateGuess()).to.equal(true)
    expect(turn1.evaluateGuess()).to.equal(false)
  })

  it('should give feedback for correct or incorrect guesses', () => {
    const turn = new Turn('object', card)
    const turn1 = new Turn('maple tree', card1)

    expect(round.takeTurn(turn.guess)).to.equal('correct!')
    expect(round.takeTurn(turn1.guess)).to.equal('incorrect!')
  })

  it('should make the next card the current card', () => {
    const turn = new Turn('object', card)
    const turn1 = new Turn('array', card1)
    const turn2 = new Turn('mutator method', card2)

    round.takeTurn(turn.guess)
    expect(round.turn.card).to.deep.equal(card)

    round.takeTurn(turn1.guess)
    expect(round.turn.card).to.deep.equal(card1)

    round.takeTurn(turn2.guess)
    expect(round.turn.card).to.deep.equal(card2)
  })

  it('should gather all incorrect card id\'s in the incorrect guesses array', () => {
    const turn = new Turn('object', card)
    const turn1 = new Turn('blue', card1)

    round.takeTurn(turn.guess)
    round.takeTurn(turn1.guess)

    expect(round.incorrectGuesses).to.deep.equal([2])
  })

  it('should calculate the percetage of correct guesses', () => {
    const turn = new Turn('object', card)
    const turn1 = new Turn('array', card1)
    const turn2 = new Turn('oranges', card2)
    
    round.takeTurn(turn.guess)
    round.takeTurn(turn1.guess)
    round.takeTurn(turn2.guess)

    round.calculatePercentage()

    expect(round.calculatePercentage()).to.equal(67)
  })

  it('should print to the console that the  round is over', () => {
    const turn = new Turn('object', card)
    const turn1 = new Turn('pears', card1)
    const turn2 = new Turn('oranges', card2)
    
    round.takeTurn(turn.guess)
    round.takeTurn(turn1.guess)
    round.takeTurn(turn2.guess)
    
    round.calculatePercentage()

    round.endRound()
    
    expect(round.calculatePercentage()).to.equal(33)
    expect(round.endRound()).to.equal(`** Round over! ** You answered <33>% of the questions correctly!`)
  })
})

