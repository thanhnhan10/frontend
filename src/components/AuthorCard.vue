<script>
export default {
    props: {
        Author: { type: Object, required: true },
    },
};
</script>

<template>
    <div>
        <div class="p-1">
            <strong>Tên tác giả:</strong>
            {{ Author.name }}
        </div>
        <div class="p-1">
            <strong>Năm sinh:</strong>
            {{ Author.year}}
        </div>
        <div class="p-1">
            <strong>Quê quán:</strong>
            {{ Author.quequan }}
        </div>
        <div class="p-1">
            <strong>Tiểu sử:</strong>
            {{ Author.tieusu }}
        </div>
    </div>
</template>