import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/HomePage.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../pages/HomePage.vue'),
		},
		{
			path: '/modpacks',
			name: 'modpacks',
			component: () => import('../pages/modpacks/ModpackList.vue'),
		},
		{
			path: '/mods',
			name: 'mods',
			component: () => import('../pages/mods/ModList.vue'),
		},
		{
			path: '/respacks',
			name: 'respacks',
			component: () => import('../pages/respacks/RespackList.vue'),
		},
	],
});

export default router;
