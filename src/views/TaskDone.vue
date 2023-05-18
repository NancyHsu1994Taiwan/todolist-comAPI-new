<script setup>
import { useGetDataStore } from '../stores/counter.js'
import TaskItem from '../components/TaskItem.vue'
const store = useGetDataStore()
let dataDone = store.data.filter((item) => {
  return item.completed_at !== null
})
</script>
<template>
  <TaskItem
    v-for="item in dataDone"
    :key="item.id"
    :content="item.content"
    :id="item.id"
    :done="item.completed_at"
  />
</template>
