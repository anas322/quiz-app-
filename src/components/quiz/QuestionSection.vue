<template>
  <header>
    <h1>{{ question }}</h1>
    <span>select the right choice</span>
  </header>
  <ul>
    <li v-for="(opt, index) in options" :key="opt">
      <input
        type="radio"
        :id="`answer${index}`"
        @change="handleAnswer"
        v-model="picked"
        :value="opt"
      />
      <label :for="`answer${index}`"> {{ opt }} </label>
    </li>
  </ul>
  <button @click="nextQuestion" :disabled="isDisabled">{{ buttonText }}</button>
</template>

<script>
export default {
  props: ["id", "question", "answer", "options"],
  emits: ["nextQuestion"],
  data() {
    return {
      picked: null,
    };
  },
  computed: {
    buttonText() {
      return this.$store.getters.getSize == this.id ? "Finish" : "Next";
    },
    isDisabled() {
      return this.picked ? false : true;
    },
  },
  methods: {
    nextQuestion() {
      if (this.picked) {
        const isFinish = this.buttonText == "Finish" ? true : false;
        const payload = {
          id: this.id,
          answer: this.picked,
          isFinish,
        };
        this.$emit("nextQuestion", payload);
      }
    },
  },
};
</script>

<style>
h1 {
  font-size: 2.5em;
  text-align: center;
}
span {
  display: block;
  text-align: center;
  color: darkgrey;
}

ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 1rem;
}

ul li {
  font-family: var(--arvo);
  padding: 10px;
  padding-left: 1.3rem;
  background: var(--dark-bg);
  flex: calc(50% - 1rem);
  border-radius: 5px;
}
ul li input:hover,
ul li label:hover {
  cursor: pointer;
}

ul li input {
  height: 22px;
  width: 22px;
}
ul li label {
  font-size: 1.8rem;
  padding-left: 1rem;
}
button {
  width: 17%;
  align-self: flex-end;
  padding: 8px;
  border: none;
  background: #2c3e50;
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;
}
/* disabled button style  */
button:disabled,
button[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
}
</style>
