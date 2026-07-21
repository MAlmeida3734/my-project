import CounterPage from "@/modules/samples/pages/CounterPage.vue";
import CounterPiniaPage from "@/modules/samples/pages/CounterPiniaPage.vue";
import HomePage from "@/modules/samples/pages/HomePage.vue";
import AppLayout from "@/shared/layouts/AppLayout.vue";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
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
             {
                path:"counter/pinia",
                component: CounterPiniaPage,
            },
        ],
    },
];