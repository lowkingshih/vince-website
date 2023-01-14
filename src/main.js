import { createApp } from 'vue';
import 'normalize.css';
import App from './App.vue';
import router from './router';
/* vant */
// 1. 引入你需要的组件
import { Button, Icon, BackTop, Col, Row, Tabbar, TabbarItem, NavBar } from 'vant';
import 'vant/lib/index.css';
import '@vant/touch-emulator';

// global component
import BackNav from '@/components/BackNav.vue';

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
app.use(NavBar);

// global component
app.component('BackNav', BackNav);

app.mount('#app');
