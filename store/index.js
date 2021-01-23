import { environments } from '../enviroments/enviroments';

const axios = require('axios').default;
const APIUrl = environments.apiUrl + '/v1/public/shipment';
const APIKey = environments.apiKey;

export const state = () => ({
  loadingConditionGet: false,
  conditionGetShipment: true,
  resultAll: '',
  message: '',
});

export const mutations = {
  getShipment(state, payload) {
    state.loadingConditionGet = true;
    axios({
      method: 'get',
      url: APIUrl + payload,
      headers: {
        'Content-Type': 'application/json',
        'api-key': APIKey,
      },
    })
      .then((response) => {
        state.loadingConditionGet = false;
        state.conditionGetShipment = true;
        // this.resultShipment = response.data.data;
        const dataShipment = response.data;
        console.log(dataShipment);
        state.resultAll = JSON.stringify(dataShipment, undefined, 2);
      })
      .catch((error) => {
        state.loadingConditionGe = false;
        state.message = 'Error when get data : ' + error.message;
      });
  },
};

export const getters = {
  displayGetShipmentOrderNo() {
    return state.resultAll;
  },
  displayLoadingConditionGet() {
    return state.loadingConditionGet;
  },
  displayConditionGetShipment() {
    return state.conditionGetShipment;
  },
  displayMessagePost() {
    return state.message;
  },
};
