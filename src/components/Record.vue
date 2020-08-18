<template>
  <div class="record-container">
    <Player :player="record[0]" :playerType="'first-player'" />
    <Player :player="record[1]" :playerType="'second-player'" />
  </div>
</template>

<script>
import Player from './Player.vue'

export default {
  name: 'Record',
  components: { Player },
  props: {
    record: Array,
  },
}
</script>

<style scoped>
.record-container {
  margin-top: 15px;
  margin-left: 50px;
}

.record-container:hover {
  cursor: pointer;
}
</style>
