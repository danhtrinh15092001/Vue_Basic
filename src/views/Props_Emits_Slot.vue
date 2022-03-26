<template>
    <h1>{{ title }}</h1>
    <div v-if="show">
        <Modal :header="header" :list="list" color="color" @hidden="showModal">
            <h1>Slot</h1>
            <template v-slot:links>
                <a href="#">Sign up now</a>
                <a href="#">More info</a>
            </template>

            <h1>Coach</h1>
            <p>Carlo Ancelotti</p>
        </Modal>
    </div>
    <button @click="showModal">Click Me</button>
</template>

<script>
import Modal from "../components/Modal.vue";
export default {
    components: { Modal },
    data() {
        return {
            title: "My Vue",
            header: "Real Madrid",
            list: [
                { id: 1, name: "Luka Modric", active: true },
                { id: 2, name: "Karim Benzema", active: true },
                { id: 3, name: "Isco", active: false },
                { id: 4, name: "David Alaba", active: true },
                { id: 5, name: "Macerlo", active: false },
            ],
            show: true,
        };
    },
    methods: {
        showModal() {
            this.show = !this.show;
        },
    },
};
</script>

<style>
.color {
    color: red;
}
</style>
