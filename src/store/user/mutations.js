
export const setCurrentUser = (state, payload) => {
  if (payload) {
    var currentUserModelo =   state.currentUserModelo
    let merged = {...currentUserModelo, ...payload};
    state.currentUser = merged
  } else {
    state.currentUser = payload
  }
};

export const setErr = (state, payload) => {
  state.err = payload
};

export const setGeoLocation = (state, payload) => {
  state.geoLocation = payload
};

export const setToken = (state, payload) => {
  state.token = payload
};
