<script setup>
import { computed } from 'vue'
import { useGetDataStore } from '../stores/counter.js'
import TaskItem from '../components/TaskItem.vue'
const store = useGetDataStore()
let dataAll = computed(() => {
  return store.data
})
console.log(dataAll)
</script>
<template>
  <TaskItem
    v-for="item in dataAll"
    :key="item.id"
    :content="item.content"
    :id="item.id"
    :done="item.completed_at"
  />
</template>
