<template>
  <div class="sign-up">
    <h1 class="m-4" v-html="$t('sign_up.title')"></h1>
    <el-card shadow="never">
      <user-form
        :submit-button="{ title: 'sign_up.title', click: signUp }"
        :cancel-button="{ title: 'sign_in.title', click: () => $router.push('sign_in') }"
      />
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { User } from '@/types/User';
import UserForm from '@/components/UserForm.vue';
import { mapActions } from 'vuex';

const SignUp = defineComponent({
  name: 'SignUp',
  components: { UserForm },
  methods: {
    async signUp(userData: User): Promise<string | undefined> {
      const { user, error } = await this.createUser(userData);
      if (user) {
        await this.$router.push('user_list');
        return;
      }
      return error;
    },
    ...mapActions('auth', ['createUser']),
  },
});

export default SignUp;
</script>
