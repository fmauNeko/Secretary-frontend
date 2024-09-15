<script setup lang="ts">
import bgImage from "@/assets/images/login-bg.jpg";
import { useAuthStore } from "@/stores/auth";
import { toTypedSchema } from "@vee-validate/zod";
import { HTTPError } from "ky";
import { useForm } from "vee-validate";
import { z } from "zod";

const authStore = useAuthStore();

const { defineField, errors, handleSubmit, isSubmitting, meta } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      email: z.string().min(1).email(),
      password: z.string().min(1),
    }),
  ),
});
const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");

const onSubmit = handleSubmit(async (values, actions) => {
  try {
    await authStore.login(values.email, values.password);
  } catch (error) {
    if (error instanceof HTTPError) {
      if (error.response.status === 401) {
        actions.setErrors({
          email: "Incorrect email or password",
          password: "Incorrect email or password",
        });
      } else {
        throw error;
      }
    } else {
      throw error;
    }
  }
});
</script>

<template>
  <div class="flex justify-center h-screen">
    <div
      class="hidden bg-cover lg:block lg:w-2/3"
      :style="{ backgroundImage: `url(${bgImage})` }"
    />

    <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
      <div class="flex-1">
        <div class="prose text-center">
          <h3>Sign in to access your account</h3>
        </div>

        <button href="#" class="btn btn-block btn-accent mt-8">
          <img
            class="w-6 h-6"
            src="//docs.centralarchives.org/img/logo-a.svg"
            alt="central-archives"
          />

          Sign in with Central Archives
        </button>

        <div class="flex items-center justify-between mt-6">
          <span class="w-1/5 border-b border-base-content lg:w-1/4"></span>

          <span class="text-xs text-center text-base-content uppercase"
            >or login with email</span
          >

          <span class="w-1/5 border-b border-base-content lg:w-1/4"></span>
        </div>

        <div class="mt-2">
          <form @submit="onSubmit">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Email Address</span>
              </div>
              <input
                v-model="email"
                v-bind="emailAttrs"
                type="email"
                name="email"
                id="email"
                placeholder="example@example.com"
                class="input input-bordered w-full"
                :class="{ 'input-error': errors.email }"
              />
              <div class="label">
                <span class="label-text-alt text-error">{{
                  errors.email ?? "&nbsp;"
                }}</span>
              </div>
            </label>

            <label class="form-control w-full mt-4">
              <div class="label">
                <span class="label-text">Password</span>
                <a href="#" class="label-text-alt link link-accent link-hover"
                  >Forgot password?</a
                >
              </div>
              <input
                v-model="password"
                v-bind="passwordAttrs"
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                class="input input-bordered w-full"
                :class="{ 'input-error': errors.password }"
              />
              <div class="label">
                <span class="label-text-alt text-error">{{
                  errors.password ?? "&nbsp;"
                }}</span>
              </div>
            </label>

            <button
              class="mt-6 btn btn-block btn-accent"
              :class="{ 'btn-disabled': !meta.valid || isSubmitting }"
            >
              <span class="loading loading-infinity" v-if="isSubmitting"></span>
              Sign in
            </button>
          </form>
        </div>

        <div class="flex items-center justify-between mt-6">
          <span class="w-1/5 border-b border-base-content lg:w-1/4"></span>

          <a
            href="#"
            class="link link-accent link-hover uppercase text-xs text-center"
          >
            or sign up
          </a>

          <span class="w-1/5 border-b border-base-content lg:w-1/4"></span>
        </div>
      </div>
    </div>
  </div>
</template>
