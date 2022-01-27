export const state = () => ({
    id: 0,
    counter: 20,
    songIndex: 0
})

export const mutations = {
  next(state) {
    state.songIndex++

    if(state.songIndex > 4) {
      state.songIndex = 0
    }
  },

  changeSongIndex(state, payload) {
    state.songIndex = payload
  },

  prev(state) {
    if(state.songIndex < 0) {
      state.songIndex = 0
    } else {
      state.songIndex--
    }
  },

  increement(state) {
    state.counter++
  }
}