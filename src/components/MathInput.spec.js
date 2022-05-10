import { shallowMount } from '@vue/test-utils'
import MathInput from '@/components/MathInput'

describe('MathInput', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(MathInput, {
      propsData: {
        modelValue: '',
      },
    })
  })

  it('test props', async () => {
    await wrapper.setProps({ modelValue: '3b' })
    expect(wrapper.vm.input).toBe('3b')
  })
  it('test parse function', () => {
    const data = [
      {
        input: '(5m+2k)-0.5k',
        result: {
          error: false,
          value: '5 001 500',
        },
      },
      {
        input: '(0.5k + 80m)/ 3',
        result: {
          error: false,
          value: '26 666 833.333',
        },
      },
      {
        input: '',
        result: {
          error: true,
          value: '',
        },
      },
      {
        input: '(0.5k + 80m)/',
        result: {
          error: true,
          value: '(0.5k + 80m)/',
        },
      },
      {
        input: '40b',
        result: {
          error: false,
          value: '40 000 000 000',
        },
      },
      {
        input: '0.3(20 + 7)',
        result: {
          error: false,
          value: '8.1',
        },
      },
      {
        input: 'ahoj',
        result: {
          error: true,
          value: 'ahoj',
        },
      },
    ]
    for (const testSuite of data) {
      wrapper.vm.input = testSuite.input
      wrapper.vm.compute()

      expect(wrapper.vm.input).toBe(testSuite.result.value)
      expect(!!wrapper.vm.error).toBe(testSuite.result.error)
      expect(wrapper.vm.lastInput).toBe(testSuite.input)
    }
  })
})
