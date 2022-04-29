<template>
    <div v-if="Author" class="page">
        <h4>Hiệu chỉnh Sách</h4>
        <AuthorForm
            :Author="Author"
            @submit:Author="updateContact"
            @delete:Author="deleteContact"
        />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import AuthorForm from "@/components/AuthorForm.vue";
import ContactService from "@/services/author.service";

export default {
    components: {
        AuthorForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
           Author: null,
            message: "",
        };
    },
    methods: {
        async getAuthor(id) {
            try {
                this.Author = await ContactService.get(id);
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },

        async updateContact(data) {
            try {
                await ContactService.update(this.Author.id, data);
                this.message = "Liên hệ được cập nhật thành công.";
            } catch (error) {
                console.log(error);
            }
        },

        async deleteContact() {
            if (confirm("Bạn muốn xóa Liên hệ này?")) {
                try {
                    await ContactService.delete(this.Author.id);
                    this.$router.push({ name: "authorbook" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getAuthor(this.id);
        this.message = "";
    },
};
</script>