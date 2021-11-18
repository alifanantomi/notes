import { getNotes, getNotesById } from "../api/notes.api"

export default {
    namespaced: true, 
    state: {
        notes: [],
    },

    getters: {
        getNoteById: (state) => (id) => {
            var def_note = {
                    id: 1,
                    title: '',
                    slug: '',
                    content: [
                        {
                            tag: 'p',
                            content: ''
                        }
                    ],
                    timestamp: Date.now()
                }
            

            if (state.notes.length > 0) return state.notes.find(note => note.id === id)      
x
            return def_note
        }
    },

    mutations: {
        SET_NOTES(state, notes) {
            state.notes = notes

            localStorage.setItem('notes', JSON.stringify(notes))
        }
    },

    actions: {
        async fetchNotes({ commit }) {
            try {
                const payload = await getNotes()

                commit('SET_NOTES', payload.data.data)

            } catch (error) {

                console.error('Failed to fetch notes: ', error);
            }
        },

        async fetchNotesById({ commit }, id) {
            try {
                const payload = await getNotesById(id)

                commit('SET_NOTES', payload.data.data)

            } catch (error) {

                console.error('Failed to fetch notes: ', error);
            }
        },

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