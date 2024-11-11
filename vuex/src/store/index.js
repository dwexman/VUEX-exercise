import { createStore } from 'vuex';
import juegosData from '../data/juegos.json';

const store = createStore({
  state() {
    return {
      games: juegosData
    };
  },
  mutations: {
    UPDATE_STOCK(state, { gameId, quantity }) {
      const game = state.games.find((g) => g.codigo === gameId);
      if (game) {
        const currentStock = parseInt(game.stock, 10); // Convierte el stock a número
        const newStock = currentStock + quantity;
        if (newStock >= 0) { // Verifica que el stock no sea negativo
          game.stock = newStock.toString(); // Convierte el stock de vuelta a cadena
        }
      }
    }
  },
  actions: {
    modifyStock({ commit }, payload) {
      commit('UPDATE_STOCK', payload);
    }
  }
});

export default store;
