import { SIGN_IN, SIGN_OUT, ERROR_SIGNING_IN } from "../actions/types";

const initialStore = {
  isAuthenticated: false,
  error: null,
  user: null,
};

let authReducer = (state = initialStore, action) => {
  console.log(action?.type, action?.payload);
  switch (action?.type) {
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        error: null,
        user: {
          email: action.payload?.user?.email,
          name: action.payload?.user?.displayName,
          userimage: action.payload?.user?.photoURL,
        },
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        error: null,
        user: null,
      };
    case ERROR_SIGNING_IN:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
