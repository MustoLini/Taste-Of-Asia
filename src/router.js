// router.js
import { createRouter, createWebHistory } from 'vue-router';
import RecipePost from '@/components/RecipePost.vue';
import GetData from '@/components/GetData.vue';


const routes = [
    {
        path: '/',
        component: GetData,
    },
    {
        path: '/recipe/:id',
        component: RecipePost,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;