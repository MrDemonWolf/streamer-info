export const state = () => ({
  value: '',
})

export const mutations = {
  set(state, text) {
    state.value = text
  },
}
