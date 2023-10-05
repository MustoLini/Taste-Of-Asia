<template>
  <div class="recipe-post">
    <h2> {{ post.title }}</h2>
    <p> {{post.description}}</p>
    <router-link :to="'/recipe/' + post._id">
      <button>Go to Recipe</button>
    </router-link>

    <img src="https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=is&k=20&c=878rwM2GRo5W4nV_Nc21FtF26ZlKre6JM0p7e7mSlN0=" alt="placeholder">
    <p> {{"Time in minutes: " + post.timeInMins}}</p>
    <p>{{"Amount of ingredients: "+  post.ingredients.length}}</p>
  </div>
</template>

<script>
export default {
  props:{
    post: Object
  }

}
</script>
