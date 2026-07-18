import AuthPage from "@/modules/auth/pages/AuthPage.vue";
import CounterPage from "@/modules/auth/pages/CounterPage.vue";
import HomePage from "@/modules/samples/pages/HomePage.vue";
import AppLayout from "@/shared/layouts/AppLayout.vue";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path: "/auth",
        component: AuthPage,
    },
    {
        path: "/",
        component: AppLayout,
        children: [
            {
                path:"",
                component: HomePage,
            }, {
                path:"counter",
                component: CounterPage,
            },
        ],
    },
];