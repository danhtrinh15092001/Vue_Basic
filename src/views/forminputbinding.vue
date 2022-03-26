<template>
    <br />
    <form @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="">Email</label>
            <input type="email" class="form-control" v-model="email" />
        </div>
        {{ email }}
        <br />
        <div class="form-group">
            <label for="">Password</label>
            <input type="password" class="form-control" v-model="password" />
        </div>
        {{ password }}
        <br />
        <button>Login</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        handleSubmit() {
            const data = {
                email: this.email,
                password: this.password,
            };
            console.log(data);
        },
    },
};
</script>

<style></style>
