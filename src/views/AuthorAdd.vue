<template>
    <div v-if="Author" class="page">
        <h4>Thêm tác giả</h4>
        <AuthorForm
            :Author="Author"
            @submit:Author="createContact"
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
    data() {
        return {
            Author: {
                name: "",
                 year: "",
                quequan: ""
            },
            message: "",
        };
    },
    methods: {
        async createContact(data) {
            try {
                await ContactService.create(data);
                this.message = "Liên hệ được tạo thành công.";
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>