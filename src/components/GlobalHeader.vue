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
        <span>Hello {{  myUser.email }}</span>
      </li>
      <li>
        <RouterLink :to="{ name: 'Account' }">Account</RouterLink>
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

    a, span {
      text-decoration: none;
      color: #ffffff;
      font-size: 20px;
    }

    button {
      background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
      border: 0;
      border-radius: 12px;
      color: #FFFFFF;
      cursor: pointer;
      display: inline-block;
      font-size: 16px;
      font-weight: 500;
      line-height: 2.5;
      outline: transparent;
      padding: 0 1rem;
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
  }

}
</style>