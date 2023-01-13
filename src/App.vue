<script setup>
// import Layout from '@/layout/Index.vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';
import {ref, watch} from 'vue'

const router = useRouter();
const active = ref('product')
watch(active, (curVal) => {
  location.hash = curVal
})

</script>

<template>
   <header class="main_header">
        <h1>
            巨東科技
        </h1>
    </header>
    <section id="product">
      <h2>產品介紹</h2>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat error accusamus exercitationem. Explicabo temporibus alias voluptas quia quas, ducimus quo ipsa quibusdam quidem, doloribus ut, consequuntur laborum! Corrupti, facere!
    </section>
    <section id="ROHS">
      <h2>產品認證</h2>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores ea animi culpa sit modi at doloribus consequatur natus saepe, rerum necessitatibus pariatur commodi dignissimos soluta dolores. Ducimus, a eaque!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores ea animi culpa sit modi at doloribus consequatur natus saepe, rerum necessitatibus pariatur commodi dignissimos soluta dolores. Ducimus, a eaque!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores ea animi culpa sit modi at doloribus consequatur natus saepe, rerum necessitatibus pariatur commodi dignissimos soluta dolores. Ducimus, a eaque!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores ea animi culpa sit modi at doloribus consequatur natus saepe, rerum necessitatibus pariatur commodi dignissimos soluta dolores. Ducimus, a eaque!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores ea animi culpa sit modi at doloribus consequatur natus saepe, rerum necessitatibus pariatur commodi dignissimos soluta dolores. Ducimus, a eaque!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores ea animi culpa sit modi at doloribus consequatur natus saepe, rerum necessitatibus pariatur commodi dignissimos soluta dolores. Ducimus, a eaque!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores ea animi culpa sit modi at doloribus consequatur natus saepe, rerum necessitatibus pariatur commodi dignissimos soluta dolores. Ducimus, a eaque!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores ea animi culpa sit modi at doloribus consequatur natus saepe, rerum necessitatibus pariatur commodi dignissimos soluta dolores. Ducimus, a eaque!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores ea animi culpa sit modi at doloribus consequatur natus saepe, rerum necessitatibus pariatur commodi dignissimos soluta dolores. Ducimus, a eaque!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores ea animi culpa sit modi at doloribus consequatur natus saepe, rerum necessitatibus pariatur commodi dignissimos soluta dolores. Ducimus, a eaque!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores ea animi culpa sit modi at doloribus consequatur natus saepe, rerum necessitatibus pariatur commodi dignissimos soluta dolores. Ducimus, a eaque!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores ea animi culpa sit modi at doloribus consequatur natus saepe, rerum necessitatibus pariatur commodi dignissimos soluta dolores. Ducimus, a eaque!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores ea animi culpa sit modi at doloribus consequatur natus saepe, rerum necessitatibus pariatur commodi dignissimos soluta dolores. Ducimus, a eaque!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores ea animi culpa sit modi at doloribus consequatur natus saepe, rerum necessitatibus pariatur commodi dignissimos soluta dolores. Ducimus, a eaque!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores ea animi culpa sit modi at doloribus consequatur natus saepe, rerum necessitatibus pariatur commodi dignissimos soluta dolores. Ducimus, a eaque!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores ea animi culpa sit modi at doloribus consequatur natus saepe, rerum necessitatibus pariatur commodi dignissimos soluta dolores. Ducimus, a eaque!
    </section>
    <footer id="contact">
        <p>聯絡我們</p>
        <ul>
          <li>TEL:(02)2358-4770</li>
          <li>FAX:(02)23583909</li>
          <li>MP:0910-109-687</li>
          <li>E-MAIL:vince.shir@msa.hinet.net</li>
          <li>
            Website: <a href="http://www.squliq.com">http://www.squliq.com</a> 
          </li>
        </ul>
    </footer>
    <!-- <div class="pad-hidden"> -->
    <van-tabbar class="pad-hidden"  v-model="active">
        <van-tabbar-item name="product" icon="orders-o">產品</van-tabbar-item>
        <van-tabbar-item name="ROHS" icon="medal-o">產品認證</van-tabbar-item>
        <van-tabbar-item name="contact" icon="phone-o">聯絡我們</van-tabbar-item>
    </van-tabbar>
    <!-- </div> -->
    <van-back-top right="15vw" bottom="10vh" />

</template>


<style lang="scss" >
@import '@/assets/scss/global.scss';
html {
  scroll-behavior: smooth;
}
body {
  padding-bottom: 50px;
}
</style>
<style lang="scss" scoped>
    header.main_header {
        margin: 0;
        background-color: #004f99;
        padding: 8px 16px;
        h1 {
            margin: 0;
            color: white;
            @include rwd(pad) {
                font-size: 48px;
            }
        }

    }
    footer {
      text-align: center;
      padding: 8px 10px;
      background-color: rgba(67,69,64,1.0);
      color: white;
      p {
        font-size: 20px;
      }
      a {
        color: #fff;
        text-decoration: underline;
      }
    }
</style>

