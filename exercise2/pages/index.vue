<template>
  <div id="mainDiv">
    <button id="button" @click="isActive = !isActive">Start</button>
    <div v-show="isActive" id="dataBlock">
      <h1>Full-View Match Data</h1>
      <div class="infoDiv">
        <h2>Select as Match of the Day</h2>
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
      </div>
      <h3 class="innerTitle">Update Start Date Time</h3>
      <div id="lastInnerDiv" class="infoDiv">
        <h3>a</h3>
      </div>
      <button id="button" @click="isActive = !isActive">Close Full View</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    }
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
#button {
  background-color: white;
  outline: none;
}
#button:hover {
  background-color: gray;
}
#lastInnerDiv {
  margin-bottom: 5%;
}
</style>
