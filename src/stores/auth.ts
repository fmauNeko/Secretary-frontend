import type { User } from "@/types/User";
import ky from "ky";
import { defineStore } from "pinia";
import { ref, watch } from "vue";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const useAuthStore = defineStore("auth", () => {
  const accessToken = ref<string | null>(null);
  const user = ref<User | null>(null);

  watch(accessToken, async (newAccessToken) => {
    if (!newAccessToken) {
      user.value = null;
    } else {
      try {
        const response = await ky
          .get(`${baseUrl}/users/me`, {
            headers: { Authorization: `Bearer ${accessToken.value}` },
          })
          .json<User>();

        user.value = response;
      } catch (error) {
        accessToken.value = null;
        user.value = null;
      }
    }
  });

  accessToken.value = localStorage.getItem("accessToken");

  async function login(email: string, password: string) {
    const response = await ky
      .post(`${baseUrl}/auth/login`, {
        json: { email, password },
      })
      .json<{ access_token: string }>();

    accessToken.value = response.access_token;
    localStorage.setItem("accessToken", response.access_token);
  }

  function logout(): void {
    accessToken.value = null;
    user.value = null;
  }

  return { accessToken, login, logout, user };
});
