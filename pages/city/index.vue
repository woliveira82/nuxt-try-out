<template>
  <div>
    <div>
      <h2>City</h2>
    </div>
    <div>
      <ul>
        <li v-for="region in regions">
        <NuxtLink :to="{ 
          name: 'city-region', 
          params: { region: region.name, v: region } 
        }">
          {{ region.name }}
        </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      regions: []
    }
  },
  head() {
    return {
      title: 'Try-out | City'
    }
  },
  async asyncData({ $axios }) {
    const regions_list = await $axios.$get('/api/v1/regions');
    return { regions: regions_list };
  }
}
</script>
