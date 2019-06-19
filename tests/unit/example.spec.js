import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import HelloWorld from '@/pages/HelloWorld.vue'
import Text from '@/components/text'

function getRenderedText(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({ propsData: propsData }).$mount();
  return vm.$el.textContent;
}

// describe('Text', () => {
//   it('Text component with different props', () => {
//     expect(getRenderedText(Text,{
//       message: 'Hello'
//     })).toBe('Hello')

//     expect(getRenderedText(Text,{
//       message: '123'
//     })).toBe('123')
//   })
// })

/**
 * 组件测试
 */
describe('Text.vue', () => {
  it('Text component with different props', () => {
    const message = 'new message'
    const wrapper = shallowMount(Text, {
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