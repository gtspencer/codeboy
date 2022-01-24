export const state = () => ({
    id: 0,
    counter: 20
})

export const mutations = {
  next(state) {
    state.id++
  },

  increement(state) {
      state.counter++
  }
}