<template>
  <section>
    <main>
      <header>
        <h1>what is the difference between let, const and var ?</h1>
        <span>select the right choice</span>
      </header>
      <ul>
        <li>
          <input type="radio" name="answer" id="answer" />
          <label for="answer"> This is the answer block. </label>
        </li>
        <li>
          <input type="radio" name="answer" id="answer" />
          <label for="answer"> This is the answer block. </label>
        </li>
        <li>
          <input type="radio" name="answer" id="answer" />
          <label for="answer"> This is the answer block. </label>
        </li>
        <li>
          <input type="radio" name="answer" id="answer" />
          <label for="answer"> This is the answer block. </label>
        </li>
      </ul>
      <button>Next</button>
    </main>
    <div class="wave">
      <wave-svg></wave-svg>
    </div>
  </section>
</template>

<script>
export default {};
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

ul li input {
  height: 22px;
  width: 22px;
}
ul li label {
  font-size: 1.8rem;
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
</style>
