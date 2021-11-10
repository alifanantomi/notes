<template>
    <div id="note">
        <div class="header">
            <div class="back" @click="goBack">
                <i class="ri-arrow-left-line"></i>
            </div>
            <div class="share">
                <i class="ri-share-forward-box-line"></i>
            </div>
        </div>

        <div class="text-editor">
            <h1 class="title">📷 reminder</h1>
            <div class="content">
                <img src="@/assets/images/profile.jpg" alt="">

                <p>Came across this beautiful wall while walking down by the market this morning. Love the texture and how the shadows fall across it. Try a black and white version with high contrast?</p>

                <div class="checklists">
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
</template>

<script>
export default {
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
}
</script>

<style>

</style>