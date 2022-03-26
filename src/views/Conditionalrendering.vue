<template>
    <div class="anime">
        <h1>Hello</h1>
        <div v-if="showAnime">
            <h1>{{ title }} - {{ author }} - {{ age }}</h1>
        </div>
        <button @click="ShowAnime">
            <span v-if="showAnime">Hiden Show</span>
            <span v-else>Show</span>
        </button>
        <span v-show="showAnime">Ahihi Đồ ngốc</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showAnime: true,
            title: "One Pieces",
            author: "Oda",
            age: 34,
        };
    },
    methods: {
        ShowAnime() {
            this.showAnime = !this.showAnime;
        },
    },
};
</script>

<style></style>
