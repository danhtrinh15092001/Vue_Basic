<template>
    <div class="hello">
        <div v-for="anime in animes" :key="anime.id">{{ anime.id }} {{ anime.title }} - {{ anime.author }}</div>
        <br />
        <div v-for="book in Story" :key="book.id">{{ book.id }} {{ book.title }} - {{ book.author }}</div>
    </div>
</template>

<script>
export default {
    name: "Watched",
    data() {
        return {
            animes: [
                { id: "1", title: "Naruto", author: "Danh", isFav: true },
                { id: "2", title: "Onepiece", author: "Dien", isFav: false },
                { id: "3", title: "DragonBall", author: "Duc", isFav: true },
            ],
        };
    },
    computed: {
        Story() {
            return this.animes.filter((anime) => anime.isFav);
        },
    },
};
</script>

<style></style>
