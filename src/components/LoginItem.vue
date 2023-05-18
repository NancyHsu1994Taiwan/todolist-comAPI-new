<script setup>
import request from '../apis/request.js'
import { useRouter } from 'vue-router'
let router = useRouter()
let data = {
  password: '',
  email: '',
  token: '',
  nickname: ''
}

function login() {
  request
    .post('/users/sign_in', {
      user: {
        email: data.email,
        password: data.password
      }
    })
    .then((res) => {
      console.log(res)
      data.token = res.headers.authorization
      data.nickname = res.data.nickname
      localStorage.setItem('userToken', data.token)
      localStorage.setItem('userNickname', data.nickname)
      if (res.data.message == '登入成功') {
        alert('登入成功')
        router.push('/task')
      } else {
        alert('登入失敗，若尚未註冊請前往註冊頁面註冊')
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

function goToSignup() {
  router.push('/signup')
}
</script>

<template>
  <div class="bg-slate-400 p-4 rounded">
    <VForm>
      <div class="mb-4">
        <label for="email" class="mb-1">Email</label>
        <VField
          id="email"
          name="email"
          type="text"
          rules="email|required"
          placeholder="請輸入Email"
          class="bg-white text-gray w-full rounded"
          v-model="data.email"
        />
        <ErrorMessage name="email" />
      </div>
      <div class="mb-4">
        <label for="password" class="mb-1">密碼</label>
        <VField
          id="password"
          name="password"
          type="text"
          rules="required"
          placeholder="請輸入密碼"
          class="bg-white text-gray w-full rounded"
          v-model="data.password"
        />
        <ErrorMessage name="email" />
      </div>
    </VForm>
    <button class="block bg-slate-600 rounded p-2 text-white mb-10" @click="login">Login</button>
    <button class="rounded p-1 text-xs" @click="goToSignup">Don't have an account yet?</button>
  </div>
</template>
