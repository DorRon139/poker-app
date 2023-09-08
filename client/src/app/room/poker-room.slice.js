import { createSlice } from "@reduxjs/toolkit";
import { PLAYERS } from "../../dummy_date/players";
import { createFreshDeck, shuffleDeck } from '../../utils/deck'

import {
  DEALER_TYPES
} from '../../consts'

const initialState = {
    _id: '12345678',
    deck: createFreshDeck(),
    communityCards: [],
    dealerTagIndex: -1,
    players: PLAYERS || [],
}

const getCard = (deck) => {
  return deck.shift()
}

const pokerSlice = createSlice({
  name: "poker-room",
  initialState,
  reducers: {
    setShuffleDeck: (state) => {
      state.deck = shuffleDeck(state.deck);
    },
    setDealerTag: (state) => {
      const { players, dealerTagIndex } = state
      if(!players.length){
          return []
      }
      // players[dealerTagIndex].dealer = DEALER_TYPES.regular
      players[dealerTagIndex].dealer = DEALER_TYPES.dealer
      players[(dealerTagIndex+1) % players.length].dealer = DEALER_TYPES.small
      players[(dealerTagIndex+2) % players.length].dealer = DEALER_TYPES.big
    },
    dealCards: (state, action) => {
      for(let i=0; i < state.players.length*2; i++){
        let index = i % state.players.length
        state.players[index].hand 
        ? state.players[index].hand = [...state.players[index].hand, getCard(state.deck)]
        : state.players[index].hand = [getCard(state.deck)]
      }
    },
    resetGame: (state, action) => {
      state.dealerTagIndex = action.payload % state.players.length
    }
  },
});

export const { 
  setShuffleDeck,
  setDealerTag,
  dealCards,
  resetGame,
} = pokerSlice.actions;
export default pokerSlice.reducer;