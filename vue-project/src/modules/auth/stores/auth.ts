import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { User } from "../model/user";



export const useAuthStore = defineStore("auth", () =>{
    const user = ref<User | null>(null);
    const isLoading = ref(false);
    const isAuthenticated = computed(() => !!user.value);

    async function login(email: string, password: string) {
        try {
            isLoading.value = true;
            await new Promise((resolve) => setTimeout(resolve, 3000));
            user.value = {
                id: "1",
                name: "Marco",
                email: email,
            };
        } finally {
            isLoading.value = false;
        }
    }

    async function logout(){
        try {
            isLoading.value = true;
            await new Promise((resolve) => setTimeout(resolve, 1000));
            user.value = null;
        } finally {
            isLoading.value = false;
        }
    } 

    return{
        user,
        isLoading,
        isAuthenticated,
        login,
        logout,
    };
});
