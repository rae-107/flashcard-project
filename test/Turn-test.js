const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', () => {

  let turn
  let card
  beforeEach(() => {
    turn = new Turn('object', card)
    card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn)
  })

  it('should return the guess', () => {
    turn.returnGuess()

    expect(turn.returnGuess()).to.equal('object')
  })

  it('should return the card object', () => {
    turn.returnCard()

    expect(turn.returnCard()).to.deep.equal({
      id: 1,
      question: 'What allows you to define a set of related information using key-value pairs?',
      answers: ['object', 'array', 'function'],
      correctAnswer: 'object'
    })
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