<template>
  <div class="math-input">
    <label for="mathInput">Výraz: </label>
    <input v-model="input" name="mathInput" @blur="compute" @input="() => emitInput(input)" />
    <p>
      Poslední zadaný: {{ lastInput }}
    </p>
    <p v-if="error">
      Chyba ve výrazu: {{ error }}
    </p>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { evaluate } from 'mathjs'
import { prepareExpression, formatNumber } from '@/utils/formatter'
import { watch } from '@vue/runtime-core'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

const input = ref(props.modelValue)
const lastInput = ref('')
const error = ref(null)
const emit = defineEmits(['update:modelValue'])

watch(
  () => props.modelValue,
  async newVal => {
    input.value = newVal
  },
)

const emitInput = value => {
  emit('update:modelValue', value)
}

const compute = () => {
  lastInput.value = input.value || ''

  if (!input.value) {
    error.value = 'Nezadali jste výraz'
    return
  }

  error.value = null
  const expression = prepareExpression(input.value)

  try {
    const result = evaluate(expression)
    input.value = formatNumber(result)
    emitInput(input.value)
  } catch (e) {
    error.value = e
  }
}
</script>

<style  scoped>
.math-input input {
  padding: 0.5rem;
}
</style>