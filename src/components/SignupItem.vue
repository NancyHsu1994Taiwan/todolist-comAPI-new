<script setup>
import request from '../apis/request.js'
import { useRouter } from 'vue-router'
let router = useRouter()
let signupData = {
  email: '',
  nickname: '',
  password: '',
  passwordAgain: ''
}

function goToLogin() {
  router.push('/')
}

function signup() {
  request
    .post('/users', {
      user: {
        email: signupData.email,
        nickname: signupData.nickname,
        password: signupData.password
      }
    })
    .then((res) => {
      console.log(res)
      goToLogin()
    })
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
          v-model="signupData.email"
        />
        <ErrorMessage name="email" />
      </div>
      <div class="mb-4">
        <label for="nickname" class="mb-1">暱稱</label>
        <VField
          id="nickname"
          name="nickname"
          type="text"
          rules="required"
          placeholder="請輸入暱稱"
          class="bg-white text-gray w-full rounded"
          v-model="signupData.nickname"
        />
        <ErrorMessage name="nickname" />
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
          v-model="signupData.password"
        />
        <ErrorMessage name="email" />
      </div>
      <div class="mb-4">
        <label for="passwordAgain" class="mb-1">請再次輸入密碼</label>
        <VField
          id="passwordAgain"
          name="passwordAgain"
          type="text"
          rules="required"
          placeholder="請再次輸入密碼"
          class="bg-white text-gray w-full rounded"
          v-model="signupData.passwordAgain"
        />
        <ErrorMessage name="passwordAgain" />
      </div>
    </VForm>
    <button class="block bg-slate-600 rounded p-2 text-white mb-10" @click="signup">Signup</button>
    <button class="rounded p-1 text-xs" @click="goToLogin">Already have an account?</button>
  </div>
</template>
