export const state = () => ({
    list: [1,2,3,4]
})

export const mutations = {
    add(state, text) {
        state.list.push(text);
    },
    remove(state, num) {
        state.list.splice(state.list.indexOf(num), 1)
    },
    
}

export const actions = {
    add({ commit, state }, data) {
        commit('add', data);
    },
    remove({ commit, state }, data) {
        commit('remove', data);
    }
}