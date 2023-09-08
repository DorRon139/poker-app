export const SUITS = [
    'C',
    'D',
    'H',
    'S',
]

export const VALUES = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
]

export const createCard = (suit, value) => ({
    suit,
    value,
})