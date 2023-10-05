// router.js
import { createRouter, createWebHistory } from 'vue-router';
import RecipePost from '@/components/RecipePost.vue';
import GetData from '@/components/GetData.vue';
import RecipeDetail from "@/components/RecipeDetail.vue";


const routes = [
    {
        path: '/',
        component: GetData,
    },
    {
        path: '/recipe/:id',
        name: 'recipe-post',
        component: RecipePost,
        props: true,
    },
    {
        path: '/recipe-detail/:id',
        name: "recipe-detail",
        component: RecipeDetail,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;