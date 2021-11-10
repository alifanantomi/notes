<template>
    <div id="note">
        <div class="header">
            <div class="back" @click="goBack">
                <i class="ri-arrow-left-line"></i>
            </div>
            <div class="share">
                <!-- <i class="ri-share-forward-box-line"></i> -->
                <span>Save</span>
            </div>
        </div>

        <div class="text-editor">
            <h1 class="title">
                <input class="form-title" type="text" placeholder="Title" v-model="text.title">
            </h1>

            <div class="content">
                <textarea class="form-text" placeholder="Start typing.." autofocus wrap @keydown="onUpdate"></textarea>
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
export default {
    data() {
        return {
            text: {
                title: '',
                content: {}
            }
        }
    },
    methods: {
        onSave() {

        },
        
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
}
</script>

<style>

</style>