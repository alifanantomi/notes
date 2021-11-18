<template>
    <div id="note">
        <div class="header">
            <div class="back" @click="goBack">
                <i class="ri-arrow-left-line"></i>
            </div>
            <div class="share" @click="onSave">
                <!-- <i class="ri-share-forward-box-line"></i> -->
                <span>Save</span>
            </div>
        </div>

        <div class="text-editor" v-if="isBusy">
            <div class="text-center">Loading</div>
        </div>

        <div class="text-editor" v-else>
            <h1 class="title">
                <input class="form-title" type="text" placeholder="Title" v-model="note.title">
            </h1>

            <div class="content" >
                <div v-for="(content, i) in note.content" :key="i">
                    <!-- <img v-if="content.tag == 'image'" :src='"@/assets/images/profile.jpg"' alt=""> -->

                    <textarea 
                        v-if="content.tag == 'paragraph'" 
                        class="form-text" 
                        placeholder="Start typing.." 
                        autofocus 
                        wrap 
                        v-model="content.content">
                    </textarea>
                    
                    <div v-if="content.tag == 'checklist'" class="checklist">
                        <div class="item" v-for="n in 3" :key="n">
                            <div class="icon">
                                <i class="ri-checkbox-circle-fill" v-if="n > 1"></i>
                                <i class="ri-checkbox-blank-circle-line" v-else></i>
                            </div>
                            <span class="checklist-title">Try black and white version {{ n }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <div class="action-group">
                <div class="action-button">
                    <i class="ri-voiceprint-line"></i>
                </div>
                <div class="action-button">
                    <i class="ri-image-line"></i>
                </div>
                <div class="action-button">
                    <i class="ri-checkbox-circle-line"></i>
                </div>
                <div class="action-button">
                    <i class="ri-quill-pen-line"></i>
                </div>
                <div class="action-button">
                    <i class="ri-text"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            isBusy: false,
            isEditing: false,

            id_note: this.$route.params.id,
            note: {
                id: 0,
                title: '',
                slug: '',
                content: [
                    {
                        tag: 'p',
                        content: ''
                    }
                ],
                timestamp: Date.now()
            },

        }
    },

    computed: {
        ...mapState({
            notesState: (state) => state.Notes.notes
        }),
    },

    mounted() { 
        this.fetchDetailNote(this.id_note)
    },

    methods: {
        onSave() {
            if (this.note.title.trim().length == 0) this.note.title = 'untitled'

            this.note.id = this.id_note

            this.note.slug = this.note.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')

            this.$store.dispatch('Notes/setNotes', this.note)

            this.$router.push('/')
        },

        async fetchDetailNote() {
            this.isBusy = true

            try {
                await this.$store.dispatch('Notes/fetchNotesById', this.id_note)

                this.note = this.notesState
            } catch (error) {
                console.error('failed fetch detail note', error)
            }

            this.isBusy = false
        },
        
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
}
</script>

<style>

</style>