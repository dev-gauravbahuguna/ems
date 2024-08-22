<!-- <script setup>
document
  .getElementById("menu-toggle")
  .addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
    const hero = document.querySelector(".hero");

    document.body.classList.toggle("overflow-hidden");
    hero.classList.toggle("blur-bg");
  });

</script> -->

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
  <div class="bg-white">
   <Navbar/>

    <nav
      id="mobile-menu"
      class="fixed mt-16 inset-0 bg-gray-900 bg-opacity-90 z-50 w-1/2 flex flex-col gap-9 p-4 space-y-4 lg:hidden hidden"
    >
      <a href="#" class="text-white text-xl hover:text-gray-300">Home</a>
      <a href="#" class="text-white text-xl hover:text-gray-300">Employees</a>
      <a href="#" class="text-white text-xl hover:text-gray-300">Reports</a>
      <a href="#" class="text-white text-xl hover:text-gray-300">Settings</a>
      <a href="/login.html" class="text-white text-xl hover:text-gray-300"
        >Logout</a
      >
    </nav>

    <main class="p-4 lg:p-5 hero">
      <div class="dashboard-header mb-4">
        <h1 class="text-xl lg:text-2xl font-bold">Dashboard</h1>
      </div>

      <div class="lg:flex lg:flex-row lg:flex-wrap flex flex-col gap-4">
        <div
          class="card bg-[#f4f4f4] border border-gray-300 rounded-lg p-4 flex-1 min-w-[250px]"
        >
          <h2 class="text-lg font-semibold">Total Employees</h2>
          <p id="total-employees" class="text-2xl">120</p>
        </div>
        <div
          class="card bg-[#f4f4f4] border border-gray-300 rounded-lg p-4 flex-1 min-w-[250px]"
        >
          <h2 class="text-lg font-semibold">Departments</h2>
          <p id="departments" class="text-2xl">8</p>
        </div>
        <div
          class="card bg-[#f4f4f4] border border-gray-300 rounded-lg p-4 flex-1 min-w-[250px]"
        >
          <h2 class="text-lg font-semibold">Recent Activities</h2>
          <ul id="recent-activities" class="list-disc pl-5">
            <li>Gaurav was promoted to Senior Developer.</li>
            <li>Himanshu joined the Marketing team.</li>
            <li>Employee of the Month: Nitesh.</li>
          </ul>
        </div>
      </div>
    </main>


  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  name: 'Dashboard',
  components:{
    Navbar
  }
 
}
</script>




