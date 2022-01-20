<template>
  <el-row v-if="isReady">
    <el-col class="m-auto" :xs="24" :sm="18" :md="14" :xl="10">
      <router-view />
      <div class="mb-2 text-center">
        <a v-if="$store.state.auth.user" @click="onLogout" href="#">Logout</a>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'App',
  data() {
    return {
      isReady: false,
    };
  },
  async mounted() {
    await this.init();
    this.isReady = true;
  },
  methods: {
    async init() {
      this.initConfig();
      const { user } = await this.getAuthUser();
      if (!user) {
        return this.$router.push('sign_in');
      } else {
        return this.$router.push('user_list');
      }
    },
    onLogout() {
      this.logout();
      this.$router.push('sign_in');
    },
    ...mapActions('config', ['initConfig']),
    ...mapActions('auth', ['getAuthUser', 'logout']),
  },
});
</script>

<style lang="scss">
@import 'src/assets/scss/main.scss';
</style>
