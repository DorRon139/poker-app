import { io } from "socket.io-client"
import {
    REACT_APP_SERVER_DOMAIN
} from 'consts.js'

const socket = io(REACT_APP_SERVER_DOMAIN)

export default socket