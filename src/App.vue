<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="logo-container">
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.logo-container {
  position: absolute; /* 로고 컨테이너의 절대 위치 설정 */
  bottom: 20px; /* 아래에서 20px 떨어진 위치 */
  right: 20px; /* 오른쪽에서 20px 떨어진 위치 */
  display: flex; /* 로고를 수평으로 나열 */
  flex-direction: column; /* 세로 방향으로 배치 */
  gap: 10px; /* 로고 간의 간격 설정 */
}

.logo {

  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
