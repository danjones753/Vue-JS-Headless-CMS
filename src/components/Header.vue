<template>
<header> 
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto:wght@400;900&display=swap" rel="stylesheet">
</header>
  <section
    class="pb-8 bg-top bg-cover bg-no-repeat"
    style="
      background-image: url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;h=450&amp;q=80&amp;blend=1e293b&amp;sat=30&amp;blend-mode=multiply');height:95vh;
    "
  >
    <div class="container px-4 mx-auto">
      <nav class="flex justify-between items-center py-6">
        <a class="text-3xl text-white font-semibold leading-none" href="#">
          <!-- Add SVG Logo Here -->
        </a>
        <div class="lg:hidden">
          <!-- Hamburger Menu To Be Added -->
        </div>
        <ul class="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
          <li>
            <a
              class="text-sm text-blueGray-100 hover:text-blueGray-200"
              href="#"
              >Product</a
            >
          </li>
          <li>
            <a
              class="text-sm text-blueGray-100 hover:text-blueGray-200"
              href="#"
              >Company</a
            >
          </li>
          <li>
            <a
              class="text-sm text-blueGray-100 hover:text-blueGray-200"
              href="#"
              >About Us</a
            >
          </li>
          <li>
            <a
              class="text-sm text-blueGray-100 hover:text-blueGray-200"
              href="#"
              >Features</a
            >
          </li>
        </ul>
        <div class="hidden lg:block">
          <a
            class="mr-2 inline-block px-4 py-3 text-xs text-blueGray-100 hover:text-blueGray-200 font-semibold leading-none border border-blueGray-200 hover:border-blueGray-300 rounded"
            href="#"
            >Log In</a
          >
        </div>
      </nav>
      <div class="py-12 text-center">
        <div class="max-w-lg mx-auto mb-8">
          <h2
            style="font-family: 'Fredoka One', cursive;" class="text-4xl uppercase md:text-5xl mb-4 text-white font-bold font-heading"
          >
            <span>The quick</span>
            <span class="text-blue-600">brown fox</span>
            <span>jumps over the lazy dog.</span>
          </h2>
        </div>
        <div>
          <a
            class="block uppercase hover:bg-lightblue sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-sm text-white bg-blue text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
            href="#"
            >Discover More</a
          >
        </div>
      </div>
    </div>
    <div
      class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50"
    >
      <div
        class="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"
      ></div>
      <nav
        class="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto"
      >
        <div class="flex items-center mb-8">
          <a class="mr-auto text-3xl font-semibold leading-none" href="#">
            <img
              class="h-10"
              src="metis-assets/logos/metis/metis.svg"
              alt=""
              width="auto"
            />
          </a>
          <button class="navbar-close">
            <svg
              class="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewbox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li class="mb-1">
              <a
                class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                href="#"
                >Product</a
              >
            </li>
            <li class="mb-1">
              <a
                class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                href="#"
                >Company</a
              >
            </li>
            <li class="mb-1">
              <a
                class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                href="#"
                >About Us</a
              >
            </li>
            <li class="mb-1">
              <a
                class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                href="#"
                >Features</a
              >
            </li>
          </ul>
          <div class="mt-4 pt-6 border-t border-blueGray-100">
            <a
              class="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded"
              href="#"
              >Sign Up</a
            ><a
              class="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded"
              href="#"
              >Log In</a
            >
          </div>
        </div>
        <div class="mt-auto">
          <p class="my-4 text-xs text-blueGray-400">
            <span>Get in Touch</span>
            <a class="text-blue-600 hover:text-blue-600 underline" href="#"
              >info@example.com</a
            >
          </p>
          <a class="inline-block px-1" href="#">
            <img src="metis-assets/icons/facebook-blue.svg" alt="" />
          </a>
          <a class="inline-block px-1" href="#">
            <img src="metis-assets/icons/twitter-blue.svg" alt="" />
          </a>
          <a class="inline-block px-1" href="#">
            <img src="metis-assets/icons/instagram-blue.svg" alt="" />
          </a>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {};
</script>
