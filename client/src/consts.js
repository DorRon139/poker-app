
const {
    VITE_SERVER_DOMAIN,
} = import.meta.env

const DECISIONS_TYPES = {
    chap: 'CHAP',
    check: 'CHECK',
    call: 'CALL',
    raise: 'RAISE',
}

const DEALER_TYPES = {
    dealer: 'DEALER',
    small: 'SMALL',
    big: 'BIG',
    regular: 'REGULAR'
}

const MAX_PLAYERS_IN_TEXAS_HOLDEM = 7

export {
    VITE_SERVER_DOMAIN,
    DECISIONS_TYPES,
    DEALER_TYPES,
    MAX_PLAYERS_IN_TEXAS_HOLDEM,
}