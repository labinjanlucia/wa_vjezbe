<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

let proizvodi = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3002/proizvodi'); 
    proizvodi.value = response.data;
  } catch (error) {
    console.error('Greška u dohvatu proizvoda: ', error);
  }
});

const goToDetails = (id) => {
  window.location.href = `/proizvodi/${id}`;
};
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Proizvodi</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="proizvod in proizvodi"
        :key="proizvod.id"
        class="border rounded-lg shadow-md p-4"
      >
        <img :src="proizvod.slike[0]" alt="Product Image" class="h-40 w-full object-cover rounded mb-4" />
        <h2 class="text-lg font-bold">{{ proizvod.naziv }}</h2>
        <p class="text-gray-600 mb-2">Cijena: {{ proizvod.cijena }}€</p>
        <button
          @click="goToDetails(proizvod.id)"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Detalji
        </button>
      </div>
    </div>
  </div>
</template>
