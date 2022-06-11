<template>
  <div id="character-bar">
    <div>
      <b-avatar></b-avatar>
    </div>
    <div id="character-name">
      {{ character.name }} - {{ character.region_id }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: {
        name: 'Name',
      }
    }
  },
  async fetch() {
    this.character = await this.$axios.$get('/api/v1/characters/1');
  }
}
</script>

<style>
#character-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.4rem;
    background-color: #eeeeee;
}
#character-name {
    padding-left: 1rem;
}
</style>