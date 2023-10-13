// router.js
import { createRouter, createWebHistory } from 'vue-router';
import RecipePost from '@/components/RecipePost.vue';
import GetData from '@/components/GetData.vue';
import RecipeDetailView from "./views/RecipeDetailView.vue";
import RecipeCategoryView from './views/RecipeCategoryView.vue';
import SearchView from './views/SearchView.vue';

const routes = [
    {
        path: '/',
        name: 'get-data',
        component: GetData,
    },
    {
        path: '/recipe/:id', // This route matches the button click in RecipePost.vue
        name: 'recipe-post',
        component: RecipePost,
        props: true,
    },
    {
        path: '/recipe-detail/:id', // This route should match the URL update
        name: "recipe-detail",
        component: RecipeDetailView,
        props: true
    },
    {
        path: '/category/:id', 
        name: "recipe-category",
        component: RecipeCategoryView,
    },
    {
        path: '/search/:query', 
        name: "search",
        component: SearchView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;