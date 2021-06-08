import {REGISTER_USER} from '../actions/userActions'

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
