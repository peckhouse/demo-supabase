<script setup lang="ts">
import { useRouter } from "vue-router"
import { ref } from "vue";
import useAuthUser from "../composables/useAuthUser"

// Use necessary composables
const router = useRouter();
const { login, loginWithSocialProvider } = useAuthUser()

// keep up with form data
const form = ref({ 
  email: "",
  password: "",
});

// call the proper login method from the AuthUser composable
// on the submit of the form
// @ts-ignore
const handleLogin = async (provider) => {
  try {
    provider
      ? await loginWithSocialProvider(provider)
      : await login(form.value)
    router.push({ name: "Me" })
  } 
  catch (error) {
    // @ts-ignore
    console.log(error.message)
  }
};
</script>

<template>
  <div class="max-w-lg m-auto">
    <form @submit.prevent="handleLogin">
      <h1>Login</h1>
      <label>Email <input v-model="form.email" type="email" /></label>
      <label>Password <input v-model="form.password" type="password" /></label>
      <button>Login</button>
      <router-link to="/forgotPassword">Forgot Password?</router-link>
    </form>
    <div>
      <button @click.prevent="handleLogin('github')">Github</button>
    </div>
  </div>
</template>