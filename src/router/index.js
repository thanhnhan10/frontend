import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [{
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/books/:id",
        name: "contact.edit",
        component: () =>
            import ("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/books",
        name: "contact.add",
        component: () =>
            import ("@/views/ContactAdd.vue"),
    },
    {
        path: "/authorbook",
        name: "authorbook",
        component: () =>
            import ("@/views/AuthorBook.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () =>
            import ("@/views/NotFound.vue"),
    },
    {
        path: "/author/:id",
        name: "author.edit",
        component: () =>
            import ("@/views/AuthorEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/authors",
        name: "author.add",
        component: () =>
            import ("@/views/AuthorAdd.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});

export default router;