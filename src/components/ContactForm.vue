

<template>
    <Form
        @submit="$emit('submit:Book', contactLocal)"
        :validation-schema="contactFormSchema"
    >
        <div class="form-group">
            <label for="name">Tên sách</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="contactLocal.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="date">Ngày xuât bản</label>
            <Field
                name="date"
                type="text"
                class="form-control"
                v-model="contactLocal.date"
            />
            <ErrorMessage name="date" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="theloai">Thể loại sách</label>
            <Field
                name="theloai"
                type="text"
                class="form-control"
                v-model="contactLocal.theloai"
            />
            <ErrorMessage name="theloai" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="tacgia">Tác giả</label>
            <Field
                name="tacgia"
                type="text"
                class="form-control"
                v-model="contactLocal.tacgia"
            />
            <!-- <select 
                id="tacgia"
                class="form-control">
                <option>{{contactLocal.tacgia.name}}</option>
            </select> -->
            <ErrorMessage name="tacgia" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="quequan">Nội Dung Chính</label>
            <textarea rows="5" cols="20"
            name="noidung"
                type="text"
                class="form-control"
                v-model="contactLocal.noidung"
            />
            <ErrorMessage name="noidung" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button
                v-if="contactLocal.id"
                type="button"
                class="ml-2 btn btn-danger"
                @click="$emit('delete:Book', contactLocal.id)"
            >
                Xóa
            </button>
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:contact", "delete:contact"],
    props: {
        Book: { type: Object, required: true }
    },
    data() {
        const contactFormSchema = yup.object().shape({
            name: yup
                .string()
                ,
            date: yup
                .string()
                ,
          theloai: yup.string(),
            tacgia: yup
                .string(),
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            //  để liên kết với các input trên form
            contactLocal: this.Book,
            contactFormSchema,
        };
    },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>