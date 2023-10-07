<template>
    <div>
        <h1>{{ this.category }}</h1>
        <RecipeCard class="test" v-for="post in chosenCategoryPosts" :key="post.id">
            <div class="recipe-post">
                <img src="../assets/img/vietnamesisk_glasnudelsallad_med_rakor.jpg" alt="placeholder">
                <h2> {{ post.title }}</h2>
                <!-- Remove this when rating logic is in place -->
                <div class="rating">
                    <i class="material-icons">star</i>
                    <i class="material-icons">star</i>
                    <i class="material-icons">star</i>
                    <i class="material-icons">star</i>
                </div>
                <div class="recipe-summary">
                    <div class="recipe-info">
                        <i class="material-icons">schedule</i>
                        <p>{{ `${post.timeInMins} Minutes` }}</p>
                    </div>
                    <div class="recipe-info">
                        <i class="material-icons">article</i>
                        <p>{{ "Ingredients: " + post.ingredients.length }}</p>
                    </div>
                </div>
            </div>
        </RecipeCard>
    </div>
</template>

<script>
import RecipeCard from "../components/RecipeCard.vue";
export default {
    // inject: ['allPosts'],
    data() {
        return {
            posts: [],
            chosenCategoryPosts: [],
            category: '',
        }
    },
    created() {
        this.getData()
        this.category = this.$route.params.id
    },
    watch: {
        $route(newRoute) {
            this.category = newRoute.params.id
            this.filterPosts(this.category)
        }
    },
    methods: {
        async getData() {
            const res = await fetch('https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes');
            const data = await res.json();
            this.posts = data;

            this.filterPosts(this.category)

        },
        filterPosts(category) {
            this.chosenCategoryPosts = this.posts.filter(post => post.categories[0].toLowerCase() === category)
        }
    },
    components: {
        RecipeCard
    }
}
</script>

<style scoped>
.rating {
    padding: 0.2rem 1rem
}

.recipe-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.4rem;
    background-color: rgba(13, 39, 7, 0.128);
}

.recipe-info {
    display: flex;
    align-items: center;
}

img {
    max-width: 100%;
}

h1 {
    text-align: center;
}

h2 {
    font-size: 1rem;
    font-weight: 500;
    padding: 0.3rem 1.2rem;
}
</style>