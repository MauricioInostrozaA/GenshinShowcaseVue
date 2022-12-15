import { createStore } from 'vuex'
import axios from 'axios'

const API_URL = 'https://enka.network/u/';
const apiGenshinUid = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});



export default createStore({
  state: {
    currentCharacter: {},
  },
  mutations: {
    SET_ITEM(state, { item, value }) {
      state[item] = value;
    },
  },
  actions: {
    // * GENSHIN DATA * //
    SEARCH_GENSHIN_DATA: ({ state, commit }, payload) => new Promise((resolve) => {
      console.log('Buscando data', payload);
      const querySearch = payload.userID;
      async function getGenshinData() {
        try {
          const response = await apiGenshinUid.get('/'+ payload);
          console.log(response.data);
          commit('SET_ITEM', {
            item: 'currentCharacter',
            value: response.data,
          });
          resolve(state.currentCharacter);
        } catch (error) {
          console.log(error);
        }
      }
      getGenshinData(querySearch);
    }),
  },
  getters: {
    currentCharacter: (state) => state.currentCharacter,
  }
})