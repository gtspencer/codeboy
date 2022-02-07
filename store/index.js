export const state = () => ({
    id: 0,
    counter: 20,
    songIndex: 0,
    cover: '',
    currentSongTitle: 'Bangee (Single)',
    currentSrc: '',
    assetsLoaded: true,
    category: 'all'
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

  changeCurrentSrc(state, payload) {
    state.currentSrc = payload
  },

  changeCategory(state, payload) {
    state.category = payload
  },

  changeLoaderState(state, payload) {
    state.assetsLoaded = payload
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