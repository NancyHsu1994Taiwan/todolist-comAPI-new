<script setup></script>

<template>
  <div class="w-full">
    <ul class="flex justify-between">
      <li><router-link to="/task/taskAll">全部</router-link></li>
      <li><router-link to="/task/taskYet">未完成</router-link></li>
      <li><router-link to="/task/taskDone">已完成</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
