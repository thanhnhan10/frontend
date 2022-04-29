<template>
    <div class="page row">
        <div class="col-md-10">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-6">
            <h4>
                Tác giả
            </h4>
            <AuthorList
                v-if="filteredContactsCount > 0"
                :authors="filteredContacts"
                v-model:activeIndex="activeIndex"
                
            />
            <p v-else>Không có tác giả nào.</p>

            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-primary" @click="refreshList()">
                    <i class="fas fa-redo"></i> Làm mới
                </button>

                <button class="btn btn-sm btn-success" @click="goToAddAuthor">
                    <i class="fas fa-plus"></i> Thêm mới
                </button>

                <button
                    class="btn btn-sm btn-danger"
                    @click="removeAllContacts"
                >
                    <i class="fas fa-trash"></i> Xóa tất cả
                </button>
            </div>
        </div>
        <div class="mt-3 col-md-6">
            <div v-if="activeContact">
                <h4>
                    Chi tiết tác giả
                    <i class="fa-thin fa-book"></i>
                </h4>
                <AuthorCard :Author="activeContact" />
                <router-link
                    :to="{
                        name: 'author.edit',
                        params: { id: activeContact.id },
                    }"
                >
                    <span class="mt-2 badge badge-warning">
                        <i class="fas fa-edit"></i> Hiệu chỉnh tác giả</span
                    >
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import AuthorCard from "@/components/AuthorCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import AuthorList from "@/components/AuthorList.vue";
import ContactService from "@/services/author.service";

export default {
    components: {
        AuthorCard,
        InputSearch,
        AuthorList,
    },
    // Đoạn mã xử lý đầy đủ sẽ trình bày bên dưới
    data() {
        return {
            authors: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        //  Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.
        contactStrings() {
            return this.authors.map((Author) => {
                const { name, year, quequan} = Author;
                return [name, year, quequan].join("");
            });
        },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
        filteredContacts() {
            if (!this.searchText) return this.authors;
            return this.authors.filter((_contact, index) =>
                this.contactStrings[index].includes(this.searchText)
            );
        },
        activeContact() {
            if (this.activeIndex < 0) return null;
            return this.authors[this.activeIndex];
        },
        filteredContactsCount() {
            return this.filteredContacts.length;
        },
    },
    methods: {
        async retrieveContacts() {
            try {
                this.authors = await ContactService.getAll();
            } catch (error) {
                console.log(error);
            }
        },

        refreshList() {
            this.retrieveContacts();
            this.activeIndex = -1;
        },

        async removeAllContacts() {
            if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                try {
                    await ContactService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },

        goToAddAuthor() {
            this.$router.push({ name: "author.add" });
        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>

<style scoped>
.page {
    text-align: left;
    max-width: 750px;
}
</style>