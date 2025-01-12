<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <button @click="onClick">{{ label }}</button>
</template>

<style scoped>
button {
  margin: 10px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #e5e5e5;
}
</style>
