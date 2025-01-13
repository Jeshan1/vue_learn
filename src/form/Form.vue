<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  formType: {
    type: String,
    required: true,
  },
});

const formData = reactive({
  email: '',
  password: '',
  confirmPassword: '', // Used only for register
});

const handleSubmit = (e) => {
    e.preventDefault()
    const {formType} = props
  // Check if formType is 'login' or 'register'
  if (formType === 'login') {
    if (formData.email && formData.password) {
      alert(`Logging in with Email: ${formData.email}, Password: ${formData.password}`);
    } else {
      alert("Please fill in both email and password fields.");
    }
  } else if (formType === 'register') {
    if (formData.email && formData.password && formData.confirmPassword) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match.");
      } else {
        alert(`Registering with Email: ${formData.email}, Password: ${formData.password}, Confirm Password: ${formData.confirmPassword}`);
      }
    } else {
      alert("Please fill in all fields.");
    }
  }
};
</script>

<template>
  <form @submit="handleSubmit" class="">
    <h2 class="text-red-600 text-2xl py-4">{{ formType === 'login' ? 'Login' : 'Register' }}</h2>

    <div>
      <label for="email" class="text-left">Email:</label>
      <input type="email" id="email" v-model="formData.email" required />
    </div>

    <div>
      <label for="password" class="text-left">Password:</label>
      <input type="password" id="password" v-model="formData.password" required />
    </div>

    <div v-if="formType === 'register'">
      <label for="confirmPassword" class="text-left">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        v-model="formData.confirmPassword"
        required
      />
    </div>

    <button type="submit">{{ formType === 'login' ? 'Login' : 'Register' }}</button>
    <router-link to="/" class="back-link">Back to home</router-link>
  </form>
</template>

<style scoped>
form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.back-link {
  display: block;
  text-align: center;
  margin-top: 15px;
  color: #007bff;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
