<template>
  <div class="bracket-item">
    <div :class="getBracketClass(rounds)">
      <Team :team="rounds.team" :teamNo="rounds.teamNo" />
    </div>
    <div
      class="bracket-item-children"
      v-if="rounds.teams[0] || rounds.teams[1]"
    >
      <div class="bracket-item-child" v-if="rounds.teams[0]">
        <Bracket :rounds="rounds.teams[0]" />
      </div>
      <div class="bracket-item-child" v-if="rounds.teams[1]">
        <Bracket :rounds="rounds.teams[1]" />
      </div>
    </div>
  </div>
</template>

<script>
import Team from './Team.vue'

export default {
  name: 'Bracket',
  components: { Team },
  props: {
    rounds: Object,
  },
  methods: {
    getBracketClass(rounds) {
      if (rounds.teams[0] || rounds.teams[1]) {
        return 'bracket-item-parent'
      }

      if (rounds.hasParent) {
        return 'bracket-item-child'
      }

      return ''
    },
  },
}
</script>

<style scoped>
.bracket-item {
  display: flex;
  flex-direction: row-reverse;
}

.bracket-item-parent {
  position: relative;
  margin-left: 50px;
  display: flex;
  align-items: center;
}

.bracket-item-parent:after {
  position: absolute;
  content: '';
  width: 25px;
  height: 4px;
  left: 0;
  top: calc(50% + 5px);
  background-color: gray;
  transform: translateX(-100%);
}

.bracket-item-children {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bracket-item-child {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
}

.bracket-item-child:before {
  content: '';
  position: absolute;
  background-color: gray;
  right: 0;
  top: calc(50% + 5px);
  transform: translateX(100%);
  width: 25px;
  height: 4px;
}

.bracket-item-child:after {
  content: '';
  position: absolute;
  background-color: gray;
  right: -25px;
  height: calc(50% + 22px);
  width: 4px;
  top: calc(50% + 5px);
}

.bracket-item-child:last-child:after {
  transform: translateY(-100%);
}

.bracket-item-child:only-child:after {
  display: none;
}
</style>
