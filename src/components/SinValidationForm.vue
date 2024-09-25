<script setup lang="ts">
import {ref} from 'vue';
import {sinValidator} from '../libs/sin_validator.ts';

const inputDigits = ref<string>('')
const isSubmitted = ref<boolean>(false)
const isValid = ref<boolean>(false)

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  let input = target.value.replace(/\D/g, '');
  if (input.length >= 9) {
    input = input.slice(0, 9)
  }
  input = input.replace(/(\d{3})(?=\d)/g, '$1 ');
  inputDigits.value = input
}

const handleSubmit = (_: Event) => {
  isSubmitted.value = true
  isValid.value = sinValidator(inputDigits.value)
  console.debug(`'${inputDigits.value}' is ${isValid.value}`)
}
</script>

<template>
  <div class="form-control w-full max-w-xs">
    <div class="form-control-input">
      <div class="label">
        <span class="label-text">Social insurance number</span>
      </div>
      <div class="input input-bordered font-mono flex items-center gap-2"
           :class="{'input-success': isSubmitted && isValid, 'input-error': isSubmitted && !isValid}">
        <input
            @input="handleInput"
            v-model="inputDigits"
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
            placeholder="••• ••• •••"
            class="sin-input-digit"
        />
        <svg v-show="isSubmitted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
             fill="currentColor"
             class="size-4"
             :class="{'fill-green-500': isValid, 'fill-red-500': !isValid}">
          <path v-if="isValid" fill-rule="evenodd" clip-rule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"/>
          <path v-if="!isValid"
                d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"/>
        </svg>
      </div>
    </div>
    <div class="form-control-btn mt-3">
      <button @click.prevent="handleSubmit" class="btn w-full btn-primary">Validate</button>
    </div>
  </div>
</template>

<style scoped>
.sin-input-digit {
  letter-spacing: .25rem;
  max-width: 16rem;
}
</style>
