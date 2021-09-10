export default {
  setUser(state, { user = null } = {}) {
    state.user = user;
  },
};
