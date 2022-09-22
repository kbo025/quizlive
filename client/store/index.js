export const state = () => ({
  auth: null,
  room: null,
});

export const getters = {
  getAuth(state) {
    return state.auth
  },

  getRoom(state) {
    return state.room
  },

  isAuthenticated(state) {
    return state.auth != null;
  },
}

export const mutations = {
  setAuth (state, auth) {
    state.auth = auth;
  },
  setRoom (state, room) {
    state.room = room;
  },
}
