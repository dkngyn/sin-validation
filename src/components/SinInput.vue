<script setup lang="ts">

</script>

<template>
  <div class="form-control w-full max-w-xs">
    <div class="form-control-input">
      <div class="label">
        <span class="label-text">Social insurance number</span>
      </div>
      <div class="input input-bordered font-mono flex items-center gap-2">
        <input
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
            placeholder="••• ••• •••"
            class="sin-input-digit"
        />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70">
          <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"/>
        </svg>
      </div>
    </div>
    <div class="form-control-btn mt-3">
      <button class="btn w-full btn-primary">Validate</button>
    </div>
  </div>
</template>

<style scoped>
.sin-input-digit {
  letter-spacing: .5rem;
  max-width: 16rem;
}

</style>
