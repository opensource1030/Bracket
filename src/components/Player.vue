<template>
  <div :class="getPlayerClass()">
    <div :class="getPlayerScoreClass()">
      <span>{{ player.score }}</span>
    </div>
    <div :class="getPlayerInfoClass()">
      <div class="player-name" v-if="player.name">
        <span>{{ player.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Player",
  props: {
    player: Object,
    playerType: String,
  },
  methods: {
    getPlayerClass: function () {
      return "player-container " + this.playerType;
    },
    getPlayerScoreClass: function () {
      return "player-score " + this.playerType + "-start ";
    },
    getPlayerInfoClass: function () {
      return "player-info " + this.playerType + "-end";
    },
  },
};
</script>

<style scoped>
.player-container {
  width: 340px;
  height: 50px;
  display: flex;
}

.player-info {
  width: calc(100% - 60px);
  display: flex;
  align-items: center;
  background-color: rgba(88, 89, 94);
}

.player-name {
  color: white;
  font-size: 20px;
  margin-left: 10px;
}

.player-score {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  font-size: 20px;
  background-color: rgb(131, 133, 140);
}

.first-player {
  border-bottom: 1px solid #000;
}

.first-player-start {
  border-top-left-radius: 15px;
}

.first-player-end {
  border-top-right-radius: 15px;
}

.second-player-start {
  border-bottom-left-radius: 15px;
}

.second-player-end {
  border-bottom-right-radius: 15px;
}

.winner {
  background-color: rgb(255, 127, 39);
}
</style>
