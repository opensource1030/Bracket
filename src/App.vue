<template>
  <div id="app">
    <div class="app-header">
      <div class="form-group">
        <div class="form-control">
          <label for="player1-name">Name</label>
          <input type="text" id="player1-name" v-model="player1Name" />
        </div>
        <div class="form-control">
          <label for="player1-score">Score</label>
          <input
            type="number"
            id="player1-score"
            v-model="player1Score"
            min="0"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="form-control">
          <label for="player2-name">Name</label>
          <input type="text" id="player2-name" v-model="player2Name" />
        </div>
        <div class="form-control">
          <label for="player2-score">Score</label>
          <input
            type="number"
            id="player2-score"
            v-model="player2Score"
            min="0"
          />
        </div>
      </div>
      <button type="button" @click="addTeam()" :disabled="isGenerated">
        +
      </button>
    </div>
    <div class="app-body">
      <div class="first-round" v-if="!isGenerated">
        <draggable v-model="brackets[roundNo]">
          <Team
            v-for="(team, index) in brackets[roundNo]"
            :team="Object.values(team)[0]"
            :teamNo="Object.keys(team)[0]"
            :key="index"
          />
        </draggable>
      </div>
      <Bracket :rounds="rounds" v-if="rounds && isGenerated" />
    </div>
    <div class="app-footer">
      <button type="button" @click="generateBracket()" :disabled="isGenerated">
        Generate
      </button>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Bracket from './components/Bracket.vue'
import Team from './components/Team.vue'
import { generateRounds, convertJSON } from './utils'

export default {
  name: 'App',
  components: { Bracket, Team, draggable },
  data: function() {
    return {
      player1Name: '',
      player2Name: '',
      player1Score: 0,
      player2Score: 0,
      brackets: {
        '1': [],
      },
      roundNo: 1,
      teamSize: 0,
      isGenerated: false,
    }
  },
  computed: {
    rounds: function() {
      return generateRounds(convertJSON(this.brackets))
    },
  },
  methods: {
    addTeam: function() {
      this.brackets[this.roundNo].push({
        [++this.teamSize]: [
          {
            name: this.player1Name,
            score: this.player1Score,
          },
          {
            name: this.player2Name,
            score: this.player2Score,
          },
          this.player1Score >= this.player2Score ? 0 : 1,
        ],
      })
    },
    generateBracket: function() {
      while (this.brackets[this.roundNo].length > 1) {
        const roundBracket = convertJSON(this.brackets[this.roundNo])
        const nextBracket = []
        for (let i = 0; i < roundBracket.length; i += 2) {
          nextBracket.push({
            [++this.teamSize]: [{}, {}],
          })
        }
        this.$set(this.brackets, ++this.roundNo, nextBracket)
      }
      this.isGenerated = true
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: anticaliased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app-header {
  display: flex;
  justify-content: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}

.form-control input {
  margin: 5px;
}

.app-body {
  display: flex;
  justify-content: center;
}

.first-round {
  display: flex;
  flex-direction: column;
}

.app-footer {
  margin-top: 10px;
}
</style>
