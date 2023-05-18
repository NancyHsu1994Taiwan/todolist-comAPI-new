<script setup>
import { onMounted } from 'vue'
import { useGetDataStore } from '../stores/counter.js'
import request from '../apis/request.js'
import { useRouter } from 'vue-router'
let router = useRouter()

const store = useGetDataStore()
let userDataCheck = {
  token: store.userData.token,
  nickName: store.userData.nickName,
  config: store.userData.config
}
const checkTest = () => {
  request
    .get('/check', userDataCheck.config)
    .then((res) => {
      console.log(res)
      if (userDataCheck.config == null) {
        alert('登入失敗')

        return
      }
    })
    .catch((err) => {
      console.log(err)
      if (err.response.status !== 200) {
        alert('登入失敗')
        location.href = './index.html'
        // router.push
      }
    })
}

const logout = () => {
  request
    .delete('/users/sign_out', userDataCheck.config)
    .then((res) => {
      console.log(res)
      router.push('/')
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(() => {
  checkTest()
})
</script>

<template>
  <nav class="w-full mx-auto flex justify-between py-4">
    <div class="flex">
      <p>ONLINE TODO LIST</p>
    </div>
    <ul class="flex">
      <li class="mr-6">
        <p class="">{{ userDataCheck.nickName }} 的代辦</p>
      </li>
      <li>
        <button type="button" @click="logout">登出</button>
      </li>
    </ul>
  </nav>
</template>
