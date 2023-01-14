<script setup>
// import Layout from '@/layout/Index.vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';

const router = useRouter();
const active = ref('product');
watch(active, (curVal) => {
    location.hash = curVal;
});
</script>

<template>
    <header class="main_header">
        <h1>巨東科技</h1>
    </header>
    <div class="main_container">
        <div class="view_container">
            <RouterView />
        </div>
        <footer id="contact">
            <p>聯絡我們</p>
            <ul>
                <li>TEL:(02)2358-4770</li>
                <li>FAX:(02)23583909</li>
                <li>MP:0910-109-687</li>
                <li>E-MAIL:vince.shir@msa.hinet.net</li>
                <li>Website: <a href="http://www.squliq.com">http://www.squliq.com</a></li>
            </ul>
        </footer>

        <van-back-top />
        <!-- <div class="pad-hidden"> -->
    </div>
    <van-tabbar class="pad-hidden" v-model="active">
        <van-tabbar-item name="product" icon="orders-o">產品</van-tabbar-item>
        <van-tabbar-item name="ROHS" icon="medal-o">產品認證</van-tabbar-item>
        <van-tabbar-item name="contact" icon="phone-o">聯絡我們</van-tabbar-item>
    </van-tabbar>
</template>

<style lang="scss">
@import '@/assets/scss/global.scss';

body {
    padding-bottom: 50px;
    @include rwd(pad) {
        padding: 0;
    }
}
</style>
<style lang="scss">
.container {
    padding: 8px 15px;
}
header.main_header {
    width: calc(100vw - 35px);
    margin: 0;
    padding: 8px 16px;

    background-color: #004f99;
    h1 {
        margin: 0;
        color: white;
        @include rwd(pad) {
            font-size: 48px;
        }
    }
}
.main_container {
    display: flex;
    flex-direction: column;

    height: calc(100vh - 123px);
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    @include rwd(pad) {
        height: calc(100vh - 71.2px);
    }
}
footer {
    color: white;
    background-color: rgba(67, 69, 64, 1);
    text-align: center;

    margin-top: auto;
    padding: 8px 10px;
    p {
        font-size: 24px;
    }
    a {
        color: #fff;
        text-decoration: underline;
    }
}
section {
    padding: 16px 0;
    h2 {
        text-align: center;
    }
}
.card {
    &:not(:last-child) {
        margin-bottom: 20px;
    }
    .title {
        h3 {
            text-align: center;
        }
    }
    .imgWrap {
        display: flex;
        justify-content: center;

        overflow: hidden;

        margin: 0 auto;
        width: 80%;
        height: 300px;
        &.ROHS {
            height: 200px;
            margin-top: -30px;
            @include rwd(pad) {
                margin-top: -20px;
            }
        }
        img {
            display: block;
            width: 100%;
            object-fit: contain;
            transition: width 0.8s;
            &:hover {
                width: 110%;
            }
        }
    }
    .list {
        display: flex;
        flex-direction: column;
        .item {
            display: flex;
            justify-content: center;
            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }
    }
}
</style>
