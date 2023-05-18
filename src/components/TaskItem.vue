<script setup>
import request from '../apis/request'
// import { ref } from 'vue'
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
// let newContent = ref('')
const switchSatus = () => {
  request.patch(`/todos/${props.id}/toggle`, '', store.userData.config).then((res) => {
    console.log(res)
    store.getData()
  })
}

const deleteTask = () => {
  request
    .delete(`/todos/${props.id}`, store.userData.config)
    .then((res) => {
      console.log(res)
      store.getData()
    })
    .catch((err) => {
      console.log(err)
    })
}

// 編輯功能
// const editTask = () => {
//   request
//     .put(
//       `/todos/${props.id}`,
//       {
//         todo: {
//           content: newContent.value
//         }
//       },
//       store.userData.config
//     )
//     .then((res) => {
//       console.log(res)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }
</script>
<template>
  <div class="flex p-2 border-b-2 border-gray-400 bg-white group items-center">
    <label for="taskContent"></label>
    <input type="checkbox" name="" id="" class="hidden" @click="switchStatus" />
    <img
      :src="
        props.done === null
          ? 'https://raw.githubusercontent.com/NancyHsu1994Taiwan/todolist-comAPI-new/931ef8212a33f3b2b277b435a1c3a67999754494/src/assets/checkbox.svg'
          : 'https://raw.githubusercontent.com/NancyHsu1994Taiwan/todolist-comAPI-new/931ef8212a33f3b2b277b435a1c3a67999754494/src/assets/check.svg'
      "
      alt=""
      @click="switchSatus"
      class="mr-2"
    />
    <!--       v-model="newContent"
      @keyup.enter="editTask" -->
    <input type="text" id="taskContent" class="w-full h-[20px] mr-4" :value="props.content" />
    <button type="btn" class="hidden group-hover:block" @click="deleteTask">X</button>
  </div>
</template>
