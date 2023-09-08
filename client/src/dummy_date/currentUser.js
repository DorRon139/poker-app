const inbar =     {
    _id: '1234',
    userName: 'Inbar',
    email: 'inbar@ron.com',
    profilePic: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}


const dor = {
    _id: '5678',
    username: 'Dor',
    email: 'dor@ron.com',
    profilePic: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}

const playersToGet = [inbar, dor]

export const CURRENT_USER = playersToGet[Math.floor(Math.random() * playersToGet.length)];