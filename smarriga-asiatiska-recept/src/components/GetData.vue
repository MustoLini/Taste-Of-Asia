<template>
  <div id="recipeBox" v-for="singlePost in post" :key="singlePost.id">
    <h2> {{ singlePost.title }}</h2>
    <p> {{singlePost.description}}</p>
    <p> {{singlePost.timeInMins}}</p>
    <p>{{singlePost.ingredients.length}}</p>
    <img :src="url + trans + post.imageUrl">
    <p {{specifcPost.title }}></p>
  </div>

</template>
<script>
const baseURL = "https://jau22-recept-grupp4-xzvarhmra742.reky.se";
export default {
  data() {
    return {
      post: null,
      specifcPost: null
    };
  },
  async created() {
    await this.getPosts();
  },
  methods: {
    async getPosts() {
      await fetch(`${baseURL}/recipes`)
          .then(response => response.json())
          .then(data => {
            this.post = data
            console.log(data)
          })
    },

  async getPostsById(){
    const id = this.$refs.get_id.value;
    if (id){
      await fetch(`${baseURL}/recipes/${id}`)
      .then(response => response.json())
      .then(data=> {
        this.specifcPost = data
        console.log(data);
      })
    }
  }
  }
}
</script>
