import { createRouter, createWebHistory } from "vue-router";
import computed from "../views/computed.vue";
import watched from "../views/watched.vue";
import Conditionalrendering from "../views/Conditionalrendering.vue";
import forminputbinding from "../views/forminputbinding.vue";
import Tempalterefs from "../views/Tempalterefs.vue";
import prop_emits_slot from "../views/Props_Emits_Slot.vue";
import eventhandling from "../views/eventhandling.vue";
import class_and_style from "../views/class_and_style_binding.vue";
import listrendering from "../views/listrendering.vue";

const routes = [
    {
        path: "/computed",
        name: "computed",
        component: computed,
    },
    {
        path: "/watched",
        name: "watched",
        component: watched,
    },
    {
        path: "/Conditionalrendering",
        name: "Conditionalrendering",
        component: Conditionalrendering,
    },
    {
        path: "/forminputbinding",
        name: "forminputbinding",
        component: forminputbinding,
    },
    {
        path: "/Tempalterefs",
        name: "Tempalterefs",
        component: Tempalterefs,
    },
    {
        path: "/prop_emits_slot",
        name: "prop_emits_slot",
        component: prop_emits_slot,
    },
    {
        path: "/eventhandling",
        name: "eventhandling",
        component: eventhandling,
    },
    {
        path: "/class_and_style",
        name: "class_and_style",
        component: class_and_style,
    },
    {
        path: "/listrendering",
        name: "listrendering",
        component: listrendering,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
