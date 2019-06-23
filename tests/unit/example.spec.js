import { shallowMount } from '@vue/test-utils'
// import Vue from 'vue'
import HelloWorld from '@/pages/HelloWorld.vue'
import TextShow from '@/components/TextShow.vue'

// function getRenderedText(Component, propsData) {
//   const Constructor = Vue.extend(Component);
//   const vm = new Constructor({ propsData: propsData }).$mount();
//   return vm.$el.textContent;
// }

// describe('TextShow', () => {
//   it('TextShow component with different props', () => {
//     expect(getRenderedText(TextShow,{
//       message: 'Hello'
//     })).toBe('Hello')

//     expect(getRenderedText(TextShow,{
//       message: '123'
//     })).toBe('123')
//   })
// })

/**
 * 组件测试
 */
describe('TextShow.vue', () => {
  it('TextShow component with different props', () => {
    const message = 'new message'
    const wrapper = shallowMount(TextShow, {
      propsData: { message }
    })
    expect(wrapper.text()).toMatch(message)
  })
})

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

/**
 * 公共方法测试
 */