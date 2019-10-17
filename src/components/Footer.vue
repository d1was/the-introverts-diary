<template>
  <footer class="text-gray-700 text-sm leading-normal flex flex-wrap justify-between mx-auto max-w-3xl px-6 sm:px-12">
    <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
    </div>
    <div class="w-full sm:w-1/2">
      <nav>
        <ul class="flex sm:justify-end -mx-2">
          <li class="px-2">
            <g-link to="/" class="border-b border-transparent hover:border-gray-400 transition-border-color">Home</g-link>
          </li>
          <li class="px-2">
            <g-link to="/" class="border-b border-transparent hover:border-gray-400 transition-border-color">Gallery</g-link>
          </li>
          <li class="px-2">
            <g-link to="/Cv" class="border-b border-transparent hover:border-gray-400 transition-border-color">CV </g-link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
}
</script>
