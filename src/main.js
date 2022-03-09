import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import {
    Container,
    Aside,
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Header,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Main,
    Table,
    TableColumn,
    Input,
    Button,

} from 'element-ui'


Vue.component(Container.name,Container)
Vue.component(Aside.name,Aside)
Vue.component(Menu.name,Menu)
Vue.component(Submenu.name,Submenu)
Vue.component(MenuItemGroup.name,MenuItemGroup)
Vue.component(MenuItem.name,MenuItem)
Vue.component(Header.name,Header)
Vue.component(Dropdown.name,Dropdown)
Vue.component(DropdownMenu.name,DropdownMenu)
Vue.component(DropdownItem.name,DropdownItem)
Vue.component(Main.name,Main)
Vue.component(Table.name,Table)
Vue.component(TableColumn.name,TableColumn)
Vue.component(Input.name,Input)
Vue.component(Button.name,Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    store,
    router

}).$mount('#app')
