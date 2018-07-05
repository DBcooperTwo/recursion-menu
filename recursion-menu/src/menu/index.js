import menua from './menu'
import menus from './menus'
export default {
    install(Vue){
        Vue.component('menua',menua)
        Vue.component('menus',menus)
    }
};