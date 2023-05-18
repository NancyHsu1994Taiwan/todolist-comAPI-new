<script setup></script>

<template>
  <div class="w-full p-2 rounded bg-white">
    <ul class="flex justify-between">
      <li class="w-full text-center rounded-t hover:border-b-2 hover:border-slate-400">
        <router-link to="/task/taskAll">全部</router-link>
      </li>
      <li class="w-full text-center hover:border-b-2 hover:border-slate-400">
        <router-link to="/task/taskYet">未完成</router-link>
      </li>
      <li class="w-full text-center rounded-t hover:border-b-2 hover:border-slate-400">
        <router-link to="/task/taskDone">已完成</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
