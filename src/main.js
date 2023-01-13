import { createApp } from 'vue'
import 'normalize.css'
import App from './App.vue'
import router from "./router";
/* vant */
// 1. 引入你需要的组件
import { Button, Icon, BackTop, Col, Row,  Tabbar, TabbarItem } from 'vant';
import 'vant/lib/index.css';
import '@vant/touch-emulator';


const app = createApp(App);
app.use(router);

// 2. 引入组件样式
app.use(Icon);
app.use(Button); 
app.use(BackTop); 
app.use(Col); 
app.use(Row); 
app.use(Tabbar);
app.use(TabbarItem);

app.mount('#app');