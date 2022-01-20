<template>
  <el-alert v-if="errors.length" type="error" class="mb-4">
    <div v-for="(error, id) in errors" :key="id">{{ error }}</div>
  </el-alert>
  <el-form ref="formRef" :label-position="'top'" :model="user">
    <el-form-item v-if="isShow('name')" :label="$t('account_name.label')">
      <el-input v-model="user.name" :placeholder="$t('account_name.placeholder')" />
    </el-form-item>
    <el-form-item v-if="isShow('accountNumber')" :label="$t('account_number.label')">
      <el-input type="number" v-model="user.accountNumber" :placeholder="$t('account_number.placeholder')" />
      <div class="sub-title">list suggestions when activated</div>
    </el-form-item>
    <el-form-item v-if="isShow('type')" :label="$t('account_type.label')">
      <el-select v-model="user.type" :placeholder="$t('account_type.placeholder')">
        <el-option v-for="item in userType" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>
    <el-form-item v-if="isShow('currency')" :label="$t('account_currency.label')">
      <el-select v-model="user.currency" filterable :placeholder="$t('account_currency.placeholder')">
        <el-option v-for="item in currencies" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>
    <el-form-item class="mt-5">
      <el-button type="success" @click="submit">{{ $t(submitButton.title) }}</el-button>
      <el-button @click="cancelButton.click" type="text">{{ $t(cancelButton.title) }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { User, UserType } from '@/types/User';
import { Currency } from '@/types/Currency';

export interface ButtonType {
  title: string;
  click: (user: User) => string | undefined;
}

const UserForm = defineComponent({
  name: 'UserForm',
  props: {
    userData: {
      required: false,
      type: Array as PropType<Partial<User>>,
      default: () => {},
    },
    fieldsList: {
      required: false,
      type: Array as PropType<Array<keyof User>>,
      default: () => [],
    },
    submitButton: {
      required: true,
      type: Object as PropType<ButtonType>,
    },
    cancelButton: {
      required: true,
      type: Object as PropType<ButtonType>,
    },
  },
  data() {
    return {
      user: {} as User,
      errors: [] as string[],
    };
  },
  mounted() {
    Object.assign(this.user, this.userData);
  },
  methods: {
    async submit() {
      this.errors = [];
      if (!this.user.name && this.isShow('name')) {
        this.errors.push('User name is required');
      }
      if (!this.user.accountNumber && this.isShow('accountNumber')) {
        this.errors.push('User Account number is required');
      }
      if (!this.user.type && this.isShow('type')) {
        this.errors.push('User type is required');
      }
      if (!this.user.currency && this.isShow('currency')) {
        this.errors.push('User currency is required');
      }

      if (this.errors.length) return;

      const error = await this.submitButton.click(this.user);
      if (error) {
        this.errors.push(error);
      }
    },
    isShow(field: keyof User) {
      return !this.fieldsList.length || this.fieldsList.indexOf(field) !== -1;
    },
  },
  computed: {
    userType: () => {
      return Object.entries(UserType).map(([, value]) => {
        return { label: value, value: value };
      });
    },
    currencies: () => {
      return Object.entries(Currency).map(([key, value]) => {
        return { label: value, value: key };
      });
    },
  },
});

export default UserForm;
</script>
