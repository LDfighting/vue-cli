const mutations = {
  SET_ASIDE_SHOW: (state, params) => {
    state.aside_info = params
  },
  SET_CONNENT_NAME: (state, params) => {
    state.name = params
  },
  SET_FOOT_MASK: (state, params) => {
    state.foot_info = params
  }
}
export default mutations
