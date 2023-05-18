<script setup>
import { ref } from 'vue'
import { useGetDataStore } from '../stores/counter.js'
import request from '../apis/request'
const store = useGetDataStore()
let text = ref('')

const addTask = () => {
  request
    .post(
      '/todos',
      {
        todo: {
          content: text.value
        }
      },
      store.userData.config
    )
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<template>
  <div class="w-full relative">
    <input type="text" class="w-full rounded p-2" v-model="text" />
    <button class="absolute rounded text-lg top-1 right-2 text-white bg-black" @click="addTask">
      +
    </button>
  </div>
</template>
