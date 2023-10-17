<template>
  <div>
    <input type="text" v-model="author" placeholder="Author">
    <textarea v-model="commentText" placeholder="Write your comment"></textarea>
    <button @click="addComment" :disabled="isSubmitDisabled">Add Comment</button>
    <p v-if="showThankYouMessage" class="thank-you">Thank you for your comment!</p>
  </div>

  <div v-for="comment in comments" :key="comment.createdAt">
    <p>{{ comment.name }}</p>
    <p>{{ comment.comment }}</p>
    <p>{{ comment.createdAt }}</p>
  </div>
</template>

<script>
export default {

  data() {
    return {
      author: "",
      commentText: "",
      createdAt: "",
      comments: [],
      validationError: "",
      showThankYouMessage: false,
    }
  },
  props: ['recipeId'],

  created() {
    this.getComments();
  },computed:{
    isSubmitDisabled(){
      return !this.author.trim()|| !this.commentText.trim()
    }

  },

  methods: {
    async addComment() {
      if (!this.author||!this.commentText){
        this.validationError="Both author and comment text are required";
        return;
      }
      this.validationError = "";
   
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
        this.showThankYouMessage = true;
        this.getComments();

        this.author = "";
        this.commentText = "";
      } catch (error) {
        console.error("Error Adding comment:", error)
      }
    },

    async getComments() {
      console.log("Fetching Comments")
      try {
        const res = await fetch(`https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes/${this.recipeId}/comments`);
        const data = await res.json();
        // console.log(data)
        this.comments = data;
        console.log(this.comments)
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }
  }


}
</script>

<style scoped></style>