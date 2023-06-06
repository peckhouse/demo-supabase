<script setup lang="ts">
import useAuthUser from "../composables/useAuthUser";
const { myUser } = useAuthUser();
</script>

<template>
  <div v-if="myUser">
    <h1>My account</h1>
    <p>Email: {{ myUser.email }}</p>
  </div>
</template>