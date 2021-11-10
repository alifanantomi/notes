<template>
    <div id="notes">
        <div class="header">
            <div class="title">
                <i class="ri-sticky-note-line"></i>
            </div>
            <div class="profile">
                <img src="@/assets/images/profile.jpg" alt="">
            </div>
        </div>

        <div class="list-item" v-if="!isBusy">

            <div class="item" v-for="(note, index) in sorted_notes" :key="index" @click="onClickItem(note.title)">
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
            Loading
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

            notes: []
        }
    },

    filters: {
        substractString(str) {

            return str.substring(0,39) + (str.trim().length > 38 ? ".." : '')
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
    },

    methods: {
        onClickItem(title) {
            var slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')

            this.$router.push('/' + slug)
        },
        onAddNotes() {
            this.$router.push('/new')
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
