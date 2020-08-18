<template>
  <div class="team-container">
    <div class="team-no" v-if="teamNo">
      <span>{{ teamNo }}</span>
    </div>
    <div class="team-detail">
      <Record :record="team" />
    </div>
  </div>
</template>

<script>
import Record from './Record.vue'

export default {
  name: 'Team',
  components: { Record },
  props: {
    team: Array,
    teamNo: String,
  },
}
</script>

<style scoped>
.team-container {
  margin-left: 5px;
  display: flex;
}

.team-no {
  margin-top: 53.5px;
  font-size: 20px;
  color: rgb(145, 145, 146);
}

.team-detail {
  display: flex;
  flex-direction: column;
}
</style>
