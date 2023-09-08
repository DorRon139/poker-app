import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'

import generalSliceReducer from './general/general.slice'
import pokerRoomSliceReducer from './room/poker-room.slice'
import userSliceReducer from './user/user.slice'

const logger = createLogger()

const store = configureStore({
    reducer: {
        // user: userSliceReducers,
        general: generalSliceReducer,
        pokerRoom: pokerRoomSliceReducer,
        user: userSliceReducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store