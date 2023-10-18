<template>
    <h1>Sökresultat</h1>
    <div class="card-container">
        <RecipePost v-for="recipe in recipes" :key="recipe.id" :post="recipe"></RecipePost>
    </div>
</template>

<script>
import RecipePost from "../components/RecipePost.vue";
export default {
    data() {
        return {
            recipes: [],
        }
    },
    methods: {
        async searchRecipes() {
            const res = await fetch(`https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes?query=${this.$route.params.query}`)
            const data = await res.json()

            this.recipes = data;
            console.log(this.recipes)
        }
    },
    components: {
        RecipePost
    },
    watch: {
        $route() {
            this.searchRecipes()
        }
    },
    created() {
        this.searchRecipes()
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
}

@media (min-width: 768px) {
    .card-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 5rem 20rem;
    }
}
</style>