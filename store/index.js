export const state = () => ({
    id: 0,
    counter: 20,
    songIndex: 0,
    cover: '',
    currentSongTitle: 'Bangee (Single)'
})

export const mutations = {
  next(state, payload) { 
    state.songIndex++
    state.currentSongTitle = payload

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

  prev(state, payload) {
    state.songIndex--
    state.currentSongTitle = payload

    if(state.songIndex < 0) {
      state.songIndex = 14
    }
  },

  increement(state) {
    state.counter++
  }
}