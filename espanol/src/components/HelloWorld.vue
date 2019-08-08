

<template>

<div v-drag-and-drop:options="options" id='container'>


<div class='start-box' v-for="image in images" :key="image.id">
 <img :id="image.id" :src="image.url" :alt="image.alt" :key="image.id" />
</div>


<div class='answer-box'  v-for="name in names" :key="name.id" >
{{name.name}}
</div>

  </div>

</template>

<script>
export default {
  name: "HelloWorld",
  // props: {
  //   msg: String
  // },
  data() {
    // const componentInstance = this;

    return {
      images: [
        {
          id: 1,
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
          console.log("this is event", event);

          console.log("this is the drop target", event.droptarget);

          event.droptarget.appendChild(
            document.getElementById(event.items[0].id)
          );
        },
        onDragstart(event) {
          console.log("ondragstart");
        },
        onDragend(event) {
          console.log("ondrag");
        }
      }
    };
  }
  // methods: {
  //   someDummyMethod() {
  //     console.log('Hello from someDummyMethod');
  //   }
  //   }
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
img {
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

.answer-box{
  padding-top: 20px;
  border-radius: 25px;

}

.start-box{
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
}
</style>
