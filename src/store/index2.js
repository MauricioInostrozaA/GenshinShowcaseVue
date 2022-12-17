const { Wrapper } = require('enkanetwork.js')

const client = new Wrapper(options)
/** options:
 * key: optional
 * userAgent: optional
 */

async function getData(uid) {
	const data = await client.getPlayer(uid)
	console.log(data)
}

async function getUser(username, buildsProfileIndex) {
	const user = await client.getUser(username, buildsProfileIndex)
	/* buildsProfileIndex is the index of the profile to access the character builds. For example: if you have 2 profiles, to access the 1st one the index will be 0 and to access the 2nd one will be 1 */
	
	/* To get the profiles */
	const profiles = user.getProfiles()
	/* To get the characters id of the profile */
	const charactersId = user.characters
	/* To get the builds of a character using the id */
	const characterBuilds = user.getCharacterBuilds(charactersId[0])
}

const { AssetNameFinder } = require('enkanetwork.js')

const finder = new AssetNameFinder(options)
/** options:
 * language: optional. English is the default language
 * All in-game languages supported
 */

function getAssetName(nameHash) {
	const name = finder.search(nameHash).value
	console.log(name)
} 

function getCharacterName(nameHash) {
	const name = finder.search(nameHash).value
	console.log(name) 
}

const { AssetImageFinder } = require('enkanetwork.js')

const imgFinder = new AssetImageFinder()

function getCharacterImage(id) {
	const image = finder.character(id).icon
	console.log(image) 
}

function getAssetImageLink(iconName) {
	const url = finder.toLink(iconName)
	console.log(url) // Output: https://enka.network/ui/UI_AvatarIcon_Xiao.png
}

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