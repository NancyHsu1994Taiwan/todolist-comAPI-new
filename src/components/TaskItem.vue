<script setup>
import request from '../apis/request'
import { useGetDataStore } from '../stores/counter.js'
const store = useGetDataStore()
const props = defineProps({
  content: {
    required: true,
    type: String
  },
  id: {
    required: true,
    type: String
  },
  done: {
    required: true
  }
})
</script>
<template>
  <label for="taskContent"></label>
  <input type="checkbox" name="" id="" class="hidden" @click="switchStatus" />
  <img
    :src="props.done === null ? 'https://imgur.com/kVUZ81V' : 'https://imgur.com/m7ByQmP'"
    alt=""
  />
  <input type="text" id="taskContent" class="w-full h-[20px] mr-4" :value="props.content" />
</template>
