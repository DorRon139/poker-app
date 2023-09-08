export const PLAYERS = [
    {
        _id: '5678',
        name: 'Dor',
        coins: 100,
        profilePic: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        _id: '1234',
        name: 'Inbar',
        coins: 100,
        profilePic: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        _id: '1212',
        name: 'Hadar',
        coins: 100,
        profilePic: 'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        _id: '1213',
        name: 'Celeb Curry',
        coins: 100,
        profilePic: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        _id: '11111',
        isFreeChair: true
    },
    {
        _id: '2222',
        isFreeChair: true
    },
    {
        _id: '3333',
        isFreeChair: true
    },
]


export const ROOMS = [
    {
        _id: '12345678',
        participents: [PLAYERS[0], PLAYERS[1], PLAYERS[2], PLAYERS[3]]
    }
]