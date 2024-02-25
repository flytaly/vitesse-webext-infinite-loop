<script setup lang="ts">
import { storageData, storageDemo } from '~/logic/storage'

async function setStorage() {
  storageData.value.timestamp = Date.now()
  await Promise.resolve()
  storageData.value.timestamp = Date.now()
}
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <img src="/assets/icon.svg" class="icon-btn mx-2 text-2xl" alt="extension icon">
    <div>Options</div>
    <SharedSubtitle />

    <input v-model="storageDemo" class="border border-gray-400 rounded px-2 py-1 mt-2">

    <div class="mt-2">
      {{ storageData.timestamp }}
    </div>

    <button class="block mx-auto ring-1 ring-black p-2" @click="setStorage">
      Set timestamp
    </button>

    <div class="mt-4">
      Powered by Vite <pixelarticons-zap class="align-middle inline-block" />
    </div>
  </main>
</template>
