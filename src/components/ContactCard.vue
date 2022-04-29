<script>
export default {
    props: {
        Book: { type: Object, required: true },
    },
};
</script>

<template>
    <div>
        <div class="p-1">
            <strong>Tên sách:</strong>
            {{ Book.name }}
        </div>
        <div class="p-1">
            <strong>Ngày xuất bản:</strong>
            {{ Book.date }}
        </div>
        <div class="p-1">
            <strong>Thể loại:</strong>
            {{ Book.theloai }}
        </div>
        <div class="p-1">
            <strong>Tác giả:</strong>
            <!-- {{ Book.tacgia.name}} -->
            {{ Book.tacgia}}
        </div>
        <div class="p-1">
            <strong>Nội Dung Chính:</strong>
            {{ Book.noidung }}
        </div>
    </div>
</template>