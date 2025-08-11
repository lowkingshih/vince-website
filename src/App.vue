<script setup>
import { computed, onMounted, ref } from 'vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';

const route = useRoute();
// 監測下方按鍵的高度
const viewContainerHeight = computed(() => {
    console.log('path.value:', route.path);
    if (route.path === '/') return '102.8px';
    else return '52.8px';
});

// 100vh safari 問題
const viewContainerRef = ref(null);
onMounted(() => {
    function safariHacks() {
        let windowsVH = window.innerHeight / 100;
        viewContainerRef.value.style.setProperty('--vh', windowsVH + 'px');

        window.addEventListener('resize', function () {
            let windowsVH = window.innerHeight / 100;
            viewContainerRef.value.style.setProperty('--vh', windowsVH + 'px');
        });
    }
    safariHacks();
});
</script>

<template>
    <header class="main_header">
        <h1>巨東科技</h1>
    </header>
    <div ref="viewContainerRef" class="main_container">
        <div class="view_container">
            <RouterView />
        </div>
        <footer id="contact">
            <p>聯絡我們</p>
            <ul>
                <li>TEL: (03)3978-525</li>
                <li>FAX: (03)3978-526</li>
                <li>MP: 0910-109-687</li>
                <li>E-MAIL: vince.shir@msa.hinet.net</li>
                <li>Website: <a href="http://www.squliq.com">http://www.squliq.com</a></li>
            </ul>
        </footer>

        <van-back-top />
        <!-- <div class="pad-hidden"> -->
    </div>
</template>

<style lang="scss">
@import '@/assets/scss/global.scss';

html {
    overflow: hidden;
}
body {
    padding-top: 52.8px;
    padding-bottom: 50px;

    @include rwd(pad) {
        padding-top: 71.19px;
    }
}
</style>
<style lang="scss">
.container {
    padding: 8px 15px;
}
header.main_header {
    // width: calc(100vw - 34px);
    width: 100%;
    margin: 0;
    padding: 8px 16px;

    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;

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

    // 減去 body padding
    height: calc(var(--vh, 1vh) * 100 - v-bind(viewContainerHeight));
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    @include rwd(pad) {
        height: calc(var(--vh, 1vh) * 100 - 71.2px);
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
    padding-bottom: 16px;
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
