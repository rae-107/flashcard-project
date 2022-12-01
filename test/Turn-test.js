const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')
const data = require('../src/data')

describe('Turn', () => {

  let turn, card

  beforeEach(() => {
    turn = new Turn('object', card)
    card = new Card(data.prototypeData[0].id, data.prototypeData[0].question ,data.prototypeData[0].answers, data.prototypeData[0].correctAnswer)
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn)
  })

  it('should be able to take in a guess', () => {
    expect(turn.guess).to.equal('object')
  })

  it('should be able to take in a card', () => {
    expect(turn.card).to.deep.equal(card)
  })

  it('should return the guess', () => {
    turn.returnGuess()

    expect(turn.returnGuess()).to.equal('object')
  })

  it('should return the card object', () => {
    turn.returnCard()

    expect(turn.returnCard()).to.deep.equal(card)
  })

  it('should return true or false if guess matches the correct answer', () => {
    const turn1 = new Turn('wrong guess', card)

    turn.evaluateGuess()
    turn1.evaluateGuess()

    expect(turn.evaluateGuess()).to.equal(true)
    expect(turn1.evaluateGuess()).to.equal(false)
  })

  it('should return "correct" or "incorrect" if guess is correct or incorrect', () => {
    const turn1 = new Turn('wrong guess', card)

    turn.giveFeedback()
    turn1.giveFeedback()

    expect(turn.giveFeedback()).to.equal('correct!')
    expect(turn1.giveFeedback()).to.equal('incorrect!')
  })
})