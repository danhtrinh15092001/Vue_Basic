<template>
    <div class="counter">
        <div>{{ counter }}</div>
        <button @click="counter++">Increase</button>
        <input type="text" v-model="someText" />
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            counter: 0,
            someText: "",
        };
    },
    watch: {
        counter(newValue, oldValue) {
            console.log(`Old Value: ${oldValue}`);
            console.log(`New Value: ${newValue}`);
        },
        someText: "updateCounter",
    },
    methods: {
        updateCounter() {
            this.counter++;
            console.log("update");
        },
    },
};
</script>
