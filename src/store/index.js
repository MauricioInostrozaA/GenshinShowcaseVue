import { createStore } from 'vuex'
import axios from 'axios'

const { Wrapper } = require('enkanetwork.js')
const { AssetImageFinder } = require('enkanetwork.js')

const options = {
  locale: 'en'
};

const client = new Wrapper(options)

/*const API_URL = 'https://enka.network/u/';
const apiFetchUid = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});
*/

/*
const finder = new AssetImageFinder()

function getCharacterImage(id) {
	const image = finder.character(id).icon // Output: UI_AvatarIcon_Xiao
}
console.log(getCharacterImage(10000026));
*/
export default createStore({
  state: {
    userData: {},
  },
  mutations: {
    SET_ITEM(state, { item, value }) {
      state[item] = value;
    },
  },
  actions: {
    GET_USER_DATA: ({ state, commit }, payload) => new Promise((resolve) => {
      console.log('Buscando data', payload);
      const querySearch = payload.userUID;
      async function getData() { 
        try {
          const data = await client.getPlayer(payload)
          console.log(data)
          commit('SET_ITEM', {
            item: 'userData',
            value: data,
          });
          resolve(state.userData);
        } catch (error) {
          console.log(error);
        }
      }
      getData(querySearch);
    }),
  },
  getters: {
    userData: (state) => state.userData,
  },
  
})