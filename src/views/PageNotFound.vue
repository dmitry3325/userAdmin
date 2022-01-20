<template>
  <div class="not-found-page">
    <h1 class="m-4" v-html="$t('not_found.title')"></h1>
    <el-card shadow="never" class="text-center">{{ $t('not_found.text') }}</el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const PageNotFound = defineComponent({
  name: 'PageNotFound',
});

export default PageNotFound;
</script>
