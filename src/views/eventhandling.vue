<template>
    <h2>{{ name }}</h2>
    <div>
        <button @click="changeName">Change Name</button>
    </div>

    <h2>{{ count }}</h2>

    <div>
        <button @click.once="increment(1)">Increment 1</button>
        <button @click="increment(5)">Increment 5</button>
        <button @click="decrement(1)">Decrement 1</button>
        <button @click="decrement(5)">Decrement 5</button>
    </div>
    <br />
    <p>Key up: Enter</p>
    <input type="text" @keyup.enter="submit" v-model="title" />
    {{ title }}
</template>

<script>
export default {
    name: "eventhandling",
    data() {
        return {
            name: "Danh",
            title: "",
            count: 0,
        };
    },
    methods: {
        changeName() {
            this.name = "Nicky";
        },
        increment(num) {
            this.count += num;
        },
        decrement(num) {
            this.count -= num;
        },
        submit() {
            alert(`${this.title}`);
        },
    },
};
</script>

<style></style>
