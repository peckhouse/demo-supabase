<script setup lang="ts">
import useAuthUser from "../composables/useAuthUser"
import SupabaseIcon from "../assets/supabase-logo-vector.svg"

const { myUser, logout } = useAuthUser()
</script>

<template>
  <header class="header">    
    <RouterLink :to="{ name: 'Home' }" class="header__home"><SupabaseIcon /></RouterLink>
    <ul v-if="myUser">
      <li>
        Hello {{  myUser.email }}
      </li>
      <li>
        <button @click="logout">Signout</button>
      </li>
    </ul>

    <ul v-else>
      <li>
        <RouterLink :to="{ name: 'Register' }">Register</RouterLink>
      </li>

      <li>
        <RouterLink :to="{ name: 'Login' }">Login</RouterLink>
      </li>
    </ul>
</header>
</template>

<style lang="scss">
.header {
  background-color: #242424;
  padding: 0 24px;
  width: 100%;

  &__home {

    svg {
      display: inline-block;
      vertical-align: middle;
      height: 32px;
      width: auto;
    }
  }

  ul {
    width: calc(100% - 150px);
    vertical-align: middle;
    display: inline-block;
    list-style: none;
    text-align: right;
    height: 80px;
    line-height: 80px;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline-block;
    margin: 0 0 0 24px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 20px;
  }
}
</style>