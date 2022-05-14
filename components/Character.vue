<!-- Please remove this file from your project -->
<template>
  <div id="character-bar">
    <div>
      <b-avatar></b-avatar>
    </div>
    <div id="character-name">
      Name 
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ShortCharacter'
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