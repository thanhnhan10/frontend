<script>
export default {
    props: {
        books: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    computed: {
        selectedIndex() {
            return this.activeIndex;
        },
    },
    methods: {
        select(index) {
            this.$emit("update:activeIndex", index);
        },
    },
};
</script>

<template>
    <ul class="list-group">
        <li
            class="list-group-item"
            v-for="(Book, index) in books"
            :key="Book.id"
            :class="{ active: index === selectedIndex }"
            @click="select(index)"
        >
            {{ Book.name }}
        </li>
    </ul>
</template>