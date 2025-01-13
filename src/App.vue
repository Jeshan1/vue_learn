<script setup>
import { useRouter, useRoute } from 'vue-router';
import ButtonWorld from './components/ButtonWorld.vue';
import Card from './components/Card.vue';

const router = useRouter();
const route = useRoute()
const navigateTo = (route) => {
  router.push(route);
};
</script>

<template>
  <div class="container">
    <!-- Dynamic Buttons -->
    <div v-if="route.path === '/'">
      <ButtonWorld label="Login" :onClick="() => navigateTo('/login')" />
      <ButtonWorld label="Register" :onClick="() => navigateTo('/register')" />
      <div class="grid grid-cols-3 gap-5 mx-10">
        <Card />
      </div>
    </div>

    

    <!-- Route Content -->
    <router-view />
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 20px;
}
</style>
