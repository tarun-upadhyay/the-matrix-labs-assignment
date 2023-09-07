export const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_TOKEN":
      return { ...state, isLoading: true };
    case "TOKEN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        tokenData: action.payload,
      };
    case "FAILED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "GET_PAIR":
      return { ...state, isLoading: true };
    case "PAIR_SUCCESS":
      return {
        ...state,
        isLoading: false,
        pairData: action.payload,
      };
    case "PAIR_FAILED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
