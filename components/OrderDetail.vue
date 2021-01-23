<template>
  <div class="p-4 mb-6 mx-3 border-2 border-gray-100 rounded-md overflow-auto">
    <div v-if="loadingConditionGet">
      <p>Still Loading post....</p>
    </div>

    <div v-if="!conditionGetShipment">
      <h3>Order Detail</h3>
      <p>Buat Order Sebelah kiri dahulu</p>
    </div>
    <div v-else>
      <!-- {{ resultShipment }} -->
      <pre id="json">
          {{ resultAll }}
      </pre>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
export default Vue.extend({
  computed: {
    ...mapGetters({
      displayGetShipment: 'displayGetShipment',
      loadingConditionGet: 'loadingConditionGet',
      conditionGetShipment: 'conditionGetShipment',
    }),

    // displayGetShipment() {
    //   return this.$store.getters.displayGetShipmentOrderNo;
    // },
    // loadingConditionGet() {
    //   return this.$store.getters.displayLoadingConditionGet;
    // },
    // conditionGetShipment() {
    //   return this.$store.getters.displayConditionGetShipment;
    // },
  },
});
</script>

<style lang="scss" scoped></style>
