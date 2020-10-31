<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full bg-indigo">
    <div
      class="absolute flex flex-col w-full h-full md:w-64 text-gray-700 dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 sidebar-bg"
    >
      <p class="text-white text-bold text-center mt-20 title-1">nk</p>
      <p class="text-center mt-10">
        <button
          class="rounded-lg hover:border-transparent hover:text-red-500 focus:outline-none focus:shadow-lg transform hover:rotate-45 text-white w-20 h-20 transition duration-500 title-1 outline-blue"
        >
          +
        </button>
      </p>
      <div class="notes-list mt-2">
        <div class="preview pt-3 text-white flex flex-col relative">
          <input
            class="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-16"
            id="username"
            type="text"
            placeholder="Username"
          />
          <div class="flex content pl-4">
            <button
              class="close-btn absolute flex justify-center items-center focus:outline-none right-0 mt-5 mr-1 w-5 h-5"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="times"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-30 -50 400 612"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </button>
            <div
              class="bookmark color absolute flex justify-center items-center right-0 mr-1 w-4 h-4"
            ></div>
            <div class="info flex flex-col">
              <span class="date title-2">{{ date.getDate() }}</span>
              <span class="month">{{ date.getMonth() }}</span>
            </div>
            <div class="flex flex-col justify-center pl-3 content">
              <div class="font-bold">My Awesome Title</div>
              <p class="text-gray-500">Double click to edit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date()
    };
  }
};
</script>

<style></style>
