
<template>
    <Form
        @submit="$emit('submit:Author', contactLocal)"
        :validation-schema="contactFormSchema"
    >
         <div class="form-group">
            <label for="name">Tên tác giả</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="contactLocal.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="year">Năm sinh</label>
            <Field
                name="year"
                type="Number"
                class="form-control"
                v-model="contactLocal.year"
            />
            <ErrorMessage name="year" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="quequan">Quê quán</label>
            <Field
                name="quequan"
                type="text"
                class="form-control"
                v-model="contactLocal.quequan"
            />
            <ErrorMessage name="quequan" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="quequan">Tiểu Sử</label>
            <textarea rows="5" cols="20"
            name="tieusu"
                type="text"
                class="form-control"
                v-model="contactLocal.tieusu"
            />
            <ErrorMessage name="tieusu" class="error-feedback" />
        </div>
        

        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button
                v-if="contactLocal.id"
                type="button"
                class="ml-2 btn btn-danger"
                @click="$emit('delete:Author', contactLocal.id)"
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
        Author: { type: Object, required: true }
    },
    data() {
        const contactFormSchema = yup.object().shape({
            name: yup
                .string()
                ,
            year: yup
                .string()
                ,
          quequan: yup.string(),
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            //  để liên kết với các input trên form
            contactLocal: this.Author,
            contactFormSchema,
        };
    },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>