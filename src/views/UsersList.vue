<template>
  <div class="sign-in">
    <h1 class="m-4" v-html="$t('users_list.title')"></h1>
    <el-card shadow="never">
      <el-table :data="users" stripe>
        <el-table-column prop="id" label="ID" width="50" />
        <el-table-column prop="accountNumber" label="Account Number" width="150" />
        <el-table-column prop="name" label="Name" width="200" />
        <el-table-column prop="type" label="Type" width="100" />
        <el-table-column prop="currency" label="Currency">
          <template #default="scope">
            {{ this.getCurrencyName(scope.row.currency) }}
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { User } from '@/types/User';
import { mapActions } from 'vuex';
import { Currency, CurrencyCode } from '@/types/Currency';

const UsersList = defineComponent({
  name: 'UsersList',
  data() {
    return {
      users: [] as User[],
      error: '',
    };
  },
  async mounted() {
    const { users, error } = await this.getAllUsers();
    this.users = users;
    this.error = error;
  },
  methods: {
    getCurrencyName(currency: CurrencyCode): Currency {
      return Currency[currency];
    },
    ...mapActions('users', ['getAllUsers']),
  },
});

export default UsersList;
</script>
