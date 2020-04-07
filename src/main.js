import add from './js/math.js'
console.log(add(1,2))

// 引入css样式
require('./css/index.css')

// 引入less样式
require('./css/main.less')
document.writeln('<p>李银河</p>')

// 配置vue
import Vue from 'vue'
import App from './vue/App'
new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
})