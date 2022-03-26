<template>
    <h1>{{ title }}</h1>
    <input type="text" ref="name" />
    <button @click="handleClick">Click Me</button>
</template>

<script>
export default {
    data() {
        return {
            title: "My Vue",
        };
    },
    methods: {
        handleClick() {
            console.log(this.$refs.name);
            this.$refs.name.classList.add("active");
        },
    },
};
</script>

<style>
.active {
    background-color: aquamarine;
}
</style>
