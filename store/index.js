export const state = () => ({
    id: 0,
    counter: 20,
    songIndex: 0,
    cover: '',
    currentSongTitle: ''
})

export const mutations = {
  next(state) {
    state.songIndex++

    if(state.songIndex > 14) {
      state.songIndex = 0
    }
  },

  changeSongIndex(state, payload) {
    state.songIndex = payload
  },

  changeCurrentSongTitle(state, payload) {
    state.currentSongTitle = payload
  },

  prev(state) {
    state.songIndex--

    if(state.songIndex < 0) {
      state.songIndex = 14
    }
  },

  increement(state) {
    state.counter++
  }
}