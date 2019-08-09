

<template>

<div v-drag-and-drop:options="options" id='container'>

<div id = 'starter-box-container'>
<div class='start-box' v-for="image in images" :key="image.id">
 <img :id="image.name" :src="image.url" :alt="image.alt" :key="image.id" class='images' />
</div>
</div>

<div id = 'answer-box-container'>
<div class='answer-box'  v-for="name in names" :key="name.id" >
<div class='name'>{{name.name}}</div>
</div>
</div>
<div id= 'button-container'>
<button :disabled="stillDragging" v-on:click="handleClick">Check My Answer</button>
</div>

<div id='feedback' v-if=clicked>
  <h1 v-if=result class="won">Congrations!!!</h1>

  <h1 v-else-if=!result>Incorrect!</h1>
  <button v-on:click='playAgain'> Play Again</button>
</div>
  </div>



</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      result: false,
      clicked: false,
      stillDragging: true,
      images: [
        {
          id: 1,
          name: "Labrador Retriever",
          url:
            "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231410/Labrador-Retriever-On-White-01.jpg",
          alt: "lorem-ipsum"
        },
        {
          id: 2,
          name: "German Pinscher",
          url:
            "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12233117/German-Pinscher-On-White-01.jpg"
        },
        {
          id: 3,
          name: "German Shepard",
          url:
            "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213218/German-Shepherd-on-White-00.jpg"
        },
        {
          id: 4,
          name: "Rat Terrier",
          url:
            "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225148/Rat-Terrier-On-White-01.jpg"
        }
      ],
      names: [
        { id: 1, name: "Labrador Retriever" },
        { id: 2, name: "German Pinscher" },
        { id: 3, name: "German Shepard" },
        { id: 4, name: "Rat Terrier" }
      ],
      options: {
        dropzoneSelector: ".answer-box, .start-box ",
        draggableSelector: "img",
        showDropzoneAreas: true,
        multipleDropzonesItemsDraggingEnabled: true,
        onDrop(event) {
          event.droptarget.appendChild(
            document.getElementById(event.items[0].id)
          );
          this.finished()
        }
      }
    };
  },
  methods: {
    handleClick() {
      this.clicked = true;
      const images = [...document.getElementsByClassName("images")];
      const name = [...document.getElementsByClassName("name")];
      for (let i = 0; i < name.length; i++) {
        if (name[i].innerHTML !== images[i].id) {
          this.result = false;
          return false;
        }
        this.result = true;
        return true;
      }
    },
    finished() {
      const startBox = [...document.getElementsByClassName("start-box")];
      for (let i = 0; i < startBox.length; i++) {
        if (startBox[i].childNodes.length) {
          return this.stillDragging = true;
        }
      }
      return this.stillDragging = false;
    },
    playAgain() {
      const startBox = [...document.getElementsByClassName('start-box')];
      const images = [...document.getElementsByClassName("images")];
      startBox.map((box, i) => (box.appendChild(document.getElementById(images[i].id))))
      this.clicked = false;
      this.stillDragging = true;
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
  /* height: 500px */
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
  /* border-style: solid; */
  background-color: #42b983;
}

.answer-box {
  padding-top: 20px;
  border-radius: 25px;
   border-style: solid;
   border-width: 1px;

  border-color: #2c3e50;
}

.start-box {
     border-width: 1px;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 40px;
  margin-bottom: 50px;
  border-radius: 25px;
  border-style: solid;
  border-color: #2c3e50;

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
:disabled{
  background-color: lightgray;
}

.won {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 1s;

  /* When the animation is finished, start again */
  animation-iteration-count: 1;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
