import { HOME_FAILURE, HOME_SUCCESS, HOME_WATCHER } from "../../constants";

const initialState = {
  error: null,
  homeLoader: false,
  homeData: [],
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case HOME_WATCHER:
      return {
        ...state,
        homeLoader: true,
      };
    case HOME_SUCCESS:
      return {
        ...state,
        error: null,
        homeData: action.payload,
        homeLoader: false,
      };
    case HOME_FAILURE:
      return {
        ...state,
        error: action,
        homeLoader: false,
      };

    default:
      return state;
  }
}
