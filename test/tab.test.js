const expect = chai.expect;
import Vue from 'vue'
import tab from './src/components/tab.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('tab', () => {
    it('存在.', () => {
        expect(tab).to.be.ok
    })
    it('可以设置page.', () => {
        const Constructor = Vue.extend(tab)
        const vm = new Constructor({
            propsData: {
               0:'haha'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('.head input')
        expect(useElement.value).to.equal('haha')
        vm.$destroy()
    })
    
})