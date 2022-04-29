<script>
export default {
    props: {
        authors: { type: Array, default: [] },
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
            v-for="(Author, index) in authors"
            :key="Author.id"
            :class="{ active: index === selectedIndex }"
            @click="select(index)"
        >
            {{ Author.name }}
        </li>
    </ul>
</template>