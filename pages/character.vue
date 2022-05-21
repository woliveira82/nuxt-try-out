<template>
  <div>
    <div>
      <h2>Character</h2>
    </div>
    <div>
      <ul>
        <li v-for="values, key in character">
          <b>{{ key }}:</b> {{ values }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Try-out | Character'
    }
  },
  async asyncData({ $axios }) {
    const character = await $axios.$get('/api/v1/characters/1');
    return { character: character };
  }
}
</script>
