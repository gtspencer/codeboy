export const state = () => ({
    id: 0,
    songIndex: 0,
    currentCover: "https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp",
    currentSongTitle: 'Days Amazing',
    currentSrc: '',
    category: 'all',
    mixtape: '',
    currentLyrics:  ``,
})

export const mutations = {
  next(state) { 
    state.songIndex++

    if(state.songIndex > 28) {
      state.songIndex = 0
    }
  },

  prev(state) {
    state.songIndex--

    if(state.songIndex < 0) {
      state.songIndex = 28
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

  changeCover(state, payload) {
    state.currentCover = payload
  },

  changeCategory(state, payload) {
    state.category = payload
  },

  changeLoaderState(state, payload) {
    state.assetsLoaded = payload
  },

  changeMixtape(state, payload) {
    state.mixtape = payload
  },

  changeLyrics(state, payload) {
    state.currrentLyrics = payload
  },

  increement(state) {
    state.counter++
  }
}