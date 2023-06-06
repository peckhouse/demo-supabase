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
    <router-link to="/forgotPassword" class="login-form__link">Forgot Password?</router-link>
  </form>

  <h2 class="page-subtitle">Per providers</h2>
  <ul class="login-providers">
    <li>
      <button @click="handleLogin('github')">
        <svg fill="#ffffff" height="32" viewBox="0 0 16 16" width="32">
          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        <span>Github</span>
      </button>
    </li>
    <!-- 
      <li>
        <button @click="handleLogin('linkedin')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-40.125525 -16.3118 347.75455 97.8708"><path fill="#0a66c2" d="M263.744 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836M0 9.5874h9.993v36.4h18.5v9.222H0zm32.911 14.689h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 11-5.57 5.569 5.569 5.569 0 015.57-5.569m44.958.674h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066l-10.191-15.282h-.126v15.28h-9.6zm-34.835 14.699h9.219v4.225h.131a10.085 10.085 0 019.09-4.994c9.735 0 11.527 6.405 11.527 14.726v16.954h-9.6v-15.031c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6z"/><path fill="#0a66c2" d="M135.136 36.1384a5.756 5.756 0 00-5.894-5.89 6.406 6.406 0 00-6.784 5.89zm8.132 13.7a16.909 16.909 0 01-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331 0-9.923 7.685-16.328 17.286-16.328 8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 007.235 6.019 8.193 8.193 0 006.851-3.778zm21.482-18.089c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 01-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.5774h9.609zm64.809.018h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2h-55.21a4.728 4.728 0 00-4.781 4.67v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67m12.173 56.411a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1"/></svg>
        </button>
      </li>
    -->
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
  position: relative;
  border: 2px solid #3ECF8E;
  outline: 1px solid #3ECF8E;
  outline-offset: -6px;
  max-width: 480px;
  margin: 0 auto 64px;
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

  &__button {
    background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
    border: 0;
    border-radius: 12px;
    color: #FFFFFF;
    cursor: pointer;
    display: block;
    margin: 0 0 0 auto;
    font-size: 14px;
    font-weight: 500;
    height: 32px;
    outline: transparent;
    padding: 0 16px;
    text-align: center;
    text-decoration: none;
    transition: box-shadow .2s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;

    &:focus, &:hover {
      box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
    }
  }

  &__link {
    font-size: 12px;
    color: #000000;
    position: absolute;
    bottom: 34px;
    left: 24px;
  }
}

.login-providers {
  list-style: none;
  position: relative;
  border: 2px solid #3ECF8E;
  outline: 1px solid #3ECF8E;
  outline-offset: -6px;
  max-width: 480px;
  margin: 0 auto 64px;
  padding: 24px;

  li {
    display: inline-block;
    margin: 0 16px 0 0;
    
    button {
      background: transparent;
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      cursor: pointer;

      color: inherit;
      font: inherit;

      line-height: normal;

      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;

      appearance: none;
      display:inline-flex;
      align-items:center;
      min-height:40px;
      background-color:#24292e;
      font-family:'Roboto',sans-serif;
      font-size:14px;
      color:white;
      text-decoration:none;
      border-radius: 12px;
      padding: 0 16px; 

      svg {
        width: 20px;
        height: 20px;
        margin: 0 8px 0 0; 
      }
    }

    + li {
      button svg {
        width: auto;
        height: 20px; 
      }
    }
  }
}
</style>
