<style scoped>
.nav-links li {
  margin: 0 15px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
}

.user-menu a {
  color: #fff;
  text-decoration: none;
  margin-left: 10px;
}

.dashboard-header h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

.card h2 {
  font-size: 22px;
  margin-bottom: 10px;
}

.card p {
  font-size: 18px;
  font-weight: bold;
}

.card ul {
  list-style-type: none;
  padding: 0;
}

.card ul li {
  margin-bottom: 10px;
}

.blur-bg {
  filter: blur(5px);
  transition: filter 0.3s ease;
}

</style>

<template>
     <header
      class="h-16 bg-red-900 text-white flex justify-between p-2 items-center font-extralight"
    >
      <div class="text-xl lg:text-2xl hidden lg:block">
        Employee Management System
      </div>
      <button id="menu-toggle" class="lg:hidden text-white p-2 bg-black">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <ul class="nav-links m-0 p-0 list-none hidden lg:flex">
        <li>
          <a href="#" class="hidden lg:block hover:text-gray-300">Home</a>
        </li>
        <li>
          <a href="#" class="hidden lg:block hover:text-gray-300">Employees</a>
        </li>
        <li>
          <a href="#" class="hidden lg:block hover:text-gray-300">Reports</a>
        </li>
        <li>
          <a href="#" class="hidden lg:block hover:text-gray-300">Settings</a>
        </li>
      </ul>
      <div class="user-menu text-lg lg:text-base lg:block hidden">
        <span>Admin</span> |
        <router-link class=" hover:underline hover:text-gray-300" :to="'/login'">Logout</router-link>
      </div>
    </header>
    
</template>
<router-view/>

<script>

export default {
  name: 'Navbar',
 
}
</script>

