<template>
  <div class="container">
    <h1>Tienda 32 Bits</h1>
    <h2>Lista de juegos</h2>
    <table class="games-table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in games" :key="game.codigo">
          <td>{{ game.codigo }}</td>
          <td>{{ game.nombre }}</td>
          <td>{{ game.stock }}</td>
          <td>{{ formatPrice(game.precio) }}</td>
          <td>
            <button @click="decreaseStock(game.codigo)">-</button>
            <button @click="increaseStock(game.codigo)">+</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      games: (state) => state.games,
    }),
  },
  methods: {
    ...mapActions(['modifyStock']),
    increaseStock(codigo) {
      this.modifyStock({ gameId: codigo, quantity: 1 });
    },
    decreaseStock(codigo) {
      this.modifyStock({ gameId: codigo, quantity: -1 });
    },
    formatPrice(value) {
      return new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
      }).format(value);
    }
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 24px;
  font-weight: bold;
}

h2 {
  font-size: 18px;
  margin-bottom: 20px;
}

.games-table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  font-size: 16px;
}

.games-table th,
.games-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.games-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

button {
  width: 30px;
  height: 30px;
  font-size: 16px;
  margin: 0 5px;
  cursor: pointer;
}
</style>
