import { combineReducers } from 'redux'
import userReducer from './userReducer'
import seatReducer from './userReducer'

const rootReducer = combineReducers({
    users: userReducer,
    seats: seatReducer
})

export default rootReducer