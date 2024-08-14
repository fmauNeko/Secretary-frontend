<template>
  <div class="flex justify-center h-screen">
    <div
      class="hidden bg-cover lg:block lg:w-2/3"
      style="background-image: url(https://picsum.photos/1920/1080)"
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

          <span class="text-xs text-center text-base-content uppercase">or login with email</span>

          <span class="w-1/5 border-b border-base-content lg:w-1/4"></span>
        </div>

        <div class="mt-2">
          <form>
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Email Address</span>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@example.com"
                class="input input-bordered w-full"
              />
            </label>

            <label class="form-control w-full mt-4">
              <div class="label">
                <span class="label-text">Password</span>
                <a href="#" class="label-text-alt link link-accent link-hover">Forgot password?</a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                class="input input-bordered w-full"
              />
            </label>

            <button class="mt-6 btn btn-block btn-accent">Sign in</button>
          </form>

          <div class="flex items-center justify-between mt-6">
            <span class="w-1/5 border-b border-base-content lg:w-1/4"></span>

            <a href="#" class="link link-accent link-hover uppercase text-xs text-center">
              or sign up
            </a>

            <span class="w-1/5 border-b border-base-content lg:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
