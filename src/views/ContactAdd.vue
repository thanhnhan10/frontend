<template>
    <div v-if="Book" class="page">
        <h4>Thêm Sách</h4>
        <ContactForm
            :Book="Book"
            @submit:Book="createContact"
        />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            Book: {
                name: "",
                date: "",
                theloai: "",
                tacgia: ""
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