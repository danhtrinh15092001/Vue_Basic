<template>
    <div>
        <h1>Array of string</h1>
        <h2 v-for="(name, index) in names" :key="index">{{ index }} - {{ name }}</h2>
    </div>
    <div>
        <h1>Array of object</h1>
        <h2 v-for="(name, index) in fullNames" :key="index">{{ index }} - {{ name.first }} {{ name.last }}</h2>
    </div>
    <div>
        <h1>Array of Arrays</h1>
        <h2 v-for="actor in actors" :key="actor.name">
            <h3>{{ actor.name }}</h3>
            <h5 v-for="movie in actor.movies" :key="movie">
                {{ movie }}
            </h5>
        </h2>
    </div>
    <div>
        <h1>Object key value</h1>
        <h2 v-for="(value, key, index) in myInfo" :key="index">{{ index }} - {{ key }}: {{ value }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            names: ["Bruce", "Clark", "Diana"],
            fullNames: [
                { first: "Bruce", last: "Wayne" },
                { first: "Princess", last: "Diana" },
                { first: "Clark", last: "Kent" },
            ],
            actors: [
                {
                    name: "Christian Bale",
                    movies: ["Batman", "The Prestige"],
                },
                {
                    name: "Di Caprio",
                    movies: ["Titanic", "Inception"],
                },
            ],
            myInfo: {
                name: "Danh",
                channel: "FreeCodeCamp",
                course: "vue 3",
            },
        };
    },
};
</script>

<style>
h1 {
    color: red;
}
</style>
