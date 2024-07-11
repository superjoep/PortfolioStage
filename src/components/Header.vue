<template>
    <div class="flex   justify-center items-center pb-5">
      <nav style="font-family: mainText;" class="sticky max-w-lg top-0 w-50 h-10  bg-gray-200  rounded-full mt-0 flex justify-center items-center">
        <RouterLink to="/" class="block px-3 py-2 rounded-md text-gray-700 hover:bg-white">Home</RouterLink>
        <RouterLink to="/about" class="block px-3 py-2 rounded-md text-gray-700 hover:bg-white">About</RouterLink>
        <RouterLink to="/projects" class="block px-3 py-2 rounded-md text-gray-700 hover:bg-white">My projects</RouterLink>
        <RouterLink to="/skills" class="block px-3 py-2 rounded-md text-gray-700 hover:bg-white">My skills</RouterLink>
        <RouterLink to="/contact" class="block px-3 py-2 rounded-md text-gray-700 hover:bg-white">Contact me</RouterLink>
      </nav>
    </div>
</template>
  
  <script>
    export default {
      name: 'Navbar'
    }
  </script>