<template>
    <h1 class="vueStyle">Class and Style Bindings</h1>
    <h1 :style="{ color: colorName }">Style Bindings</h1>
    <h1 :class="{ display: show }">Class with Object</h1>
    <button @click="showDisplay">Click me!</button>
    <h1 :class="[checkDisplay ? d : v]">Class with Array</h1>
    <button @click="handleClick">Click</button>
</template>

<script>
export default {
    name: "class_style",
    data() {
        return {
            colorName: "blue",
            show: true,
            d: "display",
            v: "vueStyle",
            checkDisplay: false,
        };
    },
    methods: {
        handleClick() {
            this.checkDisplay = !this.checkDisplay;
        },
        showDisplay() {
            this.show = !this.show;
        },
    },
};
</script>

<style>
.vueStyle {
    color: orange;
}

.display {
    background-color: peru;
    padding: 5px;
}
</style>
