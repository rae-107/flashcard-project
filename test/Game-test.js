const chai = require('chai')
const expect = chai.expect

const Game = require('../src/Game')
const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Game', () => {
  let game
  beforeEach(() => {
    game = new Game()
  })

  it('should be a function', () => {
    expect(Game).to.be.a('function')
  })

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game)
  })

  it('should keep track of the current round', () => {
    expect(game.round).to.equal(0)
  })

  it('should create 30 cards', () => {
    game.makeCards()

    expect(game.cards.length).to.equal(30)
  })

  it('should be an instance of Game', () => {
    game.makeCards()

    expect(game.cards[0]).to.be.an.instanceof(Card)
  })

  it('should put all cards into Deck class', () => {
    game.makeCards()
    game.makeDeck()

    expect(game.deck.cards.length).to.equal(30)
  })

  it('should be an instance of Game', () => {
    game.makeDeck()

    expect(game.deck).to.be.an.instanceof(Deck)
  })

  it('should start a new round', () => {
    game.makeCards()
    game.makeDeck()
    game.startRound()

    expect(game.startRound()).to.be.an.instanceof(Round)
  })
})