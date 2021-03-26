const user = {
  state: {
    uid: null
  },
  mutations: {
    SET_UID (state, uid) {
      state.uid = uid
    }
  },
  actions: {
    setUid ({ commit }, uid) {
      commit('SET_UID', uid)
    }
  }
}
export default user
