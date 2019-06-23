import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Actions from '../../src/pages/Actions'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Actions', () => {
    let actions
    let store

    beforeEach(() => {
        actions = {
            addFun: jest.fn()
        }
        store = new Vuex.Store({
            state: {},
            actions
        })
    })
    it('calls store action "addFun" when button is clicked', () => {
        const wrapper = shallowMount(Actions, { store, localVue })
        const button = wrapper.find('button')
        button.trigger('click')
        expect(actions.addFun).toHaveBeenCalled()
    })
})