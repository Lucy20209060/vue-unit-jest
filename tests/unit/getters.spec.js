import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Getters from '../../src/pages/Getters'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Getters', () => {
    let getters
    let store

    beforeEach(() => {
        getters = {
            getNumber: () => 2
        }
      
        store = new Vuex.Store({
            getters
        })
    })
    it('Renders "store.getters.getNumber" in p tag', () => {
        const wrapper = shallowMount(Getters, { store, localVue })
        const p = wrapper.find('p')
        expect(p.text()).toBe(getters.getNumber().toString())
    })
})