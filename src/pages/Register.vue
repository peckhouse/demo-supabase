<script setup lang="ts">
import { ref } from "vue";
import useAuthUser from "../composables/useAuthUser";
import { useRouter } from "vue-router";

// Use necessary composables
const router = useRouter();
const { register, loginWithSocialProvider } = useAuthUser();

// Form reactive ref to keep up with the form data
const form = ref({
  name: "",
  email: "",
  password: "",
});

// function to hand the form submit
const handleSubmit = async () => {
  try {
    await register(form.value)
    router.push({
      name: "EmailConfirmation",
      query: { email: form.value.email },
    });
  } catch (error) {
    // @ts-ignore
    console.log(error.message)
  }
}

const handleLogin = async (provider: string) => {
  try {
    await loginWithSocialProvider(provider)
  } 
  catch (error) {
    // @ts-ignore
    console.log(error.message)
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h1 >Register</h1>
    <label>Name <input v-model="form.name" type="text" /></label>
    <label>Email <input v-model="form.email" type="email" /></label>
    <label>Password <input v-model="form.password" type="password" /></label>
    <button>Register</button>
  </form>

  <div>
    <button @click.prevent="handleLogin('github')">Github</button>
  </div>
</template>