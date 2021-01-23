<template>
  <div class="w-full px-0 md:px-30 mx-auto">
    <div class="block md:flex md:mx-7 mx-2">
      <div class="md:w-1/2 p-4 md:mb-6 mb-2">
        <div class="p-4 mb-6 mx-3 border-2 border-gray-100 rounded-md">
          <form class="px-2 pt-3 mb-4 text-left">
            <div
              class="mb-6 form-control"
              :class="{ invalid: confirmValidateNoInvoice === 'invalid' }"
            >
              <label class="block text-black text-sm mb-2" for="title">
                No Invoice*
              </label>
              <input
                id="title"
                v-model="noInvoice"
                class="bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Protocol 3"
              />
              <p v-if="confirmValidateNoInvoice === 'invalid'">invalid</p>
            </div>

            <!-- Pengirim Penerima -->
            <div
              class="mb-6 pb-4 shadow-lg border-1 border-gray-100 rounded-md"
            >
              <!-- Pengirim -->
              <div
                class="block text-purple-500 text-sm font-semibold mb-2 bg-purple-100 px-4 py-2 rounded-t-md"
              >
                LOKASI PENGIRIM
              </div>
              <div class="md:px-10 px-6 flex flex-row mt-2">
                <div class="flex flex-col align-middle justify-center">
                  <img
                    class="image_icon max-w-xs max-w-md"
                    src="../static/Map.png"
                    alt="map"
                  />
                </div>
                <div class="flex flex-col">
                  <input
                    id="title"
                    v-model="lokasiPengirim"
                    class="appearance-none bg-transparent rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-1 px-3 mr-4"
                    type="text"
                    placeholder="Jalan Def"
                  />
                  <input
                    id="title"
                    class="py-1 appearance-none bg-transparent rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-1 px-3 mr-4 mt-1"
                    type="text"
                    value="Burangrang, Lengkong, Bandung"
                    disabled
                  />
                </div>
              </div>
              <div class="md:px-10 px-6 flex flex-row mt-2 mb-2">
                <div class="flex flex-col align-middle justify-center">
                  <img
                    class="image_icon max-w-xs max-w-md"
                    src="../static/Contact.png"
                    alt="map"
                  />
                </div>

                <div class="flex flex-col">
                  <div class="flex flex-row">
                    <input
                      id="title"
                      v-model="namaPenerima"
                      class="appearance-none bg-transparent rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-1 px-3 mr-4"
                      type="text"
                      placeholder="Pengirim"
                    />
                    <input
                      id="title"
                      v-model="noTelpPenerima"
                      class="appearance-none bg-transparent rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-1 px-3 mr-4"
                      type="text"
                      placeholder="(081234 1234)"
                    />
                  </div>
                  <input
                    id="title"
                    v-model="emailPenerima"
                    class="appearance-none bg-transparent rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-1 px-3 mr-4 mt-1"
                    type="email"
                    placeholder="Pengirim@gmail.com"
                  />
                </div>
              </div>
              <!-- Penerima -->
              <div
                class="block text-purple-500 text-sm font-semibold mb-2 bg-purple-100 px-4 py-2"
              >
                LOKASI PENERIMA
              </div>
              <div class="md:px-10 px-6 flex flex-row mt-2">
                <div class="flex flex-col align-middle justify-center">
                  <img
                    class="image_icon max-w-xs max-w-md"
                    src="../static/Map.png"
                    alt="map"
                  />
                </div>
                <div class="flex flex-col">
                  <input
                    id="title"
                    v-model="lokasiPenerima"
                    class="appearance-none bg-transparent rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-1 px-3 mr-4"
                    type="text"
                    placeholder="Jalan Def"
                  />
                  <input
                    id="title"
                    class="appearance-none py-1 bg-transparent rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-1 px-3 mr-4 mt-1"
                    type="text"
                    value="Burangrang, Lengkong, Bandung"
                    disabled
                  />
                </div>
              </div>
              <div class="md:px-10 px-6 flex flex-row mt-2 mb-2">
                <div class="flex flex-col align-middle justify-center">
                  <img
                    class="image_icon max-w-xs max-w-md"
                    src="../static/Contact.png"
                    alt="map"
                  />
                </div>

                <div class="flex flex-col">
                  <div class="flex flex-row">
                    <input
                      id="title"
                      v-model="namaPengirim"
                      class="appearance-none bg-transparent rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-1 px-3 mr-4"
                      type="text"
                      placeholder="Penerima"
                    />
                    <input
                      id="title"
                      v-model="noTelpPengirim"
                      class="appearance-none bg-transparent rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-1 px-3 mr-4"
                      type="text"
                      placeholder="(081234 1234)"
                    />
                  </div>
                  <input
                    id="title"
                    v-model="emailPengirim"
                    class="appearance-none bg-transparent rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-1 px-3 mr-4 mt-1"
                    type="email"
                    placeholder="Penerima@gmail.com"
                  />
                </div>
              </div>
            </div>

            <!-- detail Barang -->
            <div
              class="mb-6 pb-4 shadow-lg border-1 border-gray-100 rounded-md"
            >
              <div
                class="block text-purple-500 text-sm font-semibold mb-4 bg-purple-100 px-4 py-2 rounded-t-md"
              >
                DETAIL BARANG
              </div>
              <!-- id category -->
              <div class="px-4 my-6 flex flex-row">
                <div class="align-middle justify-center mr-4 mt-1">
                  <span>Tipe Paket</span>
                </div>
                <div class="align-middle justify-center">
                  <button
                    v-for="(items, index) in 3"
                    :key="index"
                    class="list_button md:py-2 md:px-4 mt-1 py-1 px-2 bg-transparent border-2 border-gray-400 md:ml-2 ml-1 focus:border-2 focus:outline-none focus:border-purple-400 focus:bg-purple-200 rounded-md hover:bg-gray-200"
                    type="button"
                    :class="{ active: tipePaket === items }"
                    @click.prevent="submitTipePaket(items)"
                  >
                    {{ items }}
                  </button>
                </div>
              </div>

              <div
                class="px-4 mb-4 form-control"
                :class="{
                  invalid: confirmValidateDeskripsiPaket === 'invalid',
                }"
              >
                <label class="block text-black text-sm mb-2" for="title">
                  Deskripsi Paket*
                </label>
                <input
                  id="title"
                  v-model="deskripsiPaket"
                  class="bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                />
                <p v-if="confirmValidateDeskripsiPaket === 'invalid'">
                  Invalid
                </p>
              </div>

              <div
                class="px-4 mb-4 form-control"
                :class="{ invalid: confirmValidateHargaPaket === 'invalid' }"
              >
                <label class="block text-black text-sm mb-2" for="title">
                  Harga Paket*
                </label>
                <input
                  id="title"
                  v-model.number="hargaPaket"
                  class="bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                  type="number"
                  min="0"
                />
                <p v-if="confirmValidateHargaPaket === 'invalid'">Invalid</p>
              </div>

              <div
                class="px-4 mb-4 form-control"
                :class="{ invalid: confirmValidateBerat === 'invalid' }"
              >
                <label class="block text-black text-sm mb-2" for="title">
                  Berat*
                </label>
                <div class="block md:flex flex-row">
                  <input
                    id="title"
                    v-model.number="berat"
                    type="number"
                    class="bg-transparent appearance-none border rounded md:w-full w-3/5 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline md:mr-4 mr-2"
                    placeholder=""
                  />
                  <select
                    v-model="changePerWeight"
                    class="bg-transparent md:w-1/5 w-2/6 border rounded py-2 md:px-4 px-2"
                  >
                    <option class="px-0" value="kg">kg</option>
                    <option class="px-0" value="gram">gram</option>
                  </select>
                </div>
                <p v-if="confirmValidateHargaPaket === 'invalid'">Invalid</p>
              </div>

              <div
                class="px-4 mb-4 form-control"
                :class="{ invalid: confirmValidateHargaKurir === 'invalid' }"
              >
                <label class="block text-black text-sm mb-2" for="title">
                  Harga Kurir*
                </label>
                <input
                  id="title"
                  v-model.number="hargaKurir"
                  type="number"
                  class="bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
                <p v-if="confirmValidateHargaKurir === 'invalid'">Invalid</p>
              </div>
            </div>

            <!-- insurance and Discount -->
            <div class="color_check mb-4 flex flex-col">
              <label class="flex items-center">
                <input
                  v-model="insurance"
                  type="checkbox"
                  class="form-checkbox text-indigo-600"
                  checked
                />
                <span class="ml-2"></span>
                Insurance
              </label>

              <label class="flex items-center">
                <input
                  v-model="discount"
                  type="checkbox"
                  class="form-checkbox bg-indigo-600"
                  checked
                />
                <span class="ml-2"></span>
                Discount
              </label>
            </div>

            <div class="mt-6 mb-4 flex justify-end">
              <button
                class="btn bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 py-2 px-4 text-white rounded-md"
                type="submit"
                @click.prevent="submitForm()"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <!-- loading -->
        <div v-if="loadingConditionGet" class="px-4">
          <p>Still Loading post....</p>
        </div>
        <!-- error message -->
        <div v-if="message" class="px-4">
          <p>"message": "{{ message }}"</p>
        </div>
      </div>

      <!-- load post order Detail -->
      <div class="md:w-1/2 p-4 md:mb-6 mb-2">
        <order-detail></order-detail>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { environments } from '../enviroments/enviroments';
import OrderDetail from './OrderDetail.vue';

const axios = require('axios').default;
const APIUrl = environments.apiUrl + '/v1/public/shipment';
const APIKey = environments.apiKey;

export default Vue.extend({
  components: {
    OrderDetail,
  },

  data() {
    return {
      noInvoice: '',
      // Pengirim
      lokasiPengirim: '',
      namaPenerima: '',
      noTelpPenerima: '',
      emailPenerima: '',
      // penerima
      lokasiPenerima: '',
      namaPengirim: '',
      noTelpPengirim: '',
      emailPengirim: '',
      // DetailBarang
      tipePaket: null,
      deskripsiPaket: '',
      hargaPaket: null,
      berat: 0,
      fixBerat: 0,
      beratSatuan: 'kg',
      hargaKurir: null,
      insurance: false,
      discount: false,
      discountsResult: 0,
      // validate invoice
      confirmValidateNoInvoice: 'valid',
      confirmValidateHargaPaket: 'valid',
      confirmValidateDeskripsiPaket: 'valid',
      confirmValidateBerat: 'valid',
      confirmValidateHargaKurir: 'valid',

      message: '',
      resultShipment: [],
      resultAll: '',
      conditionGetShipment: false,
      conditionValidWeight: false,
      loadingConditionPost: false,
      loadingConditionGet: false,
      changePerWeight: 'kg',
    };
  },
  
  watch: {
    changePerWeight(value) {
      const dataSatuan = value;
      if (dataSatuan === 'kg' && !this.conditionValidWeight) {
        this.conditionValidWeight = false;
      } else if (dataSatuan === 'kg' && this.conditionValidWeight) {
        this.berat = this.berat / 1000;
        this.conditionValidWeight = false;
      } else {
        this.berat = this.berat * 1000;
        this.conditionValidWeight = true;
      }
    },
  },

  methods: {
    submitTipePaket(item: any) {
      this.tipePaket = item;
    },

    submitForm() {
      // discount

      if (this.validateInput() === 1) {
        this.discountsResult = this.discount ? 5000 : 0;
        this.postShipment();
      } else {
        this.message = 'validate input masih invalid';
      }
    },

    // validWeight(event: any) {
    //   const dataSatuan = event.target.value;
    //   if (dataSatuan === 'kg' && !this.conditionValidWeight) {
    //     this.berat = this.berat;
    //     this.conditionValidWeight = false;
    //   } else if (dataSatuan === 'kg' && this.conditionValidWeight) {
    //     this.berat = this.berat / 1000;
    //     this.conditionValidWeight = false;
    //   } else {
    //     this.berat = this.berat * 1000;
    //     this.conditionValidWeight = true;
    //   }
    // },

    changeWeight() {
      this.fixBerat = this.conditionValidWeight
        ? this.berat / 1000
        : this.berat;
      // if (this.conditionValidWeight) {
      //   this.fixBerat = this.berat / 1000;
      // } else {
      //   this.fixBerat = this.berat;
      // }
    },

    postShipment() {
      this.loadingConditionPost = true;
      this.changeWeight();
      axios({
        method: 'post',
        url: APIUrl,
        headers: {
          'Content-Type': 'application/json',
          'api-key': APIKey,
        },
        data: {
          client_order_number: this.noInvoice,
          destination_sub_district: 54028,
          discount: this.discountsResult,
          height: 25,
          length: 10,
          origin_sub_district: 61326,
          package_desc: this.deskripsiPaket,
          package_price: this.hargaPaket,
          package_type_id: this.tipePaket,
          rate_id: 11,
          receiver_address: this.lokasiPenerima,
          receiver_email: this.emailPenerima,
          receiver_name: this.namaPenerima,
          receiver_phone: this.noTelpPenerima,
          shipment_price: this.hargaKurir,
          shipper_address: this.lokasiPengirim,
          shipper_email: this.emailPengirim,
          shipper_name: this.namaPengirim,
          shipper_phone: this.noTelpPengirim,
          shipping_note: 'Tiati',
          use_insurance: this.insurance,
          weight: this.fixBerat,
          width: 50,
        },
      })
        .then((response: any) => {
          const shipmentOrderNo = response.data.data.shipment_order_no;
          this.loadingConditionPost = false;
          this.message = 'Success Post Data';
          this.getShipment(shipmentOrderNo);
        })
        .catch((error: any) => {
          this.loadingConditionPost = false;
          this.message = 'Error when post data : ' + error.message;
        });

      this.clearInput();
    },

    // useVUEX
    getShipment(shipmentOrderNo: string) {
      this.$store.commit('getShipment', shipmentOrderNo);
      this.message = this.$store.state.message;
    },

    // traditional get
    // getShipment(shipmentOrderNo: string) {
    //   this.loadingConditionGet = true;
    //   axios({
    //     method: 'get',
    //     url: APIUrl + shipmentOrderNo,
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'api-key': APIKey,
    //     },
    //   })
    //     .then((response: any) => {
    //       this.loadingConditionGet = false;
    //       this.conditionGetShipment = true;
    //       // this.resultShipment = response.data.data;
    //       const dataShipment = response.data;
    //       this.resultAll = JSON.stringify(dataShipment, undefined, 2);
    //     })
    //     .catch((error: any) => {
    //       this.loadingConditionGet = false;
    //       this.message = 'Error when get data : ' + error.message;
    //     });
    // },

    clearInput() {
      this.noInvoice = '';
      this.tipePaket = null;
      this.lokasiPengirim = '';
      this.namaPenerima = '';
      this.noTelpPenerima = '';
      this.emailPenerima = '';
      this.lokasiPenerima = '';
      this.namaPengirim = '';
      this.noTelpPengirim = '';
      this.emailPengirim = '';
      this.deskripsiPaket = '';
      this.hargaPaket = null;
      this.berat = 0;
      this.hargaKurir = null;
      this.insurance = false;
      this.discount = false;
    },

    validateInput() {
      this.confirmValidateNoInvoice = !this.noInvoice ? 'invalid' : 'valid';
      this.confirmValidateDeskripsiPaket = !this.deskripsiPaket
        ? 'invalid'
        : 'valid';
      this.confirmValidateHargaPaket = !this.hargaPaket ? 'invalid' : 'valid';
      this.confirmValidateBerat = !this.berat ? 'invalid' : 'valid';
      this.confirmValidateHargaKurir = !this.hargaKurir ? 'invalid' : 'valid';

      if (
        this.confirmValidateNoInvoice === 'valid' &&
        this.confirmValidateDeskripsiPaket === 'valid' &&
        this.confirmValidateHargaPaket === 'valid' &&
        this.confirmValidateBerat === 'valid' &&
        this.confirmValidateHargaKurir === 'valid'
      ) {
        return 1;
      } else {
        return 0;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label,
.form-control.invalid select,
.form-control.invalid p {
  border-color: red;
  color: red;
}

.list_button.active {
  background-color: #ddd6fe;
  border: 2px solid #a78bfa;
}
</style>
