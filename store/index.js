export const state = () => ({
    id: 0,
    songIndex: 0,
    currentCover: "",
    currentSongTitle: '',
    currentSrc: '',
    category: 'all',
    mixtape: '',
    currentLyrics:  ``,
    account: ''
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
  },

  changeAccount(state, payload) {
    state.account = payload
  },

  changeProvider(state, payload) {
    state.provider = payload;
  }
}

//store/index.js
export const getters = {
  getAccount(state) {
    return state.account
  },
  getProvider(state) {
    return state.provider;
  }
}
