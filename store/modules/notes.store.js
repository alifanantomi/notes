export default {
    namespaced: true, 
    state: {
        notes: JSON.parse(localStorage.getItem('notes')) || []
    },

    mutations: {
        SET_NOTES(state, notes) {
            var list_state = state.notes

            list_state.push(notes)

            localStorage.setItem('notes', JSON.stringify(list_state))
        }
    },

    actions: {
        setNotes({ commit }, notes) {
            try {
                const payload = notes

                commit('SET_NOTES', payload)
            } catch (error) {
                
                console.error('Failed to set notes: ', error);
            }
        }
    }
}