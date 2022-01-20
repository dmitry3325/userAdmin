<template>
  <div class="sign-in">
    <h1 class="m-4" v-html="$t('sign_in.title')"></h1>
    <el-card shadow="never">
      <user-form
        :fields-list="['name', 'accountNumber']"
        :submit-button="{ title: 'sign_in.title', click: signIn }"
        :cancel-button="{ title: 'sign_up.title', click: () => $router.push('sign_up') }"
      />
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { User } from '@/types/User';
import UserForm from '@/components/UserForm.vue';
import { mapActions } from 'vuex';

const SignIn = defineComponent({
  name: 'SignIn',
  components: { UserForm },
  methods: {
    async signIn(userData: User): Promise<string | undefined> {
      const { user, error } = await this.loadUser(userData);
      if (user) {
        await this.$router.push('user_list');
        return;
      }
      return error;
    },
    ...mapActions('auth', ['loadUser']),
  },
});

export default SignIn;
</script>
