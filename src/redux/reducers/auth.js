import { LOGIN } from "./../actionType";

const initialState = {
  user: {},
};

const loginUser = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      //   console.log("login user action with payload is ");
      //  console.log(action.payload);
      return {
        user: {
          ...state.user,
          username: action.payload.username,
          password: action.payload.password,
        },
      };
    }

    default:
      return state;
  }
};
export default loginUser;
