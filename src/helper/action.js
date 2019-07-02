import tab from '../components/tab.vue'
import Vue from 'vue'
function createtab(data) {
    if(data.data.page=='.content'){
        data.data['showconfrim']=true
    }
    var constructor = Vue.extend(tab)
    var tos = new constructor({
        propsData: data
    })
    tos.$mount()
    console.log(data)
    document.querySelector(data.data.page).appendChild(tos.$el)
    return tos
}
let current
export default {
    install(Vue, options) {
        Vue.prototype.$tab = function (params) {
            
            current = createtab({data:params})
        }
    }
}