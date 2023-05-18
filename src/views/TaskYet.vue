<script setup>
import { computed } from 'vue'
import { useGetDataStore } from '../stores/counter.js'
import TaskItem from '../components/TaskItem.vue'
const store = useGetDataStore()
let dataYet = computed(() => {
  return store.data.filter((item) => {
    return item.completed_at === null
  })
})
</script>

<template>
  <TaskItem
    v-for="item in dataYet"
    :key="item.id"
    :content="item.content"
    :id="item.id"
    :done="item.completed_at"
  />
</template>
