import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// 确保在 element-plus 样式之后导入自定义样式
import './components/Home/Home.css'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
