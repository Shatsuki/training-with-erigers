<template>
  <div id="mainDiv">
    <button v-show="button" id="outerButton" @click="toggle1">Start</button>
    <div v-show="isActive" id="dataBlock">
      <h1>Full-View Match Data</h1>
      <div class="infovDi">
        <h2 id="innerText1">Select as Match of the Day</h2>
        <div>
          <img id="icon1" src="../static/checkmark-circle-2-outline.svg" />
        </div>
      </div>
      <h3 class="innerTitle">Update Final Result</h3>
      <div class="infoDiv">
        <img
          id="logo1"
          class="teamLogo"
          src="https://media.discordapp.net/attachments/765526099924877332/773221705153904690/manchester_united.png"
        />
        <div class="result">
          <h2>1 : 1</h2>
        </div>
        <img
          class="teamLogo"
          src="https://media.discordapp.net/attachments/765526099924877332/773221705153904690/manchester_united.png"
        />
        <img id="icon2" src="../static/cloud-upload-outline.svg" />
      </div>
      <h3 class="innerTitle">Update Start Date Time</h3>
      <div id="lastInnerDiv" class="infoDiv">
        <h3 id="innerText2">xx / xx / xx - xx : xx</h3>
        <a href="/">
          <img id="icon3" src="../static/cloud-upload-outline.svg" />
        </a>
      </div>
      <button id="innerButton" @click="toggle2">Close Full View</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      button: true,
    }
  },
  methods: {
    toggle2() {
      this.isActive = false
      this.button = true
    },
    toggle1() {
      this.isActive = true
      this.button = false
    },
  },
}
</script>
<style>
html {
  width: 100vw;
  height: 100vh;
  background-color: rgb(20, 20, 20);
  color: white;
}
#dataBlock {
  border-radius: 10px;
  width: 850px;
  height: 850px;
  background-color: rgb(38, 75, 84);
  margin: 10% auto;
  text-align: center;
}
.infoDiv {
  border-radius: 5px;
  background-color: rgb(25, 48, 61);
}
h1 {
  padding: 5% 0;
}
.innerTitle {
  padding-top: 5%;
}
.result {
  padding: 7% 10%;
  float: left;
}
.teamLogo {
  float: left;
}
.infoDiv::after {
  content: '';
  clear: both;
  display: table;
}
#logo1 {
  padding-left: 20%;
}
#outerButton {
  background-color: white;
  outline: none;
  margin-top: 25%;
  margin-left: 47%;
}
#outerButton:hover {
  background-color: gray;
}
#innerButton {
  background-color: white;
  outline: none;
}
#innerButton:hover {
  background-color: gray;
}
#lastInnerDiv {
  margin-bottom: 5%;
}
#innerText1 {
  float: left;
  margin-left: 32%;
}
#innerText2 {
  float: left;
  margin-left: 40%;
  margin-top: 1%;
}
#icon1 {
  width: 50px;
  background-color: rgb(73, 93, 245);
  border-radius: 5px;
}
#icon2 {
  width: 50px;
  background-color: rgb(247, 72, 209);
  margin-top: 7%;
  border-radius: 5px;
}
#icon3 {
  width: 50px;
  background-color: rgb(247, 72, 209);
  margin-top: auto;
  border-radius: 5px;
}
#icon1:hover {
  background-color: rgb(40, 60, 200);
}
#icon2:hover {
  background-color: rgb(200, 50, 170);
}
#icon3:hover {
  background-color: rgb(200, 50, 170);
}
</style>
