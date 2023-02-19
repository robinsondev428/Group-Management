<template>
  <div class="w-3/4 relative overflow-x-auto shadow-md sm:rounded-lg m-5">
    <h1 class="mx-5 mb-2 text-2xl font-sans text-cyan-600">Daily Drinking Salt Water</h1>
    <hr class="mb-1">
    <table class="w-full text-base text-left text-gray-500 dark:text-gray-400">
      <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Number
          </th>
          <th scope="col" class="px-6 py-3">
            Name
          </th>
          <th scope="col" class="px-6 py-3" v-for="date in dates">
            {{ date }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" v-for="item in items">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            1
          </th>
          <td class="px-6 py-4">
            {{ item.name }}
          </td>
          <td class="px-6 py-4" v-for="result in item.result">
            <div class="flex items-center mb-4">
              <input :checked="result.status"  @click="updateStatus" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

export default {
  name: "SaltWater",

  setup() {
    const items = ref([
      {
        name: "DengTiger",
        result: [
          { date: "February 1st", status: true },
          { date: "February 2nd", status: false },
        ],
      },
      {
        name: "Kisame",
        result: [
          { date: "February 1st", status: false },
          { date: "February 2nd", status: true },
        ],
      },
    ]);

    const dates = computed(()=>{
      const dateArray= [];
      const element = items.value[0];
      for (let i = 0; i < element.result.length; i++) {
        dateArray.push(element.result[i].date);
      }
      return dateArray;
    });

    const updateStatus=()=>{

    }
    return {
      items,
      dates,
    };
  }

}
</script>