export const getToken = (payload) => ({
  type: "GET_TOKEN",
  payload,
});

export const tokenSuccess = (payload) => ({
  type: "TOKEN_SUCCESS",
  payload,
});

export const tokenFailed = (payload) => ({
  type: "FAILED",
});

export const getPair = (payload) => ({
  type: "GET_PAIR",
  payload,
});

export const getPairSuccess = (payload) => ({
  type: "PAIR_SUCCESS",
  payload,
});

export const pairFailed = (payload) => ({
  type: "PAIR_FAILED",
});
