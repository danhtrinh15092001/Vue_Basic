<template>
    <header>
        <router-link :to="{ name: 'computed' }">Computed vs List render</router-link>
        <router-link :to="{ name: 'watched' }">Watched</router-link>
        <router-link :to="{ name: 'Conditionalrendering' }">Conditionalrendering</router-link>
        <router-link :to="{ name: 'forminputbinding' }">forminputbinding</router-link>
        <router-link :to="{ name: 'Tempalterefs' }">Tempalterefs</router-link>
        <router-link :to="{ name: 'prop_emits_slot' }">prop_emits_slot</router-link>
        <router-link :to="{ name: 'eventhandling' }">eventhandling</router-link>
        <router-link :to="{ name: 'class_and_style' }">class_and_style</router-link>
        <router-link :to="{ name: 'listrendering' }">listrendering</router-link>
    </header>
    <main>
        <router-view />
    </main>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

header {
}

a {
    margin-right: 10px;
    font-weight: 600;
}
</style>
