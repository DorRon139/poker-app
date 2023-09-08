import {
    createCard,
    SUITS,
    VALUES,
} from './cards.js'

export const createFreshDeck = () => {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return createCard(suit, value)
        })
    })
}

export const shuffleDeck = (cards) => {
    let shuffledDeck = cards
    for (let i = shuffledDeck.length - 1; i > 0; i--) // fisher algorithm
    {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    return shuffledDeck
}

export const getCard = (deck) => {
    return deck.shift()
}
export const dealCards = (deck, players) => {
    for (const player of players){
        player.hand = [ getCard(deck) ]
    }
    for (const player of players){
        player.hand.push(getCard(deck))
    }
}

export const endOfGame = (deck, players) => {
    for (const player of players){
        delete player.hand
    }
    deck = createFreshDeck()
}





