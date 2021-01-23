<template>
  <section>
    <div class="w-full px-0 md:px-30 mt-8 mx-auto">
      <div class="block md:flex md:mx-7 mx-2">
        <div class="md:w-full px-8 md:mb-4 mb-2">
          <h2 class="text-purple-600 font-semibold">POPAKET</h2>
        </div>
      </div>
    </div>
    <form-submit></form-submit>
    <div class="w-full px-0 md:px-30 mt-8 mx-auto">
      <div class="block md:flex md:mx-7 mx-2">
        <div class="md:w-full px-8 md:mb-40 mb-2">
          <trigger-input></trigger-input>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';

@Component
export default class IndexPage extends Vue {}
</script>

<style lang="scss">
.container {
  @apply mx-auto my-0 min-h-screen flex justify-center items-center text-center;
}

.links,
.title {
  @apply mt-5;
}

.links :not(:first-child) {
  @apply ml-5;
}

.image_icon {
  max-width: 30px;
}

/* When the checkbox is checked, add a blue background */
.color_check input:checked ~ .checkmark {
  background-color: #2dbbc0;
}
</style>
