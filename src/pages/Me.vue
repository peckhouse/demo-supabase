<script setup lang="ts">
import useAuthUser from "../composables/useAuthUser";
const { myUser } = useAuthUser();
</script>

<template>
  <div v-if="myUser">
        <!--user_metadata is the key supabase nests all arbitrary meta data under-->
    <div>Hello {{ myUser.email }}</div>
  </div>
</template>