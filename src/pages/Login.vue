<script setup lang="ts">
import { ref } from "vue";
import useAuthUser from "../composables/useAuthUser"

const { login, loginWithSocialProvider } = useAuthUser()

const form = ref({ 
  email: "",
  password: "",
});

const handleLogin = async (provider: string | null) => {
  try {
    provider
      ? await loginWithSocialProvider(provider)
      : await login(form.value)
  } 
  catch (error) {
    // @ts-ignore
    console.log(error.message)
  }
}
</script>

<template>
  <h1 class="page-title">Login</h1>
  <h2 class="page-subtitle">Per mail</h2>
  <form @submit="handleLogin(null)" class="login-form">
    <div class="login-form__row">
      <label for="form-email">Email</label>
      <input v-model="form.email" type="email" id="form-email"/>
    </div>
    
    <div class="login-form__row">
      <label for="form-password">Password</label>
      <input v-model="form.password" type="password" id="form-password" />
    </div>

    <button class="login-form__button">Login</button>
    <router-link to="/forgotPassword">Forgot Password?</router-link>
  </form>

  <ul class="login-providers">
    <li>
      <button @click="handleLogin('github')">Github</button>
    </li>
  </ul>
</template>

<style lang="scss">
.page-title {
  font-size: 32px;
  margin: 0 0 16px;
}

.page-subtitle {
  margin: 0 auto 16px;
  max-width: 480px;
  font-size: 24px;
}

.login-form {
  border: 2px solid #3ECF8E;
  outline: 1px solid #3ECF8E;
  outline-offset: -6px;
  max-width: 480px;
  margin: 0 auto;
  padding: 24px;

  &__row {
    justify-content: space-between;
    align-items: center;
    margin: 0 0 16px;
    display: flex;

    label {
      font-size: 14px;
      width: 80px;
    }

    input {
      flex: 0 1 calc(100% - 80px);
      width: calc(100% - 80px);
      height: 32px;
    }
  }
}
</style>
