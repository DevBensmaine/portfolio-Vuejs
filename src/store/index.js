import Vue from "vue";
import Vuex from "vuex";
// import { getHeros } from "../shared/data";

Vue.use(Vuex);


const state = {
  heroes:  []

}
  


const mutations = {
  // getHeroes(state, heroes) {
  //   state.heroes = heroes;
  // },

  //  getHeroes() {
  //   state.heroes = async function() {
  //     return await getHeros()
  //   }
  // }
  
};
const actions = {
  async getHeroesAction( ) {
    // // const heros = await getHeros.getHeros();
    // console.log("test hassan");
    // commit("getHeroes", heros);
  },
};
const modules = {};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
});
