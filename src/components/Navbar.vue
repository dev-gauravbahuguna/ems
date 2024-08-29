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
</style>

<template>
  <header class="h-16 bg-red-900 text-white flex justify-between p-2 items-center font-extralight">
    <div class="text-xl lg:text-2xl hidden lg:block">Employee Management System</div>
    <button @click="togglemenu" id="menu-toggle" class="lg:hidden text-white p-2 bg-black">
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
      <router-link to="/login" class="hover:text-gray-300">Logout</router-link>
    </div>
  </header>

  <nav
    id="mobile-menu"
    class="fixed mt-16 inset-0 bg-gray-900 bg-opacity-90 z-50 w-1/2 flex flex-col gap-9 p-4 space-y-4 lg:hidden hidden"
  >
    <a href="#" class="text-white text-xl hover:text-gray-300">Home</a>
    <a href="#" class="text-white text-xl hover:text-gray-300">Employees</a>
    <a href="#" class="text-white text-xl hover:text-gray-300">Reports</a>
    <a href="#" class="text-white text-xl hover:text-gray-300">Settings</a>
    <router-link to="/login" class="text-white text-xl hover:text-gray-300">Logout</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    togglemenu() {
      const mobileMenu = document.getElementById('mobile-menu')
      mobileMenu.classList.toggle('hidden')
      const hero = document.querySelector('.hero')

      document.body.classList.toggle('overflow-hidden')
      hero.classList.toggle('blur-bg')
    }
  }
}
</script>
