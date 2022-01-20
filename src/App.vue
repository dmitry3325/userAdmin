<template>
  <el-row>
    <el-col class="m-auto" :xs="24" :sm="18" :md="14" :xl="10">
      <router-view />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'App',
  mounted() {
    console.log('test', this.$router, this.$store);
  },
});
</script>

<style lang="scss">
@import 'src/assets/scss/main.scss';
</style>
