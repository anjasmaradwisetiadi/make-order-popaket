<template>
  <div>
    <h1>{{ fullName }}</h1>

    <form @submit.prevent="handleSubmit">
      <input v-model="username" data-username />
      <input type="submit" />
    </form>

    <div v-if="submitted" class="message">
      Thank you for your submission, {{ username }}.
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormSubmitter',

  data() {
    return {
      username: '',
      submitted: false,
      firstName: 'Irfan',
      lastName: 'Maulana',
      fullName: '',
    };
  },

  watch: {
    firstName(newValue) {
      this.fullName = `${newValue} ${this.lastName}`;
    },
    lastName(newValue) {
      this.fullName = `${this.firstName} ${newValue}`;
    },
  },

  methods: {
    handleSubmit() {
      this.submitted = true;
    },
  },
};
</script>
