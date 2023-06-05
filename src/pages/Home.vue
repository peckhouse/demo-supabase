<script setup lang="ts">
import useAuthUser from "../composables/useAuthUser"


const { myUser, logout } = useAuthUser()
</script>

<template>
  <h1>Homepage</h1>

  <div v-if="myUser">
    Successfuly connected!!!

    Hello {{ myUser.email }}!!

    <button @click="logout">Signout</button>
  </div>
  <div v-else>
    You need to connect to your account
  </div>
</template>