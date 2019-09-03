

<template>

<div v-drag-and-drop:options="options" id='container'>
  <h3> Level 1 of 3 </h3>

<div id = 'starter-box-container'>
  <div class='start-box' v-for="image in images" :key="image.imageUrl">

    <img :id="image.id" :src="image.imageUrl" :alt="image.alt" :key="image.id" class='images' />

  </div>
</div>

<div id = 'bottom-row'>
<div id = 'answer-box-container' v-for="name in names" :key="name.name">
  <div class='answer-box'>
    <div class='name' :id ="name.id" :key="name.name" >{{name.name}} </div>
  </div>
  <div class='wrong-box'> </div>
</div>
</div>


<div v-if=showCheck id= 'button-container'>
  <button :disabled="stillDragging" v-on:click="handleClick">Check My Answer</button>
</div>



<div id='feedback' v-if=clicked>

  <div  v-if=result>
    <h1 class="won">You did it!</h1>

    <br>
       <router-link to='/medium'> <button> Next Level </button></router-link>


  </div>

  <div v-else-if=!result>
    <img src= 'https://pbs.twimg.com/media/CqAx3eFWgAAk2qd.png'>
      <h1 class= 'lost'> Oh noes! </h1>
      <button v-on:click='playAgain'> Play Again</button>

  </div>


</div>

</div>

</template>

<script>

import { db } from "../firebase";
const shuffle = require("shuffle-array");

export default {
  beforeMount() {
    this.getData();
  },
  name: "Easy",
  data() {
    return {
      stopDrag: true,
      showCheck: true,
      result: false,
      clicked: false,
      stillDragging: true,
      images: [],
      names: [],
      options: {
        dropzoneSelector: ".answer-box, .start-box ",
        draggableSelector: ".images",
        // showDropzoneAreas: true,
        // multipleDropzonesItemsDraggingEnabled: false,
        onDragend(event) {
          const startBox = [...document.getElementsByClassName("start-box")];
          const answerBox = [...document.getElementsByClassName("answer-box")];
          if (event.droptarget.childNodes.length === 2 && event.droptarget.className === 'answer-box dragover'){
             event.droptarget.appendChild(event.items[0])
          }
          if (event.droptarget.childNodes.length === 1 && event.droptarget.className === 'start-box dragover'){
             event.droptarget.appendChild(event.items[0])
          }
          this.finished();
        }
      }
    };
  },
  methods: {
    async getData() {
      this.images =[];
      this.names = [];
      const yo = db.collection("dogs");
      let result = await yo.get();

      let tempData = [];

      result.forEach(doc => {
      tempData.push({ id: doc.id, imageUrl: doc.data().imageUrl, name: doc.data().name });
      });

      tempData = shuffle(tempData);


      for (let i = 0; i < 4; i++) {
           this.images.push({ id: tempData[i].id, imageUrl: tempData[i].imageUrl});
      }
      this.images = shuffle(this.images);


      for (let i = 0; i < 4; i++) {
           this.names.push({ id: tempData[i].id, name: tempData[i].name });
      }


      this.names = shuffle(this.names);
    },
    handleClick() {
      this.clicked = true;
      const images = [...document.getElementsByClassName("images")];
      const name = [...document.getElementsByClassName("name")];
      const wrongBox = [...document.getElementsByClassName("wrong-box")];
      this.stillDragging = true;
      this.showCheck = false;
      for (let i = 0; i < wrongBox.length; i++) {
        var wrong = document.createElement("p");
        if (name[i].id !== images[i].id) {
          wrong.innerHTML = "<img class='feedback' height=20 src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/240px-Red_X.svg.png'>";
          wrongBox[i].append(wrong);
        } else if (name[i].id === images[i].id){
           wrong.innerHTML = "<img class='feedback'height=20 src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Checkmark_green.svg/417px-Checkmark_green.svg.png'>";
          wrongBox[i].append(wrong);
        }
      }
      for (let i = 0; i < name.length; i++) {
        if (name[i].id !== images[i].id) {
          this.result = false;
          return false;
        }
      }
        this.result = true;
        return true;
    },
    finished() {
      const startBox = [...document.getElementsByClassName("start-box")];
      for (let i = 0; i < startBox.length; i++) {
        if (startBox[i].childNodes.length) {
          return (this.stillDragging = true);
        }
      }
      return (this.stillDragging = false);
    },
    playAgain() {
      this.showCheck = true;
      this.getData()
      this.result = false;
      this.clicked = false;
      this.stillDragging = true;
      const startBox = [...document.getElementsByClassName("start-box")];
      const images = [...document.getElementsByClassName("images")];
      const wrongBox = [...document.getElementsByClassName("wrong-box")];
      startBox.map((box, i) => box.appendChild(images[i]));

      for (let i = 0; i < wrongBox.length; i++) {
        wrongBox[i].innerHTML = ""
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: #42b983;
  padding-top: 50px;
  padding-bottom: 50px;
}

h3 {
  margin: 40px 0 0;
}

img {
  height: 100px;
  border-radius: 25px;
}

a {
  color: #42b983;
}

.answer-box,
.start-box {
  height: 125px;
  width: 175px;
  background-color: #42b983;
  margin-left: 10px;
  margin-right: 10px;
}

.answer-box {
  padding-top: 20px;
  border-radius: 25px;
height: 140px;
}

.start-box {
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 20px;
  /* margin-bottom: 30px; */
  border-radius: 25px;
}

#container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

#starter-box-container,
#bottom-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
  margin-bottom: 20px;
}

button {
  margin: 20px;
  width: 300px;
  font-size: 24px;
  background-color: #2ec4a5;
  color: white;
  margin-bottom: 20px;
  border-color: #2ec4a5;
  border-radius: 15px;
}

:disabled {
  background-color: lightgray;
}

.wrong-box-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0px;
  padding-top: 0px;
  height: 80%
}

.feedback{
  margin: 0px;
}

.won, .lost {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 1s;
  height: 50px;
  /* When the animation is finished, start again */
  animation-iteration-count: 1;
}
h1 {
  margin: 0;
  height: 20px;
}
h3{
  margin: 0px;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
