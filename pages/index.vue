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

        <div class="list-item">
            <div class="item" v-for="n in 10" :key="n" @click="onClickItem(n)">
                <div class="description">
                    <div class="title">Notes</div>
                    <div class="desc">Came across this beautiful wall while w..</div>
                    <div class="timestamp">08:15 PM</div>
                </div>
                <div class="assets">
                    <img src="" alt="">
                </div>
            </div>
        </div>

        <div class="footer">
            <div class="add-btn" @click="onAddNotes">
                <i class="ri-add-line"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: "default",
    methods: {
        onClickItem(id) {
            this.$router.push('/' + id)
        },
        onAddNotes() {
            this.$router.push('/new')
        }
    }
}
</script>
