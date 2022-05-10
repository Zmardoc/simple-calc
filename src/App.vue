<template>
  <div>
    <math-input v-model="someValue.expression" />
    <p>
      Aktuální model: {{ someValue.expression }}
    </p>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import MathInput from '@/components/MathInput'

const someValue = ref({ expression: '' })
</script>
