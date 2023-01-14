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
                <!-- TRUNKING -->
                <RouterLink to="/Trunking/product" class="img_wrap"
                    ><img src="@/assets/images/TRUNKING.webp" alt="TRUNKING" />
                    <div class="content">TRUNKING</div></RouterLink
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
            <!-- <div class="card">
                <div class="imgWrap ROHS">
                    <img src="@/assets/images/ROHS.webp" alt="ROHS標章" />
                </div>
                <ul class="list">
                    <li class="item">
                        <a href="/xlsx/ROHS.xlsx" target="_blank">ROHS標章 (點擊下載)</a>
                    </li>
                </ul>
            </div> -->
        </div>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
<style lang="scss" scoped>
.photo_wall {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .img_wrap {
        width: 49%;
        box-sizing: border-box;
        margin-bottom: 8px;
        overflow: hidden;

        position: relative;

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
    .img_wrap {
        width: 100%;
        position: relative;
        overflow: hidden;

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
</style>
