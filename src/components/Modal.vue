<template>
    <div class="modal" @click.self="changeColor">
        <h1>Props</h1>
        <h1>{{ header }}</h1>
        <h2 v-for="item in list" :key="item.id" :class="{ color: color === 'color' }">
            {{ item.name }}
        </h2>

        <slot></slot>
        <slot name="links"></slot>
    </div>
</template>

<script>
export default {
    name: "Modal",
    props: { header: String, list: Array, color: String },
    methods: {
        changeColor() {
            this.$emit("hidden");
        },
    },
};
</script>

<style>
.modal {
    background-color: aqua;
}
</style>
