<template>
  <div>
    <textarea v-model="commentText" placeholder="Write your comment"></textarea>
    <button @click="addComment">Add Comment</button>
  </div>
</template>

<script>
export default {

  data(){
    return{
      commentText:"",
    }
  }, methods:{
    addComment(){
      const comment= {
        text:this.commentText,
        author:"",
        date:new Date().toDateString()
      };
      this.$emit("add-comment",comment);

      this.commentText="";
    }
  }
}
</script>

<style scoped>

</style>