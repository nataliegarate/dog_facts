

<template>

<div v-drag-and-drop:options="options" id='container'>

<div id = 'starter-box-container'>
  <div class='start-box' v-for="image in images" :key="image.imageUrl">
    <img :id="image.id" :src="image.imageUrl" :alt="image.alt" :key="image.id" class='images' />
  </div>
</div>

<div id = 'answer-box-container'>
  <div class='answer-box' v-for="name in names" :key="name.name" >
    <div class='name' :id ="name.id" :key="name.name" >{{name.name}} </div>
  </div>
</div>


<div id= 'button-container'>
  <button :disabled="stillDragging" v-on:click="handleClick">Check My Answer</button>
</div>



<div id='feedback' v-if=clicked>

  <div  v-if=result>
    <h1 class="won">You did it!</h1>
    <img src = 'http://www.scalsys.com/backgrounds/doge-white-background/doge-white-background_844858.jpg'>
  </div>

  <div v-else-if=!result>
    <h1> Oh noes! </h1>
    <img src= 'https://pbs.twimg.com/media/CqAx3eFWgAAk2qd.png'>
  </div>
  <button v-on:click='playAgain'> Play Again</button>
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
  name: "HelloWorld",
  data() {
    return {
      result: false,
      clicked: false,
      stillDragging: true,
      images: [],
      names: [],
      options: {
        dropzoneSelector: ".answer-box, .start-box ",
        draggableSelector: "img",
        showDropzoneAreas: true,
        multipleDropzonesItemsDraggingEnabled: false,
        onDragend(event) {
          const startBox = [...document.getElementsByClassName("start-box")];
          const answerBox = [...document.getElementsByClassName("answer-box")];

          console.log(event.droptarget.className)
          console.log(answerBox[3])

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
      const yo = db.collection("dogs");
      const result = await yo.get();
      result.forEach(doc => {
        this.images.push({ id: doc.id, imageUrl: doc.data().imageUrl });
      });
      this.images = shuffle(this.images);

      this.images = shuffle(this.images);
      result.forEach(doc => {
        this.names.push({ id: doc.id, name: doc.data().name });
      });
      this.names = shuffle(this.names);
    },
    handleClick() {
      this.clicked = true;
      const images = [...document.getElementsByClassName("images")];
      const name = [...document.getElementsByClassName("name")];
      const answerBox = [...document.getElementsByClassName("answer-box")];
      this.stillDragging = true;
      for (let i = 0; i < answerBox.length; i++) {
        if (name[i].id !== images[i].id) {
          var wrong = document.createElement("h1");
          wrong.innerHTML = "WRONG";
          answerBox[i].appendChild(wrong);
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
      this.names = shuffle(this.names);
      this.images = shuffle(this.images);
      this.result = false;
      this.clicked = false;
      this.stillDragging = true;
      const startBox = [...document.getElementsByClassName("start-box")];
      const images = [...document.getElementsByClassName("images")];
      const answerBox = [...document.getElementsByClassName("answer-box")];
      startBox.map((box, i) => box.appendChild(images[i]));
      answerBox.map((box, i) => console.log(box.childNodes));

      for (let i = 0; i < answerBox.length; i++) {
        if (answerBox[i].childNodes.length > 1) {
          console.log(answerBox[i].childNodes[1]);
          answerBox[i].removeChild(answerBox[i].childNodes[1]);
        }
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

img, .won {
  height: 110px;
  border-radius: 25px;
}

a {
  color: #42b983;
}

.answer-box,
.start-box {
  height: 150px;
  width: 200px;
  background-color: #42b983;
  margin-left: 10px;
  margin-right: 10px;
}

.answer-box {
  padding-top: 20px;
  border-radius: 25px;
}

.start-box {
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 40px;
  margin-bottom: 50px;
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
#answer-box-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
  margin-bottom: 20px;
}

#answer-box-container {
  margin-bottom: 30px;
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

.won {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 1s;

  /* When the animation is finished, start again */
  animation-iteration-count: 1;
}

h1 {
  margin-bottom: 0px;
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
