import { ref } from 'vue'
import { defineStore } from 'pinia'
import request from '../apis/request.js'

export const useGetDataStore = defineStore('getData', () => {
  const userData = {
    token: localStorage.getItem('userToken'),
    nickName: localStorage.getItem('userNickname'),
    config: {
      headers: {
        Authorization: localStorage.getItem('userToken')
      }
    }
  }

  const data = ref([])
  const resMsg = ref('')
  const getData = () => {
    request.get('/todos', userData.config).then((res) => {
      data.value = res.data.todos
      resMsg.value = res.status
      //   console.log(data.value)
    })
  }

  return { userData, data, resMsg, getData }
})
