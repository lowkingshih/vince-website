<template>
    <section id="product">
        <div class="container">
            <div class="title">
                <h2>產品</h2>
            </div>
            <div class="photo_wall">
                <!-- MCB 1~63A -->
                <RouterLink to="/MCB/product" class="img_wrap">
                    <img src="@/assets/images/MCB1~63A.webp" alt="MCB1~63A" />
                    <div class="content">MCB 1~63A</div>
                </RouterLink>
                <!-- HLF 80~125A -->
                <RouterLink to="/HLF/product" class="img_wrap"
                    ><img src="@/assets/images/HLF_80~125A.webp" alt="HLF_80~125A" />
                    <div class="content">HLF 80~125A</div></RouterLink
                >
                <!-- TIMER -->
                <RouterLink to="/Timer/product" class="img_wrap"
                    ><img src="@/assets/images/TIMER.webp" alt="Timer" />
                    <div class="content">TIMER</div></RouterLink
                >
                <!-- TRUNCKING -->
                <RouterLink to="/Trunking/product" class="img_wrap"
                    ><img src="@/assets/images/TRUNKING.webp" alt="TRUNCKING" />
                    <div class="content">TRUNCKING</div></RouterLink
                >
                <!-- ADD ON BUTTON -->
                <RouterLink to="/AddOnBlock/product" class="img_wrap"
                    ><img src="@/assets/images/ADD_ON_BLOCK.webp" alt="" />
                    <div class="content">ADD ON BLOCK</div></RouterLink
                >
            </div>
        </div>
    </section>
    <section id="ROHS">
        <div class="container">
            <div class="title">
                <h2>產品認證</h2>
            </div>
            <!-- ROSH -->
            <div class="rohs_photo">
                <RouterLink to="/ROHS/certification" class="img_wrap"
                    ><img src="@/assets/images/ROHS.webp" alt="ROSH" />
                </RouterLink>
            </div>
        </div>
    </section>
    <van-tabbar class="pad-hidden" v-model="active">
        <van-tabbar-item name="product" icon="orders-o">產品</van-tabbar-item>
        <van-tabbar-item name="ROHS" icon="medal-o">產品認證</van-tabbar-item>
        <van-tabbar-item name="contact" icon="phone-o">聯絡我們</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const active = ref('product');
const offsetHs = {};
const hashToTop = () => {};
watch(active, (curVal) => {
    location.hash = curVal;
});

onUnmounted(() => {
    location.hash = '';
    // window.scrollTo(0, 0);
});
</script>
<style lang="scss" scoped>
.photo_wall {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    max-width: 960px;
    margin: 0 auto;

    @include rwd(pad) {
        justify-content: space-around;
    }

    .img_wrap {
        width: 49%;
        box-sizing: border-box;
        margin-bottom: 8px;
        overflow: hidden;

        position: relative;

        @include rwd(pad) {
            width: 18.5%;
        }

        img {
            display: block;
            object-fit: contain;
            transition: width 0.7s;
            width: 100%;

            &:hover {
                width: 110%;
            }
        }
        .content {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;

            display: flex;
            justify-content: center;
            align-items: center;

            width: 100%;
            height: 100%;

            color: #fff;
            font-weight: 700;
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
}
.rohs_photo {
    @include rwd(pad) {
        width: 960px;
        margin: 0 auto;
    }
    .img_wrap {
        display: block;
        margin: 0 auto;
        width: 100%;
        max-width: 400px;
        overflow: hidden;

        img {
            display: block;
            object-fit: contain;
            transition: width 0.7s;
            width: 100%;
        }
        .content {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;

            display: flex;
            justify-content: center;
            align-items: center;

            width: 100%;
            height: 100%;

            color: #fff;
            font-weight: 700;
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
}
</style>
