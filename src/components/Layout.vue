<template>
  <div class="container flex justify-center mt-10 mx-auto" v-if="loading">
    <div class="drink_salt_water">
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-5">
        <img class="w-full" src="../assets/DrinkWater.png" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Drink Salt Water EveryDay</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
            eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 flex justify-center">
          <router-link to="/drink-salt-water" @click="isLoading" class="bg-gray-300 hover:bg-gray-400 justify-center text-gray-800 font-bold py-2 px-4 rounded flex w-full">
            <svg fill="none" width="20px" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-min mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
            </svg>
            <span>Go to...</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="gain_weight">
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-5">
        <img class="w-full" src="../assets/GainWeight.png" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Gain Weight EveryDay</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
            eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 flex justify-center">
          <router-link to="/drink-salt-water" @click="isLoading" class="bg-gray-300 hover:bg-gray-400 justify-center text-gray-800 font-bold py-2 px-4 rounded flex w-full">
            <svg fill="none" width="20px" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-min mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
            </svg>
            <span>Go to...</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="sport_match">
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-5">
        <img class="w-full" src="../assets/SportMatch.png" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Sport Match Management</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
            eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 flex justify-center">
          <router-link to="/drink-salt-water" @click="isLoading" class="bg-gray-300 hover:bg-gray-400 justify-center text-gray-800 font-bold py-2 px-4 rounded flex w-full">
            <svg fill="none" width="20px" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-min mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
            </svg>
            <span>Go to...</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  components: {
    name: "Layout",
  },
  setup(){
    const loading =  ref(true);

    const isLoading = () => !loading;

    return {
      loading
    };
  }
}
</script>
