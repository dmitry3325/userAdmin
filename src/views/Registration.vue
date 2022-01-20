<template>
  <div class="registration">
    <h1 class="m-4" v-html="$t('registration.title')"></h1>
    <el-card shadow="never" class="text-center">
      <el-input v-model="accountNumber" placeholder="Please input" />
      <el-input v-model="accountNumber" placeholder="Please input" />
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const Registration = defineComponent({
  name: 'Registration',
  data() {
    return {
      accountNumber: '',
    };
  },
  mounted() {
    console.log('Registration');
  },
});

export default Registration;
</script>
