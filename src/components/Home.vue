<template>

<div>

 <h3> Increase your dog knowledge here! </h3>

 <div>
<img id ='many-dogs' src= 'http://www.texastownship.org/wp-content/uploads/2015/12/Group-of-12-Dogs_9889235_m.jpg'/>
</div>

 <h3>Simply drag the dog's image to it's breed name.</h3>

  <img id='arrow' src= 'https://cdn1.iconfinder.com/data/icons/line-arrow-hand-draw/64/arrow_hand_draw_line-03-512.png'>

 <br>

 <h3>You'll be an expert in no time!</h3>
<router-link to='/easy'><button>Get Started</button></router-link>



</div>
</template>



<script>
export default {
  name: "Home",
  data () {
    return {};
  },
  methods: {}
}
</script>

<style>
#many-dogs{
  height: 200px;
}

#arrow {
  height: 50px;
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

</style>
