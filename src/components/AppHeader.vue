<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand">Ứng dụng quản lý sách</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'contactbook' }" class="nav-link">
                    Sách
                    <i class="fal fa-book"></i>
                </router-link>
            </li>
            
            <li class="nav-item">
                <router-link :to="{ name: 'authorbook' }" class="nav-link">
                    Tác giả
                </router-link>
            </li>
        </div>
    </nav>
</template>