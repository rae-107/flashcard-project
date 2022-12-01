const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck')
const Card = require('../src/Card')
const data = require('../src/data')

describe('Deck', () => {

  let card, card1, card2, deck

  beforeEach(() => {
    card = new Card(data.prototypeData[0].id, data.prototypeData[0].question ,data.prototypeData[0].answers, data.prototypeData[0].correctAnswer)
    card1 = new Card(data.prototypeData[1].id, data.prototypeData[1].question ,data.prototypeData[1].answers, data.prototypeData[1].correctAnswer)
    card2 = new Card(data.prototypeData[2].id, data.prototypeData[2].question ,data.prototypeData[2].answers, data.prototypeData[2].correctAnswer)
    deck = new Deck([card, card1, card2])
  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function')
  })

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck)
  })

  it('should contain an array of instantiated cards', () => {
    expect(deck.cards).to.deep.equal([card, card1, card2])
  })

  it('should know how many cards are in the deck', () => {
    expect(deck.countCards()).to.equal(3)

    const card3 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const deck1 = new Deck([card3])

    expect(deck1.countCards()).to.equal(1)
  })
})