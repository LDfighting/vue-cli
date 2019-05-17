const state = {
  commodities: []
}
const mutations = {
  PUSH_commodities: (state, param) => {
    state.commodities.push(param)
    // console.log(state.commodities)
  },
  REPLACE_LISTITEM_COUNT: (state, param) => {
    for(let i = 0; i < state.commodities.length; i++) {
      if (param.name == state.commodities[i].name) {
        state.commodities[i].count = param.count
      }
    }
  },
  RED_LISTITEM_SPLICE: (state, param) => {
    for(let i = 0; i < state.commodities.length; i++) {
      if (param.name == state.commodities[i].name) {
        state.commodities.splice(i,1)
      }
    }
    // console.log(state.commodities)
  },
  CLEAR_COMMODITY: (state, param) => {
    for(let i = 0; i < state.commodities.length; i++) {
        state.commodities.count = 0
    }
    state.commodities = []
  }
}
const actions = {

}

export default {
  state,
  mutations,
  actions
}
