import {
    createFreshDeck,
    dealCards,
    shuffleDeck,
    getCard,
} from "./deck.js";
import { ROOMS } from "../dummy_date/players.js";
import {
    DECISIONS_TYPES,
    DEALER_TYPES,
} from "../consts.js";

const BIG = 10
const SMALL = 5

export const tableCards = []

export const game = async (roomId) => {
    const deck = createFreshDeck()
    shuffleDeck(deck)
    const [ room ] = ROOMS.filter((r) => r._id === roomId) // TODO: query from server
    let { participents } = room
    setDealerTag(participents)
    dealCards(deck, participents)
    bets(participents, true)
    // flop(deck)
    
    console.log(participents[0].hand)
    console.log(participents[1].hand)
    console.log(participents[2].hand)
    console.log(participents[3].hand)

    console.log(participents)
}

// export const setDealerTag = (players) => {
//     if(!players.length){
//         return []
//     }
//     const dealerTagIndex = 0
//     players[dealerTagIndex].dealer = DEALER_TYPES.dealer
//     players[dealerTagIndex+1].dealer = DEALER_TYPES.small
//     players[dealerTagIndex+2].dealer = DEALER_TYPES.big
//     return players
// }

const getDealer = (participents) => {
    return participents.findIndex(p => p.dealer === DEALER_TYPES.dealer)
}

const playersBet = (player, bet) => {
    player.bet
    ? player.bet += bet
    : player.bet = bet
    player.coins -= bet
}

export const passTheDealer = (participents) => {
    const dealerTagIndex = getDealer(participents)
    delete participents[dealerTagIndex].dealer
    participents[(dealerTagIndex+1) % participents.length].dealer = DEALER_TYPES.dealer
    participents[(dealerTagIndex+2) % participents.length].dealer = DEALER_TYPES.small
    participents[(dealerTagIndex+3) % participents.length].dealer = DEALER_TYPES.big
}

export const bets = (participents, preFlop = false) => {
    const dealerTagIndex = getDealer(participents)
    if(preFlop){
        playersBet(participents[dealerTagIndex+1], SMALL)
        playersBet(participents[dealerTagIndex+2], BIG)
    }
    
    let currentPlayerIndex = (dealerTagIndex + 3) % participents.length
    while(!participents[currentPlayerIndex]?.bet || participents[currentPlayerIndex]?.dealer == DEALER_TYPES.small || participents[currentPlayerIndex]?.dealer == DEALER_TYPES.big){
        currentPlayerIndex = currentPlayerIndex%participents.length
        let playerDecision = 'CALL' // TODO: ask the player for bet
        if(participents[currentPlayerIndex]?.dealer === DEALER_TYPES.big){
            playerDecision = 'CHECK'
        }
        switch (playerDecision) {
            case DECISIONS_TYPES.call:
                const currentBetOnHand = participents[currentPlayerIndex - 1 === -1 ? participents.length - 1 : currentPlayerIndex -1].bet
                participents[currentPlayerIndex]?.dealer === DEALER_TYPES.small 
                ? playersBet(participents[currentPlayerIndex], SMALL)
                : playersBet(participents[currentPlayerIndex], currentBetOnHand)
                break;
            case DECISIONS_TYPES.check:
                break;
            default:
                break;
            }
            currentPlayerIndex+=1
    }
}

export const flop = (deck) => {
    getCard(deck)
    tableCards.push(getCard(deck))
    tableCards.push(getCard(deck))
    tableCards.push(getCard(deck))
}

export const river= () => {

}
export const turn = () => {

}

// game('12345678')
