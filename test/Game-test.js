const chai = require('chai')
const expect = chai.expect

const Game = require('../src/Game')
const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Data = require('../src/data')


describe('Game', () => {
    let game 
    // let round
    // let deck
    // let card
    // let cards
    beforeEach(() => {
      // cards = Data.prototypeData.map(card => card = new Card(card.id, card. question, card.answers, card.correctAnswer) )
      // card = new Card(cards)
      // deck = new Deck(card)
      // round = new Round(deck)
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
})