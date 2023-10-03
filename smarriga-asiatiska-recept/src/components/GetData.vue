<template>
  <h2 v-for="singlePost in post" :key="singlePost.id"> {{singlePost.title}}</h2>
</template>
<script>
export default{
  data(){
    return{
      post: null
    };
  },
  async created() {
    await this.getPosts();
  },
  methods:{
    async getPosts(){
      await fetch('https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes')
          .then(response => response.json())
          .then(data=>{
            this.post=data
            console.log(data)
          })
    }
  }
}
</script>
