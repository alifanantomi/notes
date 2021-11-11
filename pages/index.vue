<template>
    <div id="notes">
        <div class="header">
            <div class="title">
                <i class="ri-sticky-note-line"></i>
            </div>
            <!-- <div class="profile">
                <img src="@/assets/images/profile.jpg" alt="">
            </div> -->
        </div>

        <div class="list-item" v-if="isBusy">
            <div class="text-center">Loading</div>
        </div>

        <div class="list-item" v-else-if="notes.length > 0">

            <div class="item" v-for="(note, index) in sorted_notes" :key="index" @click="onClickItem(note.id)">
                <div class="description">
                    <div class="title"> {{ note.title }} </div>
                    <div class="desc">{{ note.content[0].content | substractString }}</div>
                    <div class="timestamp">{{ note.timestamp | dateFormatter }}</div>
                </div>
                <div class="assets">
                    <img src="" alt="">
                </div>
            </div>

        </div>

        <div class="list-item" v-else>
            <div class="text-center">No Notes</div>
        </div>

        <div class="footer">
            <div class="add-btn" @click="onAddNotes">
                <i class="ri-add-line"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    layout: "default",
    data() {
        return {
            isBusy: false,

            notes: [],
            last_id: 0,
        }
    },

    filters: {
        substractString(str) {

            return str.trim().length > 33 ? str.substring(0,33) + '..' : str
        },
        dateFormatter(date) {
            date = new Date()

            return date.toDateString()
        }
    },

    computed: {
        ...mapState({
            notesState: (state) => state.Notes.notes,
        }),

        sorted_notes() {
            return this.notes.sort((a, b) => b.timestamp - a.timestamp)
        }
    },

    mounted() {
        this.fetchNotes()

        this.last_id = this.notesState.length
    },

    methods: {
        // onClickItem(title) {
        //     var slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')

        //     this.$router.push('/' + slug)
        // },
        onClickItem(index) {

            this.$router.push('/' + index)
        },
        onAddNotes() {
            var id = this.last_id + 1

            this.$router.push('/' + id )
        },

        fetchNotes() {
            this.isBusy = true

            setTimeout(() => {
                this.notes = this.notesState

                this.isBusy = false
            }, 400);
        }
    },
}
</script>
