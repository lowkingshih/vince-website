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
        <section id="product">
            <div class="container">
                <div class="title">
                    <h2>產品介紹</h2>
                </div>
                <div class="cards">
                    <!-- MCB 1~63A -->
                    <div class="card">
                        <div class="imgWrap">
                            <img src="@/assets/images/MCB1~63A.webp" />
                        </div>
                        <div class="title">
                            <h3>MCB 1~63A</h3>
                        </div>
                        <ul class="list">
                            <li class="item">
                                <a href="/pdf/MCB(1~63A).pdf" target="_blank">產品資訊(點擊下載)</a>
                            </li>
                            <li class="item">
                                <a href="/pdf/綜合目錄.pdf" target="_blank">綜合目錄(點擊下載)</a>
                            </li>
                        </ul>
                    </div>
                    <!-- HLF 80~125A -->
                    <div class="card">
                        <div class="imgWrap">
                            <img src="@/assets/images/HLF_80~125A.webp" />
                        </div>
                        <div class="title">
                            <h3>HLF 80~125A</h3>
                        </div>
                        <ul class="list">
                            <li class="item">
                                <a href="/pdf/綜合目錄.pdf" target="_blank">綜合目錄(點擊下載)</a>
                            </li>
                        </ul>
                    </div>
                    <!-- TIMER -->
                    <div class="card">
                        <div class="imgWrap">
                            <img src="@/assets/images/TIMER.webp" />
                        </div>
                        <div class="title">
                            <h3>TIMER</h3>
                        </div>
                        <ul class="list">
                            <li class="item">
                                <a href="/pdf/TIMER.pdf" target="_blank">產品資訊(點擊下載)</a>
                            </li>
                            <li class="item">
                                <a href="/pdf/綜合目錄.pdf" target="_blank">綜合目錄(點擊下載)</a>
                            </li>
                        </ul>
                    </div>
                    <!-- TRUNKING -->
                    <div class="card">
                        <div class="imgWrap">
                            <img src="@/assets/images/TRUNKING.webp" />
                        </div>
                        <div class="title">
                            <h3>TRUNKING</h3>
                        </div>
                        <ul class="list">
                            <li class="item">
                                <a href="/pdf/TRUNKING.pdf" target="_blank">產品資訊(點擊下載)</a>
                            </li>
                        </ul>
                    </div>
                    <!-- ADD ON BUTTON -->
                    <div class="card">
                        <div class="imgWrap">
                            <img src="@/assets/images/ADD_ON_BLOCK.webp" />
                        </div>
                        <div class="title">
                            <h3>ADD ON BUTTON</h3>
                        </div>
                        <ul class="list">
                            <li class="item">
                                <a href="/pdf/ADD ON BLOCK.pdf" target="_blank">產品資訊(點擊下載)</a>
                            </li>
                            <li class="item">
                                <a href="/pdf/綜合目錄.pdf" target="_blank">綜合目錄(點擊下載)</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section id="ROHS">
            <div class="container">
                <div class="title">
                    <h2>產品認證</h2>
                </div>
                <div class="card">
                    <div class="imgWrap ROHS">
                        <img src="@/assets/images/ROHS.webp" alt="ROHS標章" />
                    </div>
                    <ul class="list">
                        <li class="item">
                            <a href="public/xlsx/ROHS.xlsx" target="_blank">ROHS標章 (點擊下載)</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

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
    <van-tabbar class="w-100 pad-hidden" v-model="active">
        <van-tabbar-item name="product" icon="orders-o">產品</van-tabbar-item>
        <van-tabbar-item name="ROHS" icon="medal-o">產品認證</van-tabbar-item>
        <van-tabbar-item name="contact" icon="phone-o">聯絡我們</van-tabbar-item>
    </van-tabbar>
</template>

<style lang="scss">
@import '@/assets/scss/global.scss';

body {
    // padding-top: 53px;
    padding-bottom: 50px;
}
</style>
<style lang="scss" scoped>
.container {
    padding: 8px 15px;
}
header.main_header {
    // position: fixed;
    // top: 0;
    // left: 0;

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
    height: calc(100vh - 123px);
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
}
footer {
    text-align: center;
    padding: 8px 10px;
    background-color: rgba(67, 69, 64, 1);
    color: white;
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
