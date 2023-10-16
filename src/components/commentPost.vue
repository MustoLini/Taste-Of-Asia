<template>
  <div>
    <input type="text" v-model="author">
    <textarea v-model="commentText" placeholder="Write your comment"></textarea>
    <button @click="addComment">Add Comment</button>
  </div>
</template>

<script>
export default {

  data() {
    return {
      author: "",
      commentText: "",
    }
  }, props: ['recipeId'],
  created() {
    this.getComments();
  }, methods: {
    async addComment() {
      console.log("Test 1")
      const comment = {
        comment: this.commentText,
        name: this.author,
      };

      try {
        await fetch(`https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes/${this.recipeId}/comments`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(comment)
        })
        this.$emit("add-comment", comment);

        this.author="";
        this.commentText = "";
      } catch (error) {
        console.error("Error Adding comment:", error)
      }
    },
    async getComments(){
      try {
        const res= await fetch(`https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes/${this.recipeId}/comments`);
        const data = await res.json();
        this.comments=data;
      }catch (error) {
        console.error("Error fetching comments:", error);
      }
    }
  }


}
</script>

<style scoped>

</style>