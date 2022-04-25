<template>
  <section>
    <score-model v-if="showResult" :score="score"></score-model>
    <main>
      <question-section
        v-for="q in filteredQ"
        :key="q.id"
        :id="q.id"
        :question="q.question"
        :answer="q.answer"
        :options="q.options"
        @next-question="next"
      ></question-section>
    </main>
    <div class="wave">
      <wave-svg></wave-svg>
    </div>
  </section>
</template>

<script>
import QuestionSection from "./components/quiz/QuestionSection.vue";
import ScoreModel from "./components/quiz/ScoreModel.vue";
export default {
  components: {
    QuestionSection,
    ScoreModel,
  },
  data() {
    return {
      questionNumber: 1,
      score: 0,
      showResult: false,
    };
  },
  computed: {
    filteredQ() {
      return this.$store.getters.getData.filter(
        (q) => q.id == this.questionNumber
      );
    },
  },
  methods: {
    next({ id, answer, isFinish }) {
      const size = this.$store.getters.getSize;
      if (id != size) this.questionNumber = id + 1;

      if (isFinish) {
        this.showResult = true;
      } else {
        //calculate score
        this.calcScore(id, answer);
      }
    },

    calcScore(id, answer) {
      //get the question
      const question = this.$store.getters.getData.filter((q) => q.id == id);

      if (question[0].answer == answer) {
        this.score++;
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Noto+Serif:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap");

:root {
  --bg-color: #f3f5f9;
  --dark-bg: #e5e8ee;
  --roboto: "Roboto", sans-serif;
  --arvo: "Arvo", serif;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Noto Serif", serif;
  color: #2c3e50;
}

section {
  position: relative;
  min-height: 100vh;
  background: var(--bg-color);
  z-index: 1;
}
.wave {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: -999;
}
main {
  display: flex;
  justify-content: space-evenly;
  flex-flow: column wrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 50vh;
}
</style>
