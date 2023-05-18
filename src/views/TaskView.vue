<script setup>
import { onMounted, computed } from 'vue'
import NavItem from '../components/NavItem.vue'
import InputItem from '../components/InputItem.vue'
import TasklistItem from '../components/TasklistItem.vue'
import EmptyItem from '../components/EmptyItem.vue'
import { useGetDataStore } from '../stores/counter.js'
const store = useGetDataStore()

let data = computed(() => {
  return store.data
})
let resMsg = computed(() => {
  return store.resMsg
})

onMounted(() => {
  store.getData()
})
console.log(resMsg)
</script>
<template>
  <div class="w-full h-screen">
    <NavItem class="w-full mb-10" />
    <div class="bg-slate-400 p-2 rounded w-[40%] mx-auto my-auto" v-if="resMsg === 200">
      <InputItem class="mb-4" />
      <TasklistItem v-if="data.length !== 0" />
      <EmptyItem v-if="data.length === 0" />
    </div>
  </div>
</template>
